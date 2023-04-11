"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
var _imports_0 = "/components/calendar/images/calendar.svg";
var _imports_1 = "/components/calendar/images/btn_pre.svg";
var _imports_2 = "/components/calendar/images/btn_next.svg";
const MODES = {
  normal: "normal",
  picker: "picker",
  pickerRange: "pickerRange"
};
const LANGUAGES = {
  en: "EN",
  zh: "ZH"
};
const SELECTEDMODE = {
  square: "square",
  round: "round"
};
const MONTHS_EN = ["", "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
const WEEKDAYS_ZH = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
const WEEKDAYS_EN = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];
const _sfc_main = common_vendor.defineComponent({
  name: "CalendarComponent",
  props: {
    mode: {
      type: String,
      default: "normal"
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u65E5\u671F"
    },
    language: {
      type: String,
      default: "ZH"
    },
    selectedMode: {
      type: String,
      default: "round"
    },
    showMoreDays: {
      type: Boolean,
      default: true
    },
    showDot: {
      type: Boolean,
      default: true
    },
    selectedDate: {
      type: String,
      default: ""
    },
    daysStyle: {
      type: Array,
      default: () => {
        return [];
      }
    },
    dotColor: {
      type: String,
      default: "#f00"
    },
    dotDays: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["onMonthChange", "onDayClick", "onRangeComplete"],
  setup(props, { emit }) {
    let state = common_vendor.reactive({
      initFinished: false,
      selectedClassName: "",
      currenDate: null,
      days: [],
      beginDateObj: null,
      endDateObj: null,
      formatValue: "",
      showCalendar: false,
      weekdays: [],
      title: "",
      year: -1,
      month: -1,
      selectedDated: props.selectedDate
    });
    const refreshCalendar = () => {
      const now = new Date();
      let currenDate = state.currenDate;
      let year = currenDate.getFullYear();
      let month = currenDate.getMonth() + 1;
      let days = [];
      let days_pre = [];
      let days_next = [];
      let length_days = getMonthDayCount(currenDate);
      for (let i = 0; i < length_days; i++) {
        let date = new Date(currenDate.getTime() + 864e5 * i);
        let id = formatDate(date);
        let day = {
          id,
          date,
          currentMonth: true
        };
        days.push(day);
      }
      let d_first_day = getFirstDay(currenDate);
      let lenght_pre = d_first_day.getDay();
      for (let i = 0; i < lenght_pre; i++) {
        let date = new Date(currenDate.getTime() - 864e5 * (lenght_pre - i));
        let id = formatDate(date);
        let day = {
          id,
          date,
          currentMonth: false
        };
        days_pre.push(day);
      }
      days = [...days_pre, ...days];
      let lenght_next = Math.abs(days.length % 7 - 7);
      lenght_next = lenght_next == 7 ? 0 : lenght_next;
      let d_next_month_first_day = getNextMonthFirstDay(currenDate);
      for (let i = 0; i < lenght_next; i++) {
        let date = new Date(d_next_month_first_day.getTime() + 864e5 * i);
        let id = formatDate(date);
        let day = {
          id,
          date,
          currentMonth: false
        };
        days_next.push(day);
      }
      days = [...days, ...days_next];
      const nowFormat = formatDate(now.getTime());
      days.forEach((element) => {
        element.isToday = element.id === nowFormat;
        if (element.isToday) {
          element.className = "today";
        }
        if (element.currentMonth) {
          element.text = "" + element.date.getDate();
          element.clickable = true;
        } else {
          if (props.showMoreDays) {
            element.text = "" + element.date.getDate();
            element.clickable = true;
          } else {
            element.text = "";
            element.clickable = false;
          }
        }
        if (props.dotDays.includes(element.id)) {
          element.showDot = true;
          element.dotColor = props.dotColor;
        }
        if (state.beginDateObj != null && state.endDateObj != null) {
          const start = state.beginDateObj.getTime();
          const end = state.endDateObj.getTime();
          if (start < element.date.getTime() && element.date.getTime() < end) {
            element.inRange = true;
          } else {
            element.inRange = false;
          }
          if (element.date.getTime() == state.beginDateObj.getTime()) {
            element.rangeClassName += " day-range-start";
          }
          if (element.date.getTime() == state.endDateObj.getTime()) {
            element.rangeClassName += " day-range-end";
          }
        } else {
          element.inRange = false;
        }
        if (element.inRange) {
          element.isToday = false;
          element.rangeClassName = "day-in-range";
        }
        let selectedDate = state.selectedDated;
        let beginDate = state.beginDateObj != null ? formatDate(state.beginDateObj.getTime()) : "";
        let endDate = state.endDateObj != null ? formatDate(state.endDateObj.getTime()) : "";
        if (element.id == selectedDate || element.id == beginDate || element.id == endDate) {
          element.className = state.selectedClassName;
        }
        element.style = getStyleById(element.id);
        const param = getParamById(element.id);
        element.showSubNum = param.showSubNum;
        element.subNum = param.subNum;
        element.subStyle = param.subStyle;
        element.showDot = param.showDot;
        element.dotColor = param.dotColor;
      });
      let title = `${year}\u5E74 ${month}\u6708`;
      switch (props.language) {
        case LANGUAGES.en:
          title = `${MONTHS_EN[month]} ${year}`;
          break;
      }
      state.title = title;
      state.year = year;
      state.month = month;
      state.days = days;
    };
    const getStyleById = (id) => {
      let styleArr = props.daysStyle;
      for (let i = 0; i < styleArr.length; i++) {
        if (styleArr[i].id == id) {
          return styleArr[i].style;
        }
      }
      return "";
    };
    const getParamById = (id) => {
      let styleArr = props.daysStyle;
      for (let i = 0; i < styleArr.length; i++) {
        if (styleArr[i].id == id) {
          return styleArr[i];
        }
      }
      return {};
    };
    const getFirstDay = (date) => {
      let year = date.getFullYear();
      let month = date.getMonth();
      return new Date(year + "/" + (month + 1) + "/1");
    };
    const getPreMonthFirstDay = (date) => {
      let year = date.getFullYear();
      let month = date.getMonth();
      if (month == 0) {
        return new Date(year - 1 + "/12/01");
      } else {
        return new Date(year + "/" + month + "/01");
      }
    };
    const getNextMonthFirstDay = (date) => {
      let year = date.getFullYear();
      let month = date.getMonth();
      if (month == 11) {
        return new Date(year + 1 + "/01/01");
      } else {
        return new Date(year + "/" + (month + 2) + "/01");
      }
    };
    const getMonthDayCount = (date) => {
      let year = date.getFullYear();
      let month = date.getMonth();
      let d_first_day = new Date(year + "/" + (month + 1) + "/1");
      new Date(d_first_day.getTime() - 864e5);
      let d_next_month_first_day;
      if (month == 11) {
        d_next_month_first_day = new Date(year + 1 + "/01/01");
      } else {
        d_next_month_first_day = new Date(year + "/" + (month + 2) + "/01");
      }
      return (d_next_month_first_day.getTime() - d_first_day.getTime()) / 864e5;
    };
    const pre = () => {
      let currenDate = getPreMonthFirstDay(state.currenDate);
      state.currenDate = currenDate;
      refreshCalendar();
      emit("onMonthChange", currenDate);
    };
    const next = () => {
      let currenDate = getNextMonthFirstDay(state.currenDate);
      state.currenDate = currenDate;
      refreshCalendar();
      emit("onMonthChange", currenDate);
    };
    const showPicker = () => {
      state.showCalendar = true;
    };
    const onDayClick = (index) => {
      let day = state.days[index];
      if (!day.clickable) {
        return;
      }
      if (props.mode == MODES.normal || props.mode == MODES.picker) {
        let selectedDate = formatDate(day.date);
        let formatValue = formatDate(day.date);
        state.showCalendar = false;
        state.selectedDated = selectedDate;
        state.formatValue = formatValue;
        emit("onDayClick", day);
      } else if (props.mode == MODES.pickerRange) {
        console.log("\u9009\u62E9\u8303\u56F4\u6A21\u5F0F");
        if (state.beginDateObj == null) {
          state.beginDateObj = day.date;
        } else if (state.endDateObj == null) {
          let formatValue;
          if (day.date.getTime() < state.beginDateObj.getTime()) {
            formatValue = formatDate(day.date) + " \u81F3 " + formatDate(state.beginDateObj);
            state.showCalendar = false;
            state.beginDateObj = day.date;
            state.endDateObj = state.beginDateObj;
            state.formatValue = formatValue;
          } else {
            formatValue = formatDate(state.beginDateObj) + " \u81F3 " + formatDate(day.date);
            state.showCalendar = false;
            state.endDateObj = day.date;
            state.formatValue = formatValue;
          }
          let result = {
            begin: state.beginDateObj,
            end: state.endDateObj
          };
          emit("onRangeComplete", result);
        } else {
          state.beginDateObj = null;
          state.endDateObj = null;
        }
      }
      refreshCalendar();
    };
    const formatDate = (time) => {
      var d = new Date(time);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      return year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
    };
    common_vendor.onMounted(() => {
      console.log(1111);
      let selectedClassName;
      if (SELECTEDMODE.square == props.selectedMode) {
        selectedClassName = "day-selected-square";
      } else {
        selectedClassName = "day-selected-round";
      }
      if (props.mode == MODES.pickerRange) {
        state.selectedDated = "";
      } else {
        state.formatValue = state.selectedDated;
      }
      let now = new Date();
      let year, month;
      if (state.year != -1 && state.month != -1) {
        year = state.year;
        month = state.month;
      } else {
        year = now.getFullYear();
        month = now.getMonth() + 1;
      }
      let currenDate = new Date(year + "/" + month + "/1");
      let weekdays = WEEKDAYS_ZH;
      switch (props.language) {
        case LANGUAGES.en:
          weekdays = WEEKDAYS_EN;
          break;
        case LANGUAGES.zh:
          weekdays = WEEKDAYS_ZH;
          break;
        default:
          weekdays = WEEKDAYS_ZH;
          break;
      }
      state.initFinished = true;
      state.currenDate = currenDate, state.weekdays = weekdays;
      state.selectedClassName = selectedClassName;
      refreshCalendar();
    });
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(state)), {
      onDayClick,
      showPicker,
      pre,
      next
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.mode == "picker" || _ctx.mode == "pickerRange"
  }, _ctx.mode == "picker" || _ctx.mode == "pickerRange" ? {
    b: _imports_0,
    c: common_vendor.t(_ctx.formatValue == "" ? _ctx.placeholder : _ctx.formatValue),
    d: common_vendor.n(_ctx.formatValue == "" ? " placeholder" : ""),
    e: common_vendor.o((...args) => _ctx.showPicker && _ctx.showPicker(...args))
  } : {}, {
    f: _ctx.mode == "normal" || _ctx.showCalendar
  }, _ctx.mode == "normal" || _ctx.showCalendar ? {
    g: _imports_1,
    h: common_vendor.o((...args) => _ctx.pre && _ctx.pre(...args)),
    i: common_vendor.t(_ctx.title),
    j: _imports_2,
    k: common_vendor.o((...args) => _ctx.next && _ctx.next(...args)),
    l: common_vendor.f(_ctx.weekdays, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    m: common_vendor.f(_ctx.days, (day, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(day.text),
        b: day.currentMonth
      }, day.currentMonth ? common_vendor.e({
        c: day.showSubNum
      }, day.showSubNum ? {
        d: common_vendor.t(day.subNum),
        e: common_vendor.s(day.subStyle)
      } : {}) : {}, {
        f: day.showDot
      }, day.showDot ? {
        g: common_vendor.s("background: " + day.dotColor)
      } : {}, {
        h: common_vendor.n(day.className),
        i: common_vendor.s(day.currentMonth ? day.style : ""),
        j: common_vendor.n(day.rangeClassName),
        k: day.id,
        l: common_vendor.n(day.currentMonth ? " day-current-month" : ""),
        m: common_vendor.o(($event) => _ctx.onDayClick(index))
      });
    }),
    n: common_vendor.n(_ctx.mode != "normal" ? " fixed" : "")
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
my.createComponent(Component);
