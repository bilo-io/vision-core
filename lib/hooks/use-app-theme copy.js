"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppTheme = exports.toggleTheme = exports.setThemeStorage = void 0;
const react_1 = require("react");
const colors_1 = require("../styles/colors");
const storageKey = 'vision-theme';
const setThemeStorage = (type) => {
    // TODO: useContext to set the theme
    localStorage.setItem(storageKey, type);
};
exports.setThemeStorage = setThemeStorage;
const toggleTheme = () => {
    const name = localStorage.getItem(storageKey);
    if (name === 'dark') {
        localStorage.setItem(storageKey, 'light');
    }
    else {
        localStorage.setItem(storageKey, 'dark');
    }
    window.location.reload();
};
exports.toggleTheme = toggleTheme;
const useAppTheme = () => {
    const [themeName, setThemeName] = (0, react_1.useState)('dark');
    const [theme, setTheme] = (0, react_1.useState)(localStorage.getItem(storageKey) || 'dark');
    (0, react_1.useEffect)(() => {
        // @ts-ignore
        setTheme(theme);
        // @ts-ignore
        (0, exports.setThemeStorage)(theme);
        setThemeName(theme);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return themeName === 'dark'
        ? {
            name: 'dark',
            theme: colors_1.dark
        }
        : {
            name: 'light',
            theme: colors_1.light
        };
};
exports.useAppTheme = useAppTheme;
