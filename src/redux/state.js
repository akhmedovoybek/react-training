import renderEntireTree from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likescount: 23 },
      { id: 2, message: "It's my first post!", likescount: 12 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
    ],
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
    ],
  },
};

export let addPost = (message)=>{
  let newPost = {
    id: state.profilePage.posts.length,
    message: message,
    likescount: 0
  }
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
}
export default state;
