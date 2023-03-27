import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Single = () => {
  var[input,setinput] =useState({
     input1:'',
     fname:'',
     input2:''
  });
    const inputHandler =(e)=>{
        const{name,value}=e.target
        setinput({...input,[name]:value})
    }
   
  return (
    <div><br>
         </br>
        <TextField label='Name' name='input1'
        value={input.input1} onChange={inputHandler}/>
        <Typography>{input.input1}</Typography>
        <br>
        </br>
        <TextField label='rollno' name='fname'
        value={input.fname} onChange={inputHandler}/>
        <Typography>{input.fname}</Typography>
        <br>
        </br>
        <TextField label='phnno' name='input2'
        value={input.input2} onChange={inputHandler}/>
        <Typography>{input.input2}</Typography>
        
        
      
    </div>
  )
}

export default Single
