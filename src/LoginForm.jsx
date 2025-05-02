import React from 'react'
import{useState} from 'react'
import './App.css'

const LoginForm = () => {
  
  const [activeForm, setActiveForm] = useState("signup");
  const[user,setUser] =useState({
    username:"",
    age:"",
    mail:""

  })
  const[login,setLogin]=useState("")
  const[logpass,setLogPass]= useState("")
 

 const handleChange=(event)=>{
  const{name,value} =event.target;
   
  setUser((prev)=>({...prev, [name]:value}));

 }

 const handleSubmit=(event)=>{
  event.preventDefault();  
  if(activeForm==="signup") {console.log(user)}

  else{console.log( {
    usename:login,
    password:logpass
  }
  )}
 }
  return (
    <div className="auth-container">

      <h2 className={activeForm === "signup" ? "active" : ""} onClick={() => setActiveForm("signup")}>
        Sign Up
      </h2>
      <h2 className={activeForm === "login" ? "active" : ""} onClick={() => setActiveForm("login")}>
        Login
      </h2>

      {activeForm === "signup" && (

    <form onSubmit={handleSubmit}>
      <input type ="text"
      placeholder='Enter your Name'
      required
      value={user.username}
      name="username"
      onChange={handleChange}/>


<input type ="number"
      placeholder='Enter your age'
      required
      value={user.age}
      name="age"
      onChange={handleChange}/>

<input type ="text"
      placeholder='Enter your Email'
      required
      value={user.mail}
      name="mail"
      onChange={handleChange}/>

      <button name ="sgn-btn">Sign-Up</button>

    </form>

  )
}

{activeForm==="login"&&(
  <form onSubmit={handleSubmit}>
    <input type ="text"
    placeholder='Write ur username'
    required
    value={login}
    onChange={(event)=>setLogin(event.target.value)}/>

<input type ="text"
    placeholder='Write ur password'
    required
    value={logpass}
    onChange={(event)=>setLogPass(event.target.value)}/>

    <button> Login</button>

  </form>
)
}
</div>
  );};

export default LoginForm;
