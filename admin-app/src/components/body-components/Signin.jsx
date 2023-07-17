import React, {useState} from 'react'
import ReactModal from 'react-modal'
import axios from 'axios'
import LoadingSpinner from '../loading-animations/LoadingSpinner'
import PopUpToast from '../toast-msg/PopUpToast'
import BottomToast from '../toast-msg/BottomToast'

ReactModal.setAppElement('#root');

export default function Signin() {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isValidationErr, setIsValidationErr] = useState(false)
    const [isLogedin, setIsLogedin] = useState()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [tempUser, setTempUser] = useState([])
    //const [tempPassword, setTempPassword] = useState('')
    const [toastMsg, setToastMsg] = useState('')
    
    const handleLoginPopUp = () => {
        setIsOpen(!isOpen)
    }

    const handleSubmitClick = (e) =>{
        e.preventDefault()
        if(username === "" || password === ""){
            setIsValidationErr(true)
            setTimeout(() => {
                setIsValidationErr(false)
            }, 4000)
        }
        else{
            handleLoginPopUp()
            setIsLoading(true)
            axios.get(`http://localhost:5000/adminApp/admins/find?q=${username}`).then((res) => {  
                const userDetails = res.data.results
                setTempUser(res.data.results)

                if(userDetails[0].password === password){
                    localStorage.setItem('username', username)
                    setTimeout(() => {    
                        setIsLoading(false)
                        setIsLogedin(true)
                    }, 4000)
                    setTimeout(() => {
                        localStorage.setItem('isLogedin', 'true')
                        localStorage.setItem('role', userDetails[0].role)
                        localStorage.setItem('avatar', userDetails[0].avatar)
                        window.location.reload();
                    }, 8000)
                }
                else if(userDetails[0].password !== password){
                    setTimeout(() => {
                        setIsLoading(false)
                        setIsLogedin(false)
                        setUsername('')
                        setPassword('')
                    }, 4000)
                }

            }).catch((err) => {
                setToastMsg('An Error Occurred During Validation')
            })
        }
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleInputFocus = (e) => {
        e.target.parentNode.classList.add('active')
    }

    const handleInputBlur = (e) => {
        if (e.target.value === '') {
        e.target.parentNode.classList.remove('active')
        }
    }

    return (
        <div>
            <button className='main-btn' style={{width:"250px"}} onClick={handleLoginPopUp}>Login to System</button>
            <ReactModal isOpen={isOpen} onRequestClose={handleLoginPopUp} className='zoom-in popup-login'>
                <div className="login-form">
                    <h2 style={{color:"white"}}>Login</h2>
                    <form>
                        <div className="input-container" style={{marginTop:"10px"}}>
                        <input
                            className='main-input'
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
                            className='main-input'
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
            {isLogedin === true && <BottomToast msg = {`Welcome back, ${username} 👋`}/>}
            {isLogedin === false && <BottomToast msg = {`Username or Password is Invalid! `}/>}
        </div>
    )
}
