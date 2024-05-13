import React from 'react';
import './Switch.style.css';
interface SwitchProps {
    label?: string;
    onChange: (checked: boolean) => void;
    defaultValue?: boolean;
    isSwitchLeft?: boolean;
    isJustifyBetween?: boolean;
}
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map