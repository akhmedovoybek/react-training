import renderEntireTree from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likescount: 23 },
      { id: 2, message: "It's my first post!", likescount: 12 },
    ],
    newPostText: ""
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

export let addPost = ()=>{
  let newPost = {
    id: state.profilePage.posts.length,
    message: state.profilePage.newPostText,
    likescount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText)=>{
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}
export default state;
