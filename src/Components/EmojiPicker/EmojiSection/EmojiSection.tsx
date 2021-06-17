import React from 'react';
import EmojiButton from "../EmojiButton/EmojiButton";
import './EmojiSection.scss'
function EmojiSection (props: {
    section: {
        title: string,
        items: string[]
    }
    onSelect: (emoji: string) => void
}) {
    const {title, items} = props.section
    return (
        <div className="picker-section">
            <header>{title}</header>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>
                            <EmojiButton emoji={item} onClick={() => {
                                props.onSelect(item)
                            }}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default EmojiSection;
