"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepProgress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./StepProgress.scss"); // Assuming the styles are in a Sass file
const StepProgress = ({ totalSteps, currentStep, isVertical = false, fillFromEnd = false, fillColor = '#0067FF', // Default active color
defaultColor = '#ddd', // Default inactive color
 }) => {
    const steps = Array.from({ length: totalSteps });
    const calculateStepStyle = (index) => {
        const percentage = ((index + 1) / totalSteps) * 100;
        const isActive = (index + 1) / totalSteps <= currentStep / totalSteps;
        if (isVertical) {
            return {
                height: `${percentage}%`,
                top: fillFromEnd ? 'auto' : 0,
                bottom: fillFromEnd ? 0 : 'auto',
                backgroundColor: isActive ? fillColor : defaultColor,
            };
        }
        const result = {
            width: `${percentage}%`,
            left: fillFromEnd ? 'auto' : 0,
            right: fillFromEnd ? 0 : 'auto',
            backgroundColor: isActive ? fillColor : defaultColor,
        };
        console.log(`Step style ${index}`, result);
        return result;
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: `step-progress ${isVertical ? 'vertical' : 'horizontal'}`, children: steps.map((_, index) => ((0, jsx_runtime_1.jsx)("div", { className: `step ${calculateStepStyle(index).height ? 'vertical' : 'horizontal'}`, style: calculateStepStyle(index) }, index))) }));
};
exports.StepProgress = StepProgress;
exports.default = exports.StepProgress;
