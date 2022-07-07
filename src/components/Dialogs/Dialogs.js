import React from "react"
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
<div className={s.dialog + ' ' + s.active}>
<NavLink to="/dialogs/1">Dimych</NavLink>
</div>
<div className={s.dialog}>
 <NavLink to="/dialogs/2">Andrew</NavLink>

</div>
<div className={s.dialog}>
<NavLink to="/dialogs/3">Vit</NavLink>

</div>
<div className={s.dialog}>
<NavLink to="/dialogs/4">Victor</NavLink>

</div>
<div className={s.dialog}>
<NavLink to="/dialogs/5">Kata</NavLink>

</div>
<div className={s.dialog}>
<NavLink to="/dialogs/6">Misha</NavLink>

</div>
<div className={s.dialog}>
<NavLink to="/dialogs/7">Bob</NavLink>

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