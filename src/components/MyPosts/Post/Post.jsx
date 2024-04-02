import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
      {props.message}
      <h4>Likes: {props.likescount}</h4>
    </div>
  );
};

export default Post;
