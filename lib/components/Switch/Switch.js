"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Switch.style.css"); // You can create a CSS file for styling
const Switch = ({ label, onChange, defaultValue, isSwitchLeft, isJustifyBetween }) => {
    const [checked, setChecked] = (0, react_1.useState)(defaultValue);
    const toggleSwitch = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        onChange(newChecked);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: `switch-container flex ${isSwitchLeft ? 'flex-row-reverse' : 'flex-row'} ${isJustifyBetween ? 'justify-between' : ''}`, children: [label && (0, jsx_runtime_1.jsx)("label", { className: `switch-label ${isSwitchLeft ? 'ml-4' : 'mr-4'}`, children: label }), (0, jsx_runtime_1.jsx)("div", { className: `switch ${checked ? 'on' : 'off'}`, onClick: toggleSwitch, children: (0, jsx_runtime_1.jsx)("div", { className: `switch-handle ${checked ? 'on' : 'off'}` }) })] }));
};
exports.Switch = Switch;
exports.default = exports.Switch;
