import React from "react"
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
  return  <div className={s.message}>{props.message}</div>

}


const Dialogs = (props) => {
return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
<DialogItem name="Dimych" id="1"/>
<DialogItem name="Vit" id="2"/>
<DialogItem name="Kata" id="3"/>
<DialogItem name="Sveta" id="4"/>
<DialogItem name="Bob" id="5"/>
<DialogItem name="Misha" id="6"/>

      
        </div>
    <div className={s.messages}>
   <Message message="Hi"/>
   <Message message="Hi Hi Hi"/>
   <Message message="Yo"/>
   <Message message="Yo"/>
   <Message message="Yo"/>
    </div>
    </div>
)

}

export default Dialogs;