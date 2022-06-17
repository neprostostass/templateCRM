import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import { connect } from 'react-redux'
import Messages from './messages';

let mapStateToProps = (state) => {
    return {
        people: state.messagesPage.people,
        text: state.messagesPage.text,
        newMessageText: state.messagesPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            console.log(text);
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;