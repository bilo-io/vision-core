"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_select_1 = __importDefault(require("react-select"));
const hooks_1 = require("hooks");
const Dropdown = (_a) => {
    var { isMulti, options, value, onChange, style, 
    // type,
    label } = _a, rest = __rest(_a, ["isMulti", "options", "value", "onChange", "style", "label"]);
    const { theme } = (0, hooks_1.useAppTheme)();
    const defaultStyle = {
        // backgroundColor: 'rgba(255, 255, 255, 0.2)',
        // borderBottom: '1px solid #0067FF'
        color: theme.ERROR,
        backgroundColor: theme.BACKGROUND
    };
    const customStyles = {
        control: (provided, state) => (Object.assign(Object.assign({}, provided), { border: state.isFocused ? '1px solid #36f' : '1px solid #ccc' })),
        option: (provided, state) => (Object.assign(Object.assign({}, provided), { backgroundColor: state.isSelected ? '#36f' : theme.BACKGROUND, color: state.isSelected ? 'white' : theme.TEXT })),
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [label && (0, jsx_runtime_1.jsx)("div", { children: label }), (0, jsx_runtime_1.jsx)(react_select_1.default
            // type={type}
            , Object.assign({ 
                // type={type}
                options: options, value: value, isMulti: isMulti, closeMenuOnSelect: !isMulti, onChange: onChange, styles: customStyles, 
                // @ts-ignore
                style: Object.assign(Object.assign({}, defaultStyle), style) }, rest))] }));
};
exports.Dropdown = Dropdown;
exports.default = exports.Dropdown;
