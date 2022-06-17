import React, { createRef, useState } from 'react'
import s from '../Messages/messages.module.css'
import People from './People/people';
import Text from './Text/text';
import { v4 as uuidv4 } from 'uuid';

export default function Messages({ sendMessage, updateNewMessageText, people, text, newMessageText }) {

    const [flag, setFlag] = useState(true)

    const showPeople = (people) => {
        return (
            people.map((p) =>
                <People key={uuidv4()} name={p.name} id={p.id} />
            )
        )
    }

    const showText = (text) => {
        return (
            text.map((t) =>
                <Text key={uuidv4()} text={t.text} />
            )
        )
    }

    const newMessageElement = createRef();

    const sendMessageHandler = () => {
        sendMessage();
        setFlag(true);
    }

    const updateNewMessageTextHandler = () => {
        let text = newMessageElement.current.value;
        if (text.trim() === '') {
            setFlag(true)
        } else {
            setFlag(false)
        }
        updateNewMessageText(text);
    }

    return (
        <>
            <div className={s.messages}>
                <div className={s.Peoples}>
                    {showPeople(people)}
                </div>
                <div className={s.Texts}>
                    <div>
                        {showText(text)}
                    </div>
                    <textarea className={s.MyTextArea}
                        cols="30"
                        rows="3"
                        ref={newMessageElement}
                        value={newMessageText}
                        onChange={updateNewMessageTextHandler}
                        placeholder='Enter your message...'
                    />
                    <br />
                    <button className={s.MyButton} onClick={sendMessageHandler} disabled={flag} >Send Message</button>
                </div>
            </div>
        </>
    )
}