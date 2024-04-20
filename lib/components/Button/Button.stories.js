"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStory = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("./Button"));
const Provider_1 = __importDefault(require("../../../../.storybook/Provider"));
const store_1 = require("../../../store");
const withProvider = (story) => (0, jsx_runtime_1.jsx)(Provider_1.default, { store: store_1.store, children: story() });
const meta = {
    title: 'Components/Core/Button',
    // @ts-ignore
    component: Button_1.default,
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // variant: 'primary',
        // size: 'lg',
        children: (0, jsx_runtime_1.jsx)("div", { children: "Hello" })
    },
    decorators: [
        withProvider
    ]
};
exports.default = meta;
const DefaultStory = () => {
    const data = [
        'primary',
        'secondary',
        'success',
        'warning',
        'error'
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: 'flex flex-row', children: data.map((variant) => ((0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, className: 'mr-2 mb-2', children: (0, jsx_runtime_1.jsx)("div", { children: variant }) }, variant))) }));
};
exports.DefaultStory = DefaultStory;
