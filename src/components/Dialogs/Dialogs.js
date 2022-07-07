import React from "react"
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
<div className={s.dialog + ' ' + s.active}>
Dimych
</div>
<div className={s.dialog}>
Andrew
</div>
<div className={s.dialog}>
Vitalik
</div>
<div className={s.dialog}>
Kata
</div>
<div className={s.dialog}>
Victor
</div>
<div className={s.dialog}>
Sveta
</div>
<div className={s.dialog}>
Bob
</div>
      
      
        </div>
    <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi Hi</div>
        <div className={s.message}>Yo</div>
    </div>
    </div>
)

}

export default Dialogs;