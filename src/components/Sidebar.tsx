import React from 'react'
import { Link } from 'react-router-dom';

const SidebarData = [
    {
        title:'Agenda',
        path:'/Agenda',
        cName:"link-name",
        icon:'bx bxs-calendar bx-tada'
    },
    {
        title:'Sport',
        path:'/Sport',
        cName:"link-name",
        icon:'bx bxs-basketball bx-tada '
    },
    {
        title:'Menu',
        path:'/Menu',
        cName:"link-name",
        icon:'bx bxs-bowl-hot bx-tada'
    },
    {
        title:'Frigo',
        path:'/Frigo',
        cName:"link-name",
        icon:'bx bxs-fridge bx-tada'
    },
    
]

export default function Sidebar() {



  return (
    <div>
        <nav>
            <Link to="/" className='box'>
            <div className="logo-name">
            <div className="logo-image">
            <i className='bx bxs-moon bx-tada bx-flip-horizontal bx-lg'></i>
            </div>
            <span className="logo_name">Moky</span>
            </div>
            </Link> 
            
  
        <div className="menu-items">
            <ul className="nav-links">
                {SidebarData.map((item, index)=>{
                    return(
                        <li key={index}>
                            <Link to={item.path}>
                            <i className={item.icon}></i>
                            <span className={item.cName}>{item.title}</span>
                            </Link>
                        </li>
                    )   
                })}
            </ul>

            <ul className="logout-mode" onClick={{name:"",email:""}}>
                <li >
                    <Link to={''}>
                            <i className='bx bxs-log-in-circle'></i>
                            <span className={'link-name'}>Déconnexion</span>
                    </Link>
                </li>
            </ul>

        </div>
        </nav>
        <script src="optsidebar"></script>
      </div>
  )
}

