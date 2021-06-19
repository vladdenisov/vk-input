// eslint-disable-next-line
const HASHTAG_REGEXP = /\B#([a-z0-9]{2,})(?![~!@#$%^&*()=+_`\-\|/'\[\]\{\}]|[?.,]*\w)/ig
// eslint-disable-next-line
const URL_REGEXP = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/g
export {HASHTAG_REGEXP, URL_REGEXP}