import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>
      My posts
      <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
      
        New post
      </div>
      <div className={s.posts}>
       <Post message ='Hi, how are?' likesCount='2'/>
       <Post message='It"s my first post!' likesCount='33'/>
  

      </div>
    </div>
    )
}
export default MyPosts;