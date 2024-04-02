import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Routes} from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = (props)=>{
  let posts = [
    {id:1,message:'Hi, how are you?', likescount:23},
    {id:2, message:'It\'s my first post!', likescount:12}
  ]
  return(
    <div className="app-wrapper w-full p-10">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content '>
        <Routes>
          <Route path="/profile" element={<Profile posts = {props.posts}/>}/>
          <Route path="/dialogs/*" element={<Dialogs messages={props.messages}/>}/>
        </Routes>
      </div>
    </div>
  );
}




export default App;
