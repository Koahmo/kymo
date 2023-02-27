import { useState } from 'react';
import Sidebar from './components/Sidebar';
import LoginForm from './components/LoginForm';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './routes/Home';
import Agenda from './routes/Agenda'
import Sport from './routes/Sport'
import Menu from './routes/Menu'
import Frigo from './routes/Frigo'

export const adminUser= {
  name: "Kyllian",
  email: "kmosnat",
  password:"kmosnat"
}
export default function App(){

  const [user, setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");

  const Login = details => {
   
    if (details.email === adminUser.email && details.password === adminUser.password) {

      setUser({
        name: adminUser.name,
        email: details.email
      });

    } else {

      /*setError("Imbécilade! T'es qui ?")*/

    }
  }
  return (
  <div>

    {(user.email !=="") ? (

    <BrowserRouter>
    <Sidebar user={setUser}/>
    <section className="dashboard">
    <Routes>
      <Route path="" element={<Home name={user.name} />} />
      <Route path="Agenda" element={<Agenda />} />
      <Route path="Sport" element={<Sport/>} />
      <Route path="Menu" element={<Menu />} />
      <Route path="Frigo" element={<Frigo/>} />
    </Routes>
    </section>
    </BrowserRouter>

    ) : (

      <LoginForm Login={Login} error={error}/>

    )}

  </div>
  );
}

