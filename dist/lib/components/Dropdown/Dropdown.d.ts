import React from 'react';
import { ActionMeta } from 'react-select';
interface DropdownProps {
    isMulti?: boolean;
    options: {
        value: string;
        label: any;
    }[];
    value: any;
    onChange: (newValue: any, actionMeta: ActionMeta<any>) => void;
    style?: any;
    label?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
