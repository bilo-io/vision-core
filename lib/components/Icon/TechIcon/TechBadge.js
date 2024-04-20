"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white
const baseUrl = 'https://img.shields.io/badge';
const TechIcon = ({ code, color, style }) => {
    const urlEncodedHexColor = encodeURIComponent(color);
    const url = `${baseUrl}/${code}-${urlEncodedHexColor}.svg?${`style=${style}`}${`&logo=${code}`}${'&logoColor=#FF00FF'}`;
    console.log(url);
    return ((0, jsx_runtime_1.jsx)("img", { src: url, alt: code }));
};
exports.TechIcon = TechIcon;
exports.TechIcon.defaultProps = {
    style: 'for-the-badge'
};
exports.default = exports.TechIcon;
