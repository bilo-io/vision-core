import { ITheme } from '../styles/colors';
export declare const setThemeStorage: (type: 'light' | 'dark') => void;
export declare const toggleTheme: () => void;
export declare const useAppTheme: () => {
    name: 'dark' | 'light';
    theme: ITheme;
};
