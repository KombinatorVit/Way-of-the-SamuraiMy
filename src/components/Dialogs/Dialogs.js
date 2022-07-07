import React from "react"
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>

}


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Vit' },
        { id: 3, name: 'Kata' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Bob' },
        { id: 6, name: 'Misha' }]

        let messagesData = [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hi Hi Hi" },
            { id: 3, message: "Yo" },
            { id: 4, message: "Yo" },
            { id: 5, message: "Yo" }]
   
        return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />                


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            
            </div>
        </div>
    )

}

export default Dialogs;