"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const logo_playstation_svg_1 = __importDefault(require("./assets/logo-playstation.svg"));
const logo_nintendo_switch_svg_1 = __importDefault(require("./assets/logo-nintendo-switch.svg"));
const logo_xbox_svg_1 = __importDefault(require("./assets/logo-xbox.svg"));
const logo_unrealengine_svg_1 = __importDefault(require("./assets/logo-unrealengine.svg"));
const logo_unity_svg_1 = __importDefault(require("./assets/logo-unity.svg"));
const logo_godot_svg_1 = __importDefault(require("./assets/logo-godot.svg"));
const logo_apple_svg_1 = __importDefault(require("./assets/logo-apple.svg"));
const logo_ios_svg_1 = __importDefault(require("./assets/logo-ios.svg"));
const logo_android_svg_1 = __importDefault(require("./assets/logo-android.svg"));
const logo_windows_svg_1 = __importDefault(require("./assets/logo-windows.svg"));
const CompanyIcon = ({ code, containerStyle, imgStyle, isRound }) => {
    const getIcon = (code) => {
        switch (code) {
            case 'fuzzy': return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZopRJp7jJ-nFaghb09zQXP3_DxyRol2VLY7U3w_tKw&s';
            case 'microsoft': return 'https://www.pngmart.com/files/4/Microsoft-Logo-PNG-Clipart.png';
            case 'revix': return 'https://s3.amazonaws.com/startuplist.africa/startups/revix/revix-logo.png';
            case 'uct': return 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/University_of_Cape_Town_logo.svg/800px-University_of_Cape_Town_logo.svg.png';
            case 'unreal': return 'https://sm.ign.com/t/ign_in/screenshot/default/fmjq1cvo-400x400_jz72.2560.jpg';
            case 'wimt': return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDgic12IjawqwgpUPgql0qxyTluUa0GN75iF0pFPhSGfIutMUVNhYUGrix223Cn2wB_s&usqp=CAU';
            case 'zappi': return 'https://www.insightplatforms.com/wp-content/uploads/2022/03/Zappi-Logo-Square-Insight-Platforms.png';
            case 'gamemaker': return 'https://coal.gamemaker.io/sites/5d75794b3c84c70006700381/theme/images/svg/logomark.svg';
            case 'playstation': return logo_playstation_svg_1.default;
            case 'unrealengine': return logo_unrealengine_svg_1.default;
            // case 'unity': return 'https://icon-library.com/images/unity-icon/unity-icon-22.jpg'
            case 'unity': return logo_unity_svg_1.default;
            case 'godot': return logo_godot_svg_1.default;
            case 'apple': return logo_apple_svg_1.default;
            case 'ios': return logo_ios_svg_1.default;
            case 'android': return logo_android_svg_1.default;
            case 'windows': return logo_windows_svg_1.default;
            case 'xbox': return logo_xbox_svg_1.default;
            case 'nintendo':
            case 'switch': return logo_nintendo_switch_svg_1.default;
            default: return '';
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: containerStyle, children: (0, jsx_runtime_1.jsx)("img", { src: getIcon(code === null || code === void 0 ? void 0 : code.toLowerCase()), alt: code, style: Object.assign(Object.assign({}, imgStyle), (isRound ? {} : { borderRadius: 0 })) }) }));
};
exports.CompanyIcon = CompanyIcon;
exports.CompanyIcon.defaultProps = {
    imgStyle: {
        width: '2rem',
        height: '2rem',
        borderRadius: '50%'
    }
};
exports.default = exports.CompanyIcon;
