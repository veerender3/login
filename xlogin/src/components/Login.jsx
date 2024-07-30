import { useState } from "react";

 function App() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isvisibleform, setIsvisible] = useState(true)
 
  const handleSubmit =(e)=>{
        e.preventDefault();
        if(Username === 'user' && Password === 'password'){
             setMessage('Welcome, user !')
              setIsvisible(false)
        }else{
          setMessage('Invalid username or password')
        }
  }
  
  return (
    <div>
       <h1>Login App</h1>
       {console.log('message:', message)}
       <p><span>{message}</span></p>
    {isvisibleform && (
       <form onSubmit={handleSubmit} >
        
        <div>
         <label>Username: </label>
           <input 
          type="text" 
          placeholder="username" 
          id="username" 
          value={Username} 
          onChange={(e)=>setUsername(e.target.value)}
          required/>
          </div>
          <div>
         <label>Password: </label>
         <input 
          type="password" 
          placeholder="password"  
          id="password" 
          value={Password} 
          onChange={(e)=>setPassword(e.target.value)} 
          required/>
        
         </div>
         <button type="submit">Submit</button>
      </form>
     )}
    </div>
  )
}
export default App