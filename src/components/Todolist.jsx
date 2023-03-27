import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';


const Todolist = () => {
 var[input,setinput]=useState();
 var[input1,setinput1]=useState();
 const readValues =(e)=>{
    setinput(e.target.value)
    console.log("onchange",input)
 }
   
    
 const readValuess =(ev)=>{
    setinput1(ev.target.value)
    console.log("onchange",input1)
 } 
 return (
    <div>
        <br>
        </br>
      <TextField label='item' value={input} onChange={readValues}/>
      <Typography>{input}</Typography>
      <br>
      </br>
      <br>
      </br>
      <TextField label='username' values={input1} onChange={readValuess}/>
      <Typography>{input1}</Typography>
    </div>
  )
}

export default Todolist
