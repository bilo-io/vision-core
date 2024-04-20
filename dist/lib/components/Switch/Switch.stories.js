"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStory = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Switch_1 = __importDefault(require("./Switch"));
// const withProvider = (story: Function) => <Provider store={store}>{story()}</Provider>;
const meta = {
    title: 'Components/Core/Switch',
    component: Switch_1.default,
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
    decorators: [
    // withProvider
    ]
};
exports.default = meta;
const DefaultStory = () => ([
    (0, jsx_runtime_1.jsx)(Switch_1.default, { onChange: function (checked) {
            throw new Error('Function not implemented.');
        } }),
    (0, jsx_runtime_1.jsx)(Switch_1.default, { onChange: function (checked) {
            throw new Error('Function not implemented.');
        } }),
]);
exports.DefaultStory = DefaultStory;
