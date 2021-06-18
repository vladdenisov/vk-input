import React, {useEffect, useRef} from 'react';
import './EmojiPicker.scss';
import sections from "./sections.json"
import EmojiSection from "./EmojiSection/EmojiSection";
import PickerFooter from "./Footer/Footer";
function Form (props: {
    onSelect: (emoji: string) => void
}) {
    const picker = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (picker.current) {
            picker.current.focus()
        }
    }, [])
    return (
        <div className={'picker'} ref={picker}>
            <div className={'picker-sectionList'}>
                {sections.map((section:{
                    title: string,
                    items: string[]
                }, index) => (
                    <EmojiSection section={section} key={index} onSelect={props.onSelect}/>
                    )
                )
                }
            </div>
            <PickerFooter />
        </div>
    );
}

export default Form;
