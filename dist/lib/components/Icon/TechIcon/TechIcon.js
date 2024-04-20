"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white
const baseUrl = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';
const TechIcon = ({ code, size = 32 }) => {
    const url = `${baseUrl}/${code}/${code}-original.svg`;
    const darkCompanyIcons = [
        'unity',
        'unrealengine'
    ];
    const isDarkBranding = darkCompanyIcons.includes(code);
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            // width: '2rem',
            // height: '2rem',
            width: `${size}px`,
            height: `${size}px`,
            padding: isDarkBranding
                ? '3px'
                : '0px',
            paddingTop: isDarkBranding
                ? '6px'
                : 0,
            marginTop: isDarkBranding ? '-6px' : 0,
            marginLeft: '12px',
            backgroundColor: isDarkBranding
                ? '#FFF'
                : 'transparent',
            borderRadius: isDarkBranding
                ? '50%'
                : '0'
        }, children: (0, jsx_runtime_1.jsx)("img", { src: url, alt: code, width: `${(isDarkBranding ? size - 6 : size)}px`, height: `${(isDarkBranding ? size - 6 : size)}px`, style: {} }) }));
};
exports.TechIcon = TechIcon;
exports.TechIcon.defaultProps = {};
exports.default = exports.TechIcon;
