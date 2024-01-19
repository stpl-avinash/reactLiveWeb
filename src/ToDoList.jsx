import React from "react";
import ClearIcon from '@material-ui/icons/Clear';

const ToDoList = (data)=>{
    return (<li><ClearIcon  onClick={()=>{ data.onSelect(data.id)}} /> {data.value}</li>)
}

export default ToDoList;