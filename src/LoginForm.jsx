import { useState } from "react"

import React from 'react'

const LoginForm = () => {
    const [isLogin,setIsLogin] = useState("true");
    

    const[inputValue,setInputValue]=useState('')
    const insertClick =(value)=>{
        setInputValue(value)
    }
    const[isPassword,setIsPassword]=useState("")
    const passClick=(value)=>{
        setIsPassword(value);
    }
    const[isMail,setIsMail]= useState("")
    const mailClick =(value)=>{
    setIsMail(value);
    }

    const[storeData,setStoreData] =useState([]);
    const task ={
      name:inputValue,
      email:isMail,
      password:isPassword
    }
    const handleformSubmit=(event)=>{
      event.preventDefault();

    if(!inputValue || !isPassword || !isMail) {
      alert("All fields are mandatory")
      return;
    }
    localStorage.setItem("form",JSON.stringify(task));
   
    if(storeData.includes(inputValue,isPassword,isMail)) return;
    setStoreData((prev) =>[...prev,inputValue,isPassword,isMail]);
    alert("Sign-up successful")
    setInputValue("")
    setIsPassword("")
    setIsMail("")
    }
    
   
  return (
    <>
    <div className='header-part'>
    <div className='small-part'>
    <div className='but-part'>
        <button className={isLogin ? "active" :""}  onClick={()=>setIsLogin(true)} >Login</button>
        <button className={!isLogin ? "active":""} onClick={()=>setIsLogin(false)}>Signup</button>
    </div>
    {isLogin ? 
    <>
    <form>
    <div className = "form">
        <h3>Login form</h3>
        <input 
        type ="Username/Email" value={inputValue} onChange={(event)=>insertClick(event.target.value)} autoComplete="off" placeholder="Enter your username"
        />
        <input type = "Password"  value ={isPassword}  autoComplete="off" onChange={(event)=> event.target.value}  placeholder="Type your password" />


        <button>Login</button>
        </div>
        </form>
    </> : 
    <>
    <form onSubmit={handleformSubmit}>
    <div className ="form">
    <h3>Signup form</h3>
    <input type = "Name"  value={inputValue} autoComplete="off" onChange={(event)=>insertClick(event.target.value)} placeholder="Enter your name"/>

      
     <input type ="Email" value={isMail} autoComplete="off" onChange={(event)=>mailClick(event.target.value)} placeholder="Enter ur email"/>

    <input type = "password"  value={isPassword} autoComplete="off" onChange={(event)=>passClick(event.target.value)} placeholder="Enter a password"/> 


    <button className="sgn-btn"  >Sign-up</button>
    </div>
    </form>
    </>
    }
    </div>
    </div>
    </>
  )
}

export default LoginForm