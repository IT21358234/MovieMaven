import React, {useState} from 'react'
//import ReactModal from 'react-modal'
import {BrowserRouter, Routes, Route} from "react-router-dom"

//import Signin from './body-components/Signin'
import Home from './body-components/Home'
import Dashboard from './body-components/Dashboard'
import Signin from './body-components/Signin'
import AllUsers from './body-components/AllUsers'
import AddMovie from './body-components/AddMovie'

function Warning(){
  return(
    <div>
      <h2>
        You Cannot Handle the System Without Logging in It
      </h2>
    </div>
  )
}

export default function Body({ onHandleLogin }) {
  const isLogedin = localStorage.getItem('isLogedin')

  const handleLogedin = (un) => {
    onHandleLogin(un)
  }

  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home onHandleLoginHome = {handleLogedin} />} />
        </Routes>
        {isLogedin === 'true' && 
          <Routes>
            <Route path='/dashboard' ele />
            <Route path='/all-users' element={<AllUsers/>} />
            <Route path='/add-movie' element={<AddMovie/>} />
          </Routes>
        }
        {isLogedin !== 'true' && 
          <Routes>
            <Route path='/:name' element={
              <div className='login-form' style={{marginTop:"3%"}}>
                <div><img src={process.env.PUBLIC_URL + '/logo-two-black.png'} alt='log-navbar' /></div>
                <div><Warning/></div>
                <div><Signin/></div>
              </div>
            } />
          </Routes>
        }
      </BrowserRouter>
      
    </div>
  )
}
