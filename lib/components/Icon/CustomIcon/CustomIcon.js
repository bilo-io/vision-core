"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icon_dashboard_svg_1 = require("./assets/icon-dashboard.svg");
const icon_sound_wave_svg_1 = require("./assets/icon-sound-wave.svg");
const icon_video_svg_1 = require("./assets/icon-video.svg");
const icon_movie_svg_1 = require("./assets/icon-movie.svg");
const icon_gallery_svg_1 = require("./assets/icon-gallery.svg");
const icon_google_svg_1 = require("./assets/icon-google.svg");
const icon_graphs_svg_1 = require("./assets/icon-graphs.svg");
const icon_home_outline_svg_1 = require("./assets/icon-home-outline.svg");
const icon_folder_minus_svg_1 = require("./assets/icon-folder-minus.svg");
const icon_folder_minus_open_svg_1 = require("./assets/icon-folder-minus-open.svg");
const icon_folder_plus_svg_1 = require("./assets/icon-folder-plus.svg");
const icon_document_svg_1 = require("./assets/icon-document.svg");
const icon_document_plus_svg_1 = require("./assets/icon-document-plus.svg");
const icon_dialogue_svg_1 = require("./assets/icon-dialogue.svg");
const icon_character_svg_1 = require("./assets/icon-character.svg");
const icon_credit_svg_1 = require("./assets/icon-credit.svg");
const icon_controls_svg_1 = require("./assets/icon-controls.svg");
const icon_location_svg_1 = require("./assets/icon-location.svg");
const icon_mountain_svg_1 = require("./assets/icon-mountain.svg");
const icon_plus_svg_1 = require("./assets/icon-plus.svg");
const icon_palette_3_svg_1 = require("./assets/icon-palette-3.svg");
const icon_text_svg_1 = require("./assets/icon-text.svg");
const CustomIcon = ({ title, name, imageClass, color, size = 16, DEBUG, }) => {
    const getIcon = (name) => {
        if (DEBUG) {
            console.log('CustomIcon', name);
        }
        const sizeProps = {
            title: title,
            className: imageClass,
            width: size,
            height: size
        };
        const imageProps = Object.assign(Object.assign({}, sizeProps), { fill: color, stroke: color });
        switch (name) {
            case 'home':
                return (0, jsx_runtime_1.jsx)(icon_home_outline_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'dashboard':
                return (0, jsx_runtime_1.jsx)(icon_dashboard_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'audio':
            case 'sound':
            case 'sounds':
                return (0, jsx_runtime_1.jsx)(icon_sound_wave_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'video':
            case 'videos':
                return (0, jsx_runtime_1.jsx)(icon_video_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'movie':
            case 'movies':
                return (0, jsx_runtime_1.jsx)(icon_movie_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'gallery':
            case 'image':
            case 'images':
                return (0, jsx_runtime_1.jsx)(icon_gallery_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'google':
                return (0, jsx_runtime_1.jsx)(icon_google_svg_1.ReactComponent, Object.assign({}, imageProps, { stroke: 'transparent' }));
            case 'graph':
            case 'graphs':
                return (0, jsx_runtime_1.jsx)(icon_graphs_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'folder':
            case 'folders':
                return (0, jsx_runtime_1.jsx)(icon_folder_minus_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'folder-open':
                return (0, jsx_runtime_1.jsx)(icon_folder_minus_open_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'folder-plus':
                return (0, jsx_runtime_1.jsx)(icon_folder_plus_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'document':
            case 'documents':
                return (0, jsx_runtime_1.jsx)(icon_document_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'document-plus':
                return (0, jsx_runtime_1.jsx)(icon_document_plus_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'dialogue':
            case 'dialogues':
                return (0, jsx_runtime_1.jsx)(icon_dialogue_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'character':
            case 'characters':
                return (0, jsx_runtime_1.jsx)(icon_character_svg_1.ReactComponent, Object.assign({}, imageProps));
            case 'credit':
                return (0, jsx_runtime_1.jsx)(icon_credit_svg_1.ReactComponent, { stroke: color, fill: color, width: size });
            case 'control':
            case 'controls':
                return (0, jsx_runtime_1.jsx)(icon_controls_svg_1.ReactComponent, Object.assign({}, imageProps, { fill: color, stroke: color }));
            case 'location':
            case 'locations':
                return (0, jsx_runtime_1.jsx)(icon_location_svg_1.ReactComponent, Object.assign({}, imageProps, { fill: color, stroke: color }));
            case 'mountain':
                return (0, jsx_runtime_1.jsx)(icon_mountain_svg_1.ReactComponent, Object.assign({}, imageProps, { fill: color, stroke: color }));
            case 'sketch':
            case 'sketches':
                return (0, jsx_runtime_1.jsx)(icon_palette_3_svg_1.ReactComponent, Object.assign({}, imageProps, { fill: color, stroke: color }));
            case 'project':
            case 'projects':
                return (0, jsx_runtime_1.jsx)(icon_plus_svg_1.ReactComponent, Object.assign({}, imageProps, { fill: color, stroke: color }));
            case 'text':
            case 'texts':
            case 'chat':
            case 'chats':
                return (0, jsx_runtime_1.jsx)(icon_text_svg_1.ReactComponent, Object.assign({}, imageProps, { fill: color, stroke: color }));
            default: return ((0, jsx_runtime_1.jsx)(icon_dashboard_svg_1.ReactComponent, { fill: color, stroke: color, width: size }));
        }
    };
    return (0, jsx_runtime_1.jsx)("div", { title: title, children: getIcon(name) });
};
exports.CustomIcon = CustomIcon;
exports.default = exports.CustomIcon;
