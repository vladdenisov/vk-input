import React from 'react'
import './EmojiButton.scss'
function EmojiButton(props: { emoji: string; onClick: () => void }) {
  return (
    <button
      className="picker-button"
      // For better accessibility
      aria-label={props.emoji}
      // Handle emoji click
      onClick={props.onClick}
    >
      <span className={'picker-button--emoji'}>{props.emoji}</span>
    </button>
  )
}

export default EmojiButton
