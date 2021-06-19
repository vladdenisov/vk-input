import {HASHTAG_REGEXP, URL_REGEXP} from "./Regexp";

const highlight = (str: string): string => {
    const words = str.split(/(\s+)/)
    return words.map((word, index) => {
        if (HASHTAG_REGEXP.test(word)) {
            return `<span class='hashtag' key='${index}'>${word}</span>`
        }
        if (URL_REGEXP.test(word)) {
            return `<a href='${word}' class='link' oninput="" key='${index}'>${word}</a>`
        }
        return `${word}`
    }).join('')
}
export {highlight}