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
  debugger;
  return(
    <div className="app-wrapper w-full p-10">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content '>
        <Routes>
          <Route path="/profile" element={<Profile state = {props.state.profilePage} addPost={props.addPost}/>}/>
          <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />}/>
        </Routes>
      </div>
    </div>
  );
}




export default App;
