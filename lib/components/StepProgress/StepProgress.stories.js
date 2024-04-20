"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStory = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const StepProgress_1 = __importDefault(require("./StepProgress"));
// const withProvider = (story: Function) => <Provider store={store}>{story()}</Provider>;
const meta = {
    title: 'Components/Core/StepProgress',
    component: StepProgress_1.default,
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
    decorators: [
    // withProvider
    ]
};
exports.default = meta;
const DefaultStory = () => ([
    (0, jsx_runtime_1.jsx)(StepProgress_1.default, { totalSteps: 7, currentStep: 3, isVertical: true }),
    (0, jsx_runtime_1.jsx)(StepProgress_1.default, { totalSteps: 7, currentStep: 3 }),
]);
exports.DefaultStory = DefaultStory;
