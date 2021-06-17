import React from 'react';
import './EmojiButton.scss'
function EmojiButton (props: {
    emoji: string
    onClick: () => void
}) {
    return (
        <div className="picker-button" onClick={props.onClick}>
            <span>{props.emoji}</span>
        </div>
    );
}

export default EmojiButton;
