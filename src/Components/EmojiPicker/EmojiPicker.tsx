import React, {useState} from 'react';
import './EmojiPicker.scss';
import sections from "./sections.json"
import EmojiSection from "./EmojiSection/EmojiSection";
function Form (props: {
    onSelect: (emoji: string) => void
}) {
    return (
        <div className="picker">
            {sections.map((section:{
                title: string,
                items: string[]
            }, index) => (
                <EmojiSection section={section} key={index} onSelect={props.onSelect}/>
                )
            )
            }
        </div>
    );
}

export default Form;
