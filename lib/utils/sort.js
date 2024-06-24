"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortBy = void 0;
function sortBy(key, order = 'asc') {
    return (a, b) => {
        if (a[key] < b[key]) {
            return order === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    };
}
exports.sortBy = sortBy;
