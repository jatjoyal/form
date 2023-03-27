import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'


const Validation2 = () => {
    var[submitted,setsubmitted]=useState(false)
    var[validatin,setvalidation]=useState({
      fname:''
    
        
    })
    var [value,setvalue]= useState({
        fname:''
    });
    const checkvalidation=()  =>{
        let error=validatin
        if(!value.fname.trim()){
            error.fname="enter the first name";
        }else{
            error.fname=""
        }
        setvalidation(error);
    }
    
useEffect(()=>{
        checkvalidation()
      })
const handleinput=(e)=>{
        const{name,value}=e.target
        setvalue({...value,[name]:value})
        console.log(value)
        
        
    
    }
 const handlesubmit=(e)=>{
            e.preventDefault();
            setsubmitted(true);
        }
    
    
  return (
    <div>
        <form
        onSubmit={handlesubmit}>
        

        
      <TextField label='First Name' name='fname'
        value={value.fname} onChange={handleinput}/>
        <br>
        </br>
        {(validatin.fname && submitted) && <p>{validatin.fname}</p>}
        <Button variant='contained' type='submit'>submit</Button>
        </form>
    </div>
  )
}

export default Validation2
