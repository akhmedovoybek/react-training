import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.posts;

  let postsElements = posts.map((p) => {
    return <Post message={p.message} likescount={p.likescount} />;
  });
  let newPostElement = React.createRef();
  let addPost = ()=>{
    alert(newPostElement.current.value)
  }
  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement} className="resize-none border rounded-md p-4 w-full h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        <button onClick={addPost} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 mb-3">
          Add Post
        </button>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
