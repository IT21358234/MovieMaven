import React, {useState} from 'react'
import './components.css'

export default function SideBar() {
  const [isSubMovie, setIsSubMovie] = useState(false)
  const [isSubUser, setIsSubUser] = useState(false)

  const movieClick = () => {
    if(isSubUser){
      setIsSubUser(false)
    }
    setIsSubMovie(!isSubMovie)
  }

  const userClick = () => {
    if(isSubMovie){
      setIsSubMovie(false)
    }
    setIsSubUser(!isSubUser)
  }

  return (
    <div>
      <div className='sidebar-btn' style={{marginTop:"10px"}}>
        <a href='/dashboard'><button className='sidebar-btn'><i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp;&nbsp;DashBoard</button></a>
      </div>
      <div className='sidebar-btn'>
        <button className='sidebar-btn'><i class="fa-solid fa-table-cells-large"></i>&nbsp;&nbsp;&nbsp;Categories</button>
      </div>
      <div className={`sidebar-btn ${isSubMovie ? 'hover-css' : ''}`}>
        <button className='sidebar-btn' onClick={movieClick}><i class="fa-solid fa-film">
          </i>&nbsp;&nbsp;&nbsp;Movies&nbsp;&nbsp;&nbsp;
          {isSubMovie &&
            <span>
              <i class="fa-solid fa-caret-down" style={{float:"right", marginRight:"15px"}}></i>
            </span>
          }
          {isSubMovie == false &&
            <span>
              <i class="fa-solid fa-caret-right" style={{float:"right", marginRight:"15px"}}></i>
            </span>
          }
          
        </button>
        {isSubMovie &&
          <div className=''>
            <hr style={{marginTop:0}}/>
            <a href='/add-movie'><button className='sidebar-sub-btn'>Add Movie</button></a>
            <button className='sidebar-sub-btn'>All Movies</button>
          </div>
        }
      </div>
      
      <div className='sidebar-btn'>
        <button className='sidebar-btn'><i class="fa-solid fa-tags"></i>&nbsp;&nbsp;&nbsp;Tags</button>
      </div>
      <div className={`sidebar-btn ${isSubUser ? 'hover-css' : ''}`}>
      <button className='sidebar-btn' onClick={userClick}>
        <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Users&nbsp;&nbsp;&nbsp;
        {isSubUser &&
          <span>
            <i class="fa-solid fa-caret-down" style={{float:"right", marginRight:"15px"}}></i>
          </span>
        }
        {isSubUser == false &&
          <span>
            <i class="fa-solid fa-caret-right" style={{float:"right", marginRight:"15px"}}></i>
          </span>
        }
      </button>
        {isSubUser &&
          <div className=''>
            <hr style={{marginTop:0}}/>
            <button className='sidebar-sub-btn'>Add User</button>
            <a href='/all-users'><button className='sidebar-sub-btn'>All Users</button></a>
            <a href=''><button className='sidebar-sub-btn'>All Admins</button></a>
            <a href=''><button className='sidebar-sub-btn'>All Moderators</button></a>
            <a href=''><button className='sidebar-sub-btn'>All Blogers</button></a>
          </div>
        }
      </div>
      
    </div>
  )
}
