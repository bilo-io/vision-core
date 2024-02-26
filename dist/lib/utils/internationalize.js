"use strict";
const internationalize = (sentence) => {
    const words = sentence.split(' ');
    const internationalizedWords = words.map((word) => word.length > 2
        ? word[0] + (word.length - 2) + word[word.length - 1]
        : word);
    return internationalizedWords.join(' ');
};
