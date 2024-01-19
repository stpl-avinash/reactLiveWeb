import React , { useState } from "react";
import Button from '@material-ui/core/Button';
import ToDoList from "./ToDoList";

const ToDoListApp = (data)=>{

    const [getValue,setValue] = useState('');
    const [getArray,setArray] = useState([]);
  
    const inputOnChangeFun = (event)=>{
      setValue(event.target.value);
    }
  
    const addItemFun = ()=>{
      setArray((ele)=>{  return [getValue, ...ele] });
      setValue('');
    }
  
    const deleteItemFun = (id)=>{
      setArray((ele)=>{ return (ele.filter((res,index)=> id != index))});
    }

    return (
        <div>
        <h1>To Do List</h1>
        <br/>
        <input type="text" placeholder="Enter List Name" onChange={inputOnChangeFun} value={getValue} />
        <Button variant="contained" color="primary" className="m-2" onClick={addItemFun}> Add </Button>
        <br />
       <h3>List:</h3>
       <ol> { 
        getArray?.map((ele,index)=>{
         return ( <ToDoList  key={index} id={index} value={ele} onSelect={deleteItemFun} />)
        })
        }
       </ol>
       </div>
    )
}

export default ToDoListApp;