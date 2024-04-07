import MyPosts from '../MyPosts/MyPosts';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props)=>{
    return (
      <div className={'drop-shadow-2xl shadow-lg rounded-xl p-9 min-h-screen border-solid border border-gray-500'}>
        
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>  
      </div>
    );
}

export default Profile;