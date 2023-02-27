// @ts-ignore
import React, { useState } from 'react';

function LoginForm({Login,error}) {
    const [details, setDetails] = useState({email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='login-box'>
            <h2>Login</h2>
            {(error != "") ? (<div className='error'>{error}</div>) : ""}
            <div className='user-box'>
                <input type="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                <label htmlFor='email'>Email</label>
            </div>
            <div className='user-box'>
                <input type="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                <label htmlFor='password'>Password</label>
            </div>
            <input type="submit" value="LOGIN"/>
        </div>
    </form>
  )
}

export default LoginForm;
