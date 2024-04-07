import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

const DialogItem = (props)=>{
  return (
    <div>
      <NavLink to={"/dialogs/"+props.id} className={`${c.dialog} ${c.active}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props)=>{
  return (
    <div className={c.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {

  let messages=props.state.messages;
  let messagesElements = messages.map((m) => { return <Message message={m.message}/>})  

  let dialogs = props.state.dialogs;
  let dialogsElements = dialogs.map((d) =>{return  <DialogItem name={d.name} id={d.id}/>})
  return (
    <div className="drop-shadow-2xl shadow-lg rounded-xl p-9 min-h-screen border-solid border border-gray-500">
      <div className={c.dialogs}>
        <div className={c.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={c.messages}>
          {messagesElements}
        </div>
      </div>
      <textarea className="resize-y border rounded-md p-4 w-96 block mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        <button  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 mb-3">Send Message</button>
    </div>
  );
};

export default Dialogs;
