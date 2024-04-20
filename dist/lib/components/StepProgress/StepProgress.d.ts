import React from 'react';
import './StepProgress.scss';
interface StepProgressProps {
    totalSteps: number;
    currentStep: number;
    isVertical?: boolean;
    fillFromEnd?: boolean;
    fillColor?: string;
    defaultColor?: string;
}
export declare const StepProgress: React.FC<StepProgressProps>;
export default StepProgress;
