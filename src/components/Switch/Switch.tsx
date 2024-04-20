import React, { useState } from 'react';
import './Switch.style.css'; // You can create a CSS file for styling

interface SwitchProps {
    label?: string;
    onChange: (checked: boolean) => void;
    defaultValue?: boolean;
    isSwitchLeft?: boolean;
    isJustifyBetween?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ label, onChange, defaultValue, isSwitchLeft, isJustifyBetween }) => {
  const [checked, setChecked] = useState(defaultValue);

  const toggleSwitch = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className={`switch-container flex ${isSwitchLeft ? 'flex-row-reverse' : 'flex-row'} ${isJustifyBetween ? 'justify-between' : ''}`}>
      {label && <label className={`switch-label ${isSwitchLeft ? 'ml-4' : 'mr-4'}`}>{label}</label>}
      <div className={`switch ${checked ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className={`switch-handle ${checked ? 'on' : 'off'}`}></div>
      </div>
    </div>
  );
};

export default Switch;
