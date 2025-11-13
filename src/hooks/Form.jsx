import React from 'react'
import { useState } from "react";

const Form = () => {

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('');

    const hamdleSubmit = (event)=>{
      event.preventDefault();
      
      if(!name || !password){
        setError("fill all the data ");
        return;
      }

      alert("form was successfully submitted");
      setError('');
      setName('');
      setPassword('');
    }
    

  return (
    <>
      <form onSubmit={hamdleSubmit}>
        {error && <h6 style={{ color: "red" }}>{error}</h6>}
        <label htmlFor="">UserName: </label>
        <input type='text' value={name} onChange={event => setName(event.target.value)}/>
        <br/>
        <label htmlFor="">Password :</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default Form
