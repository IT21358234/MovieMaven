import React, {useState} from 'react'
import './body-components.css'

import Signin from './Signin'
import BottomToast from '../toast-msg/BottomToast'
import ReactModal from 'react-modal'
import LoadingSpinner from '../loading-animations/LoadingSpinner'

export default function Home({ onHandleLoginHome }) {
  
  const [username, setUsername] = useState('')
  const isLogedin = localStorage.getItem('isLogedin')
  const [isLoadingLogout, setIsLoadingLogout] = useState(false)

  const handleLogedin = (un) => {
    
    setUsername(un)
    onHandleLoginHome(un)
  }
  
  const handleLogedout = () => {
    setIsLoadingLogout(true)
    setTimeout(() => {
      setIsLoadingLogout(false)
      localStorage.removeItem('username')
      localStorage.removeItem('role')
      localStorage.removeItem('avatar')
      localStorage.removeItem('isLogedin')
      window.location.reload();
    }, 4000)
    
  }

  return (
    <div>
      <div className='container'>
        <div className='body-inline' style={{width:"60%"}}>
            {/*<div className='logo-home'>Movie<br/> <i class="fa-solid fa-film"></i> Maven</div>*/}
            <div><img src={process.env.PUBLIC_URL + '/logo-two-black.png'} alt='log-navbar' /></div>
            <div>
                <a href='http://localhost:3001/' target="_blank"><button className='main-btn' style={{width:"250px"}}>Launch Client-Side App</button></a>
                <br/>
                <br/>
                {isLogedin === "true" && 
                  <div>
                    <button className='main-btn' style={{width:"250px"}} onClick={handleLogedout}>Logout from System</button>
                  </div>
                }
                {isLogedin !== "true" && 
                  <Signin />
                }
            </div>
        </div>
      </div>
      <ReactModal isOpen={isLoadingLogout} className='zoom-in popup-loading' style={{content:{width:"12%"}}}>
        <LoadingSpinner loadingMsg = 'Logging out...'/>
      </ReactModal>
    </div>
  )
}
