import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux'
import MyPosts from './myPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            console.log(text);
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}


const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default myPostsContainer;