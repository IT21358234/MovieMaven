import React, {useState} from 'react'
import './components.css'

export default function NavBar({ onToggleSidebar, un }) {

  const username = localStorage.getItem('username')
  const isLogedin = localStorage.getItem('isLogedin')
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className='navbar-inline'>     
        <div className='navbar-inline' style={{width:"30%"}}>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className='more-icon' onClick={onToggleSidebar}><i class="fa-solid fa-bars"></i></button>
            {showTooltip && (
              <div className="tooltip">
                {/*isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'*/}
                "Show / Hide Sidebar"
              </div>
            )}
          </div>
          <div><a href='/'><img src={process.env.PUBLIC_URL + '/logo-white.png'} alt='log-navbar' width="300" height="50"/></a></div>
          {/*<div className='logo-text'>Movie<br/> <i class="fa-solid fa-film"></i> Maven</div>*/}
        </div>
        <div className='navbar-inline' style={{width:"12%"}}>
          {isLogedin &&
            <div>
              <p className='user-nav'>{username}</p>
            </div>
          }
          {isLogedin != 'true' &&
            <div>
              <p className='user-nav'>Not Signin</p>
            </div>
          }
          
          {isLogedin &&
            <div>
              <img src={`${localStorage.getItem('avatar')}`} className='prof-pic-nav' alt='prof-pic-nav'/>
            </div>
          }
          {isLogedin != 'true' &&
            <div style={{color:'white',fontSize:"24px",width:"40px",height:"40px",textAlign:"center", border:"1px white solid",paddingTop:"5px"}}>
              <i class="fa-solid fa-user"></i>
            </div>
          }
        </div>
    </div>
  )
}
