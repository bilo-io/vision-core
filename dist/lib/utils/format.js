"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDuration = exports.numberWithCommas = void 0;
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
exports.numberWithCommas = numberWithCommas;
const formatDuration = (currentTime, totalDuration) => {
    const format = (value) => {
        const paddedValue = value < 10 ? `0${value}` : `${value}`;
        return paddedValue;
    };
    const formatSeconds = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${format(minutes)}:${format(remainingSeconds)}`;
    };
    return `${formatSeconds(currentTime)} / ${formatSeconds(totalDuration)}`;
};
exports.formatDuration = formatDuration;
