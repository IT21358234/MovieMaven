import React, {useState} from 'react'
import ReactModal from 'react-modal'
import axios from 'axios'

export default function Signup() {
    const handleLoginPopUp = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
         <button className='main-btn' style={{width:"250px"}} onClick={handleLoginPopUp}>Add New User to System</button>
            <ReactModal isOpen={isOpen} onRequestClose={handleLoginPopUp} className='zoom-in popup-login'>
                <div className="login-form">
                    <h2 style={{color:"white"}}>Login</h2>
                    <form>
                        <div className="input-container" style={{marginTop:"10px"}}>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleUsernameChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            
                            required
                        />
                        <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        </div>
                        <div className='container' style={{height:"80px"}}>
                            <button className='main-btn' type="submit" onClick={handleSubmitClick}>Submit</button>
                        </div>
                        
                    </form>
                    {isValidationErr && <PopUpToast msg = 'Please Fill All Required Fields'/>}
                </div>
            </ReactModal>
            <ReactModal isOpen={isLoading} className='zoom-in popup-loading' style={{content:{width:"12%"}}}>
                <LoadingSpinner loadingMsg = 'Logging in...'/>
            </ReactModal>
    </div>
  )
}
