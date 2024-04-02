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

  let messages = props.messages;

  let messagesElements = messages.map((m) => { return <Message message={m.message}/>})

  let dialogs = [
    {id:1, name:'Dimych'},
    {id:2, name:'Andrey'}
  ]

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
    </div>
  );
};

export default Dialogs;
