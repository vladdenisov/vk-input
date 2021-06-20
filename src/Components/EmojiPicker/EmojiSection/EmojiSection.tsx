import React from 'react'
import EmojiButton from '../EmojiButton/EmojiButton'
import './EmojiSection.scss'
function EmojiSection(props: {
  section: {
    title: string
    items: string[]
  }
  section_id: number
  onSelect: (emoji: string) => void
}) {
  const { title, items } = props.section
  return (
    <div className={'picker-section'}>
      <header className={'picker-section--header'}>
        <span className={'picker-section--header---text'}>{title}</span>
      </header>
      <ul className={'picker-section--list'}>
        {
          // Render emojis
          items.map((item, index) => (
            <li key={index} className={'picker-section--list---item'}>
              <EmojiButton
                index={index}
                section_id={props.section_id}
                onClick={() => {
                  props.onSelect(item)
                }}
                emoji={item}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default EmojiSection
