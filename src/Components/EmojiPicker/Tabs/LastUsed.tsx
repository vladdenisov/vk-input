import React from 'react';
import EmojiSection from "../EmojiSection/EmojiSection";
function GeneralTab (props: {
    onSelect: (emoji: string) => void
}) {
    const last_used_string = localStorage.getItem('last_used_emoji')
    const last_used: string[] = JSON.parse(
         last_used_string ?
            last_used_string :
            '[]'
    )
    return (
        <>
            {/*Render last used section*/}
            <EmojiSection section={{
                title: 'Недавно использованные эмодзи',
                items: last_used
            }} onSelect={props.onSelect} />
        </>
    );
}

export default GeneralTab;
