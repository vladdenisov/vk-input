import React, { useEffect, useRef } from 'react'
import './EmojiButton.scss'
function EmojiButton(props: {
  emoji: string
  onClick: () => void
  index: number
  section_id: number
}) {
  const button = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (props.index === 0 && props.section_id === 0) {
      if (button.current) {
        button.current.focus()
      }
    }
  }, [props.index, props.section_id])
  return (
    <button
      className="picker-button"
      // For better accessibility
      aria-label={props.emoji}
      // Handle emoji click
      onClick={props.onClick}
      ref={button}
    >
      <span className={'picker-button--emoji'}>{props.emoji}</span>
    </button>
  )
}

export default EmojiButton
