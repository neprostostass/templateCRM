const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const sendMessage = (state) => {

    let newMessage = {
        id: state.text.at(-1).id + 1,
        text: state.newMessageText,
    }

    state.text.push(newMessage);
    console.log(state.text)

    state.newMessageText = ''

}

const updateNewMessageText = (state, action) => {

    state.newMessageText = action.newMessageText;

}

const initialState = {
    people: [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Andy' },
        { id: 3, name: 'Max' },
    ],
    text: [
        { id: 1, text: 'Hi!' },
        { id: 2, text: 'Hello!' },
        { id: 3, text: 'Good morning!' }
    ],
    newMessageText: '',
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:

            sendMessage(state);
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:

            updateNewMessageText(state, action);
            return state;

        default:
            return state;
    }

}

export default messagesReducer;

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageTextActionCreator = (newMessageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText,
    }
}