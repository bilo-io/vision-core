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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./button.css");
const hooks_1 = require("hooks");
/**
 * Primary UI component for user interaction
 */
const Button = (_a) => {
    var { variant = 'primary', size = 'md', backgroundColor, children, className, style, isDisabled } = _a, props = __rest(_a, ["variant", "size", "backgroundColor", "children", "className", "style", "isDisabled"]);
    const mode = `storybook-button--${variant}`;
    const { theme } = (0, hooks_1.useAppTheme)();
    const secondaryStyle = {
        backgroundColor: theme.TEXT,
        color: theme.BACKGROUND,
        opacity: 1
    };
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ disabled: isDisabled, type: "button", className: ['storybook-button', `storybook-button--${size}`, mode, className].join(' ') + ' flex flex-row items-center', style: Object.assign(Object.assign(Object.assign({ backgroundColor }, style), { opacity: isDisabled ? 0.5 : (style === null || style === void 0 ? void 0 : style.opacity) || 1 }), (variant === 'secondary' ? secondaryStyle : {})) }, props, { children: children })));
};
exports.Button = Button;
exports.Button.defaultProps = {
    variant: 'primary',
    size: 'md'
};
exports.default = exports.Button;
