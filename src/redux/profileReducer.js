const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const addPost = (state) => {

    let newPost = {
        id: state.posts.at(-1).id + 1,
        message: state.newPostText,
        likes: Math.floor(Math.random() * (999 - 4) + 4)
    }

    state.posts.push(newPost);
    console.log(state.posts)

    state.newPostText = '';

}

const updateNewPostText = (state, action) => {

    state.newPostText = action.newPostText;

}
const initialState = {
    posts: [
        { id: 1, message: 'AAA', likes: 34 },
        { id: 2, message: 'BBB', likes: 111 },
        { id: 3, message: 'CCC', likes: 12 },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:

            addPost(state);
            return state;

        case UPDATE_NEW_POST_TEXT:

            updateNewPostText(state, action);
            return state;

        default:
            return state;
    }

}

export default profileReducer;

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText,
    }
}