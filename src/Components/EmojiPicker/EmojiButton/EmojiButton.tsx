import React from 'react';
import './EmojiButton.scss'
function EmojiButton (props: {
    emoji: string
    onClick: () => void
}) {
    return (
        <button className="picker-button" aria-label={props.emoji} onClick={props.onClick}>
            <span>{props.emoji}</span>
        </button>
    );
}

export default EmojiButton;
