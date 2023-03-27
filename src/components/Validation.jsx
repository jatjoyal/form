import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Validation = () => {
    var[values,setValues]=useState({
        fname:''
    })
    const handleinput=(e)=>{
        const {name,value}=e.target
        setValues({...values,[name]:value})
        console.log(value)
    }
  return (
    <div>
        <TextField label='First Name' name='fname'
        values={values.fname} onchange={handleinput}/>
      
    </div>
  )
}

export default Validation
