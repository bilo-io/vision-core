"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStory = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Dropdown_1 = __importDefault(require("./Dropdown"));
const Provider_1 = __importDefault(require("../../../../.storybook/Provider"));
const store_1 = require("../../../store");
const react_1 = require("react");
const withProvider = (story) => (0, jsx_runtime_1.jsx)(Provider_1.default, { store: store_1.store, children: story() });
const meta = {
    title: 'Components/Core/Dropdown',
    component: Dropdown_1.default,
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
    decorators: [
        withProvider
    ]
};
exports.default = meta;
const data = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' },
    { value: 'honeydew', label: 'Honeydew' },
    { value: 'kiwi', label: 'Kiwi' },
    { value: 'lemon', label: 'Lemon' },
    { value: 'mango', label: 'Mango' },
    { value: 'nectarine', label: 'Nectarine' },
    { value: 'orange', label: 'Orange' },
    { value: 'pear', label: 'Pear' },
    { value: 'quince', label: 'Quince' },
    { value: 'raspberry', label: 'Raspberry' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'tangerine', label: 'Tangerine' },
    { value: 'watermelon', label: 'Watermelon' },
    { value: 'yuzu', label: 'Yuzu' },
];
const DefaultStory = () => {
    const [value, setValue] = (0, react_1.useState)(data[0]);
    return ((0, jsx_runtime_1.jsx)(Dropdown_1.default, { options: data, value: value, onChange: (newValue, actionMeta) => {
            setValue(newValue);
        } }));
};
exports.DefaultStory = DefaultStory;
