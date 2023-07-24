"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSentenceCase = exports.toTitleCase = exports.toKebabCase = exports.toSnakeCase = void 0;
const toSnakeCase = (str) => str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s_]+/g, '_')
    .replace(/-/g, '_')
    .toLowerCase();
exports.toSnakeCase = toSnakeCase;
const toKebabCase = (str) => str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
exports.toKebabCase = toKebabCase;
const toTitleCase = (str) => {
    const useRegex = false;
    return useRegex
        ? str.replace(/\w\S*/g, function (text) {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        })
        : str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
};
exports.toTitleCase = toTitleCase;
const toSentenceCase = (str) => {
    var _a, _b;
    if (!str)
        return str;
    const preCase = (0, exports.toTitleCase)((0, exports.toKebabCase)(str.trim()));
    return (((_a = preCase === null || preCase === void 0 ? void 0 : preCase[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) +
        ((_b = preCase === null || preCase === void 0 ? void 0 : preCase.slice(1)) === null || _b === void 0 ? void 0 : _b.toLowerCase().replace(/_/g, ' ').replace(/-/g, ' ')));
};
exports.toSentenceCase = toSentenceCase;
exports.default = {
    toKebabCase: exports.toKebabCase,
    toSnakeCase: exports.toSnakeCase,
    toSentenceCase: exports.toSentenceCase,
    toTitleCase: exports.toTitleCase,
};
