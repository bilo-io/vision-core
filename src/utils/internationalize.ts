const internationalize = (sentence: string) => {
    const words = sentence.split(' ')
    const internationalizedWords = words.map((word: string) => word.length > 2
    ? word[0] + (word.length - 2) + word[word.length -1]
    : word)
    return internationalizedWords.join(' ')
}