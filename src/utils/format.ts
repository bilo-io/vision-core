export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatDuration = (currentTime: number, totalDuration: number) => {

    const format = (value: number): string => {
        const paddedValue = value < 10 ? `0${value}` : `${value}`;
        return paddedValue;
    };

    const formatSeconds = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${format(minutes)}:${format(remainingSeconds)}`;
    };

    return `${formatSeconds(currentTime)} / ${formatSeconds(totalDuration)}`;
}

