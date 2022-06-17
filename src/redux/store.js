import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'AAA', likes: 34 },
                { id: 2, message: 'BBB', likes: 111 },
                { id: 3, message: 'CCC', likes: 12 },
            ],
            newPostText: '',
        },
        messagesPage: {
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
        },
        sidebarPage: {},
    },

    getState() {
        return this._state;
    },

    _callSubscriber() { },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber();

    }

}

export default store;

window.store = store;