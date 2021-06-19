const HASHTAG_REGEX =
  // eslint-disable-next-line
  /\B#([a-z0-9]{2,})(?![~!@#$%^&*()=+_`\-\|/'\[\]\{\}]|[?.,]*\w)/gi

const URL_REGEX =
  // eslint-disable-next-line
  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/g
const MENTION_REGEX = /\B@\w+/g

const EMAIL_REGEX =
  // eslint-disable-next-line
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
export { HASHTAG_REGEX, URL_REGEX, MENTION_REGEX, EMAIL_REGEX }
