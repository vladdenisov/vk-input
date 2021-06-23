import { EMAIL_REGEX, HASHTAG_REGEX, MENTION_REGEX, URL_REGEX } from './Regexp'

const highlight = (str: string): string => {
  const words = str.split(/(\s+)/)
  return words
    .map((word, index) => {
      if (HASHTAG_REGEX.test(word)) {
        return `<span class='hashtag'>${word}</span>`
      }
      if (EMAIL_REGEX.test(word)) {
        return `<a href='#' class='email'>${word}</a>`
      }
      if (URL_REGEX.test(word)) {
        return `<a href='#' class='link'>${word}</a>`
      }
      if (MENTION_REGEX.test(word)) {
        return `<span class='mention' >${word}</span>`
      }
      if (/\n/g.test(word)) {
        return `<br>`
      }
      return `${word}`
    })
    .join('')
}
export { highlight }
