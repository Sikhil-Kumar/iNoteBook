// import React, {useState} from 'react'




// const Login = () => {
// const[credentials, setCredentials]= useState({email:" " , password:" "})
 


// const handleSubmit = async(e)=>{
//   e.preventDefault();

//   const response = await fetch("http://localhost:8000/api/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
      
//     },
//    body: json.stringify({email: credentials.email, password:credentials.password})
//   });
// const json = await response.json()
// console.log(json)


// }


// const onChange = (e) => {
//   setCredentials({ ...credentials, [e.target.name]: e.target.value })
// }



//   return (
//     <>
//     <div>
//        <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="email" className="form-label">Email address</label>
//     <input type="email" className="form-control" value={credentials.email} onChange={onChange}  id="email" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control"  value={credentials.password} onChange={onChange} id="password"/>
//   </div>
 
//   <button type="submit" className="btn btn-primary" >Submit</button>
// </form>
//     </div>
//     </>
//   )
// }

// export default Login










import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Changed from json.stringify to JSON.stringify
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    
    const json = await response.json();
    console.log(json);
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              value={credentials.email} 
              onChange={onChange}  
              id="email" 
              name="email" // Added name attribute
              aria-describedby="emailHelp"
              autoComplete="email" // Added autoComplete attribute
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control"  
              value={credentials.password} 
              onChange={onChange} 
              id="password" 
              name="password" // Added name attribute
              autoComplete="current-password" // Added autoComplete attribute
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;






