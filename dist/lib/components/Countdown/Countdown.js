"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CountDown = ({ date }) => {
    const [timeRemaining, setTimeRemaining] = (0, react_1.useState)(null);
    const getPaddedZero = (value) => {
        return value < 10 ? `0${value.toString()}` : value.toString();
    };
    (0, react_1.useEffect)(() => {
        if (date) {
            const endDate = new Date(date).getTime();
            const calculateTimeRemaining = () => {
                const now = new Date().getTime();
                const timeDifference = endDate - now;
                if (timeDifference > 0) {
                    const oneSecond = 1000;
                    const oneMinute = oneSecond * 60;
                    const oneHour = oneMinute * 60;
                    const oneDay = oneHour * 24;
                    const oneWeek = oneDay * 7;
                    const oneMonth = oneDay * 30; // Approximate, not accounting for varying month lengths
                    const oneYear = oneDay * 365; // Approximate, not accounting for leap years
                    const years = Math.floor(timeDifference / oneYear);
                    const months = Math.floor((timeDifference % oneYear) / oneMonth);
                    const weeks = Math.floor((timeDifference % oneMonth) / oneWeek);
                    const days = Math.floor((timeDifference % oneWeek) / oneDay);
                    const hours = Math.floor((timeDifference % oneDay) / oneHour);
                    const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
                    const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);
                    setTimeRemaining({ years, months, weeks, days, hours, minutes, seconds });
                }
                else {
                    // The date has passed
                    setTimeRemaining(null);
                }
            };
            // Initial calculation
            calculateTimeRemaining();
            // Update every second
            const intervalId = setInterval(calculateTimeRemaining, 1000);
            // Clear interval on component unmount
            return () => clearInterval(intervalId);
        }
        else {
            setTimeRemaining(null);
        }
    }, [date]);
    if (!date) {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", { className: "bg-orange-600 px-2 rounded-2xl text-white", children: "TBC" }) }));
    }
    if (!timeRemaining) {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", { className: "bg-red-600 px-2 rounded-2xl text-white", children: "Passed" }) }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row", children: [timeRemaining.years > 0 && (0, jsx_runtime_1.jsxs)("div", { className: "mr-2 text-xl", children: [timeRemaining.years, "Y"] }), timeRemaining.months > 0 && (0, jsx_runtime_1.jsxs)("div", { className: "mr-2 text-xl", children: [timeRemaining.months, "M"] }), timeRemaining.weeks > 0 && (0, jsx_runtime_1.jsxs)("div", { className: "mr-2 text-xl", children: [timeRemaining.weeks, "W"] }), timeRemaining.days > 0 && (0, jsx_runtime_1.jsxs)("div", { className: "mr-2 text-xl", children: [timeRemaining.days, "D"] }), (0, jsx_runtime_1.jsxs)("div", { className: "mr-2 text-xl", children: [getPaddedZero(timeRemaining.hours), ":", getPaddedZero(timeRemaining.minutes), ":", getPaddedZero(timeRemaining.seconds)] })] }) }));
};
exports.CountDown = CountDown;
exports.default = exports.CountDown;
