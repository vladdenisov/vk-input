// eslint-disable-next-line
const HASHTAG_REGEX =
  /\B#([a-z0-9]{2,})(?![~!@#$%^&*()=+_`\-\|/'\[\]\{\}]|[?.,]*\w)/gi
// eslint-disable-next-line
const URL_REGEX =
  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/g
const MENTION_REGEX = /\B@\w+/g
// eslint-disable-next-line
const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
export { HASHTAG_REGEX, URL_REGEX, MENTION_REGEX, EMAIL_REGEX }
