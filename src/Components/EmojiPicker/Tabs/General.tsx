import React from 'react'
import sections from '../sections.json'
import EmojiSection from '../EmojiSection/EmojiSection'
function GeneralTab(props: { onSelect: (emoji: string) => void }) {
  return (
    <>
      {
        // Render emoji sections
        sections.map(
          (
            section: {
              title: string
              items: string[]
            },
            index
          ) => (
            <EmojiSection
              section={section}
              section_id={index}
              key={index}
              onSelect={props.onSelect}
            />
          )
        )
      }
    </>
  )
}

export default GeneralTab
