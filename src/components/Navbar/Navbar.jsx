import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';
const Navbar = ()=>{
    return (
      <nav className={'drop-shadow-2xl shadow-lg rounded-xl h-screen border-solid border border-gray-500 p-4'}>
        <div className={c.item}>
          <NavLink to='/profile' className={"text-neutral-800 font-bold"}>Profile</NavLink>
        </div>
        <div className={`${c.item} ${c.active}`}>
          <NavLink to='/dialogs' className={"text-neutral-800 font-bold"}>Messages</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to='/news' className={"text-neutral-800 font-bold"}>News</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to='/music' className={"text-neutral-800 font-bold"}>Music</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to='/settings' className={"text-neutral-800 font-bold"}>Settings</NavLink>
        </div>
      </nav>
    );
}

export default Navbar;