export const toSnakeCase = (str: string) =>
    str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s_]+/g, '_')
        .replace(/-/g, '_')
        .toLowerCase();

export const toKebabCase = (str: string) =>
    str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();

export const toTitleCase = (str: string) => {
    const useRegex = false;
    return useRegex
        ? str.replace(/\w\S*/g, function (text: string) {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        })
        : str
            .split(' ')
            .map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
};

export const toSentenceCase = (str: string) => {
    if (!str) return str;
    const preCase = toTitleCase(toKebabCase(str.trim()));
    return (
        preCase?.[0]?.toUpperCase() +
        preCase?.slice(1)?.toLowerCase().replace(/_/g, ' ').replace(/-/g, ' ')
    );
};

export default {
    toKebabCase,
    toSnakeCase,
    toSentenceCase,
    toTitleCase,
};
