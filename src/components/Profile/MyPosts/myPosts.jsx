import React, { createRef, useState } from 'react'
import s from '../MyPosts/myPosts.module.css'
import Post from './Post/post';
import { v4 as uuidv4 } from 'uuid';

export default function MyPosts({ posts, newPostText, updateNewPostText, addPost }) {

    const [flag, setFlag] = useState(true)

    const showPost = (posts) => {
        return (
            posts.map((post) =>
                <Post key={uuidv4()} message={post.message} likes={post.likes} />
            )
        )
    }

    const newPostElement = createRef();

    const addPostHandler = () => {
        addPost();
        setFlag(true);
    }

    const postChangeHandler = () => {
        let text = newPostElement.current.value;
        if (text.trim() === '') {
            setFlag(true)
        } else {
            setFlag(false)
        }
        updateNewPostText(text);
    }

    return (
        <div className={s.MyPosts}>
            <h3 className={s.title}>MyPosts</h3>
            <div className={s.InputBlock}>
                <textarea className={s.MyTextArea}
                    cols="30"
                    rows="3"
                    ref={newPostElement}
                    value={newPostText}
                    onChange={postChangeHandler}
                    placeholder='Enter your post...'
                />
                <br />
                <button className={s.MyButton} onClick={addPostHandler} disabled={flag} >Add Post</button>
            </div>
            {showPost(posts)}
        </div>
    );
}