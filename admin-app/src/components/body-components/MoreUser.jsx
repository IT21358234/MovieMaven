import React, {useEffect, useState} from 'react'
import ReactModal from 'react-modal'
import axios from 'axios'
import ProfileWarningToast from '../toast-msg/ProfileWarningToast'

export default function MoreUser(props) {
    const username = localStorage.getItem('username')
    const [isOpen, setIsOpen] = useState(false)
    let [isHide, setIsHide] = useState(true)
    let [isWarning, setIsWarning] = useState(false)
    const [warningMsg, setWarningMsg] = useState('')
    const id = props.id
    const [userDetails, setUserDetails] = useState([])
    const [password, setPassword] = useState('')
    const [addedDate, setAddedDate] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middletName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userID, setUserID] = useState('')
    const [userName, setUserName] = useState('')
    const [role, setRole] = useState('')
    const hiddenPassword = '•'.repeat(password.length)
    const slicedAddedDate = addedDate.slice(0,10)

    let [isEdtName, setIsEdtName] = useState(false)
    let [isEdtUserName, setIsEdtUserName] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:5000/adminApp/admins/get/${id}`).then((res) =>{
            const data = res.data.results
            setUserDetails(data)
            setPassword(data.password)
            setAddedDate(data.added_date)
            setFirstName(data.first_name)
            setMiddleName(data.middle_name)
            setLastName(data.last_name)
            setUserID(data.user_id)
            setUserName(data.user_name)
            setRole(data.role)
        })
    })

    const handleMorePopup = () => {
        setIsOpen(true)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'first_name':
              setFirstName(value);
              break;
            case 'middle_name':
              setMiddleName(value);
              break;
            case 'last_name':
              setLastName(value);
              break;
            default:
              break;
        }
    }

    return (
        <div>
            <button onClick={handleMorePopup} className='btn btn-primary'>More</button>
            <ReactModal isOpen={isOpen} onRequestClose={handleMorePopup} className='zoom-in popup-more'>
            {userDetails ? (
                <div style={{color:"white"}}>
                    <div className='body-inline'>
                        <div>
                            <h2 style={{marginLeft:"20px"}}>{firstName}'s Profile</h2>
                        </div>
                        {isWarning === true && <ProfileWarningToast msg = {warningMsg}/>}
                        <div>
                            <button onClick={() => {setIsOpen(false)}} style={{marginRight:"20px", cursor:"pointer",backgroundColor:"transparent",border:"none", color:"white",fontSize:"20px"}}>
                                <i class="fa-solid fa-close"></i>
                            </button>
                        </div>
                    </div>
                    <hr style={{margin:"0 20px"}}/>
                    <div style={{margin:"20px"}}>
                        <div className='body-inline'>
                            <div style={{width:"30%", height:"65vh", margin:"0 20px 0 0"}}>
                                <div className='prof-pic-more'><img src={`${userDetails.avatar}`} className='prof-pic-more' alt='prof-pic-nav'/></div>
                                <div style={{fontWeight:"bold", marginTop:"26px"}}>Full Name: </div>
                                {isEdtName === false &&
                                    <div className='body-inline' style={{marginTop:"8px"}}>
                                        <span>{firstName}&nbsp;{userDetails.middle_name}&nbsp;{userDetails.last_name}</span>
                                        <span><i onClick={() => {setIsEdtName(true)}} class="fa-regular fa-pen-to-square" title='Edit'></i></span>
                                    </div>
                                }
                                {isEdtName &&
                                    <div className='body-inline'>
                                        <span>
                                            <input className='prof-edit-input' style={{width:"65px", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", borderTopRightRadius:"0px", borderBottomRightRadius:"0px"}} value={firstName} onChange={handleInputChange} placeholder='First Name' name='first_name' />
                                            <input className='prof-edit-input' style={{width:"65px", borderRadius:"0"}} value={middletName} onChange={handleInputChange} placeholder='First Name' name='first_name' />
                                            <input className='prof-edit-input' style={{width:"65px", borderTopLeftRadius:"0px", borderBottomLeftRadius:"0px", borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}} value={lastName} onChange={handleInputChange} placeholder='First Name' name='first_name' />
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-rectangle-xmark" title="Don't Save"></i>&nbsp;&nbsp;
                                            <i  onClick={() => {setIsEdtName(false)}} class="fa-regular fa-floppy-disk" title='Save'></i>
                                        </span>
                                    </div>
                                }
                                
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>User ID: </div>
                                <div className='body-inline' style={{marginTop:"8px"}}>
                                    <span>{userID}</span>
                                    <span><i class="fa-regular fa-pen-to-square" onClick={() => {setWarningMsg('User ID Cannot be Changed!'); setIsWarning(true); setTimeout(() => {setWarningMsg(''); setIsWarning(false)},4000)}}></i></span>
                                </div>
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>User Name: </div>
                                {userName === username &&
                                    
                                    <div>
                                    {isEdtUserName &&
                                        <div className='body-inline'>
                                            <span>
                                                <input className='prof-edit-input' value={userName} onChange={handleInputChange} placeholder='First Name' name='first_name' />
                                            </span>
                                            <span>
                                                <i onClick={() => {setIsEdtUserName(false)}} class="fa-regular fa-rectangle-xmark" title="Don't Save"></i>&nbsp;&nbsp;
                                                <i class="fa-regular fa-floppy-disk" title='Save'></i>
                                            </span>
                                        </div>
                                    }
                                    {isEdtUserName === false &&
                                        <div>
                                            <div className='body-inline' style={{marginTop:"8px"}}>
                                                <span>{userDetails.user_name}</span>
                                                <span><i onClick={() => {setIsEdtUserName(true)}} class="fa-regular fa-pen-to-square" title='Edit'></i></span>
                                            </div>
                                        </div> 
                                    }
                                    </div>
                                }
                                {userName !== username &&
                                    <div className='body-inline' style={{marginTop:"8px"}}>
                                        <span>{userDetails.user_name}</span>
                                        <span><i onClick={() => {setWarningMsg('You Cannot Change Others Usernames'); setIsWarning(true); setTimeout(() => {setWarningMsg(''); setIsWarning(false)},4000)}} class="fa-regular fa-pen-to-square" title='Edit'></i></span>
                                    </div>    
                                }
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>Role: </div>
                                <div className='body-inline' style={{marginTop:"8px"}}>
                                    <span>{userDetails.role}</span>
                                    <span><i class="fa-regular fa-pen-to-square"></i></span>
                                </div>
                                
                            </div>
                            <div style={{width:"30%",height:"65vh", margin:"0 20px"}}>
                                <div style={{fontWeight:"bold"}}>Email: </div>
                                <div className='body-inline'>
                                    <span>{userDetails.email}</span>
                                    <span><i class="fa-regular fa-pen-to-square"></i></span>
                                </div>
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>Contact Number: </div>
                                <div className='body-inline'>
                                    <span>{userDetails.phone}</span>
                                    <span><i class="fa-regular fa-pen-to-square"></i></span>
                                </div>
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>Address: </div>
                                <div className='body-inline'>
                                    <span>{userDetails.address}</span>
                                    <span><i class="fa-regular fa-pen-to-square"></i></span>
                                </div>
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>Gender: </div>
                                <div className='body-inline'>
                                    <span>{userDetails.gender}</span>
                                    <span><i class="fa-regular fa-pen-to-square"></i></span>
                                </div>
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>Salary: </div>
                                <div className='body-inline'>
                                    <span>LKR {userDetails.salary}</span>
                                    <span><i class="fa-regular fa-pen-to-square"></i></span>
                                </div>
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>Password: </div>
                                {isHide &&
                                    <div className='body-inline'>
                                        <span>{hiddenPassword}</span>
                                        <span><i onClick={() => {setIsHide(false)}} class="fa-regular fa-eye"></i>&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-pen-to-square"></i></span>
                                    </div>
                                }
                                {isHide === false &&
                                    <div className='body-inline'>
                                        {userDetails.user_name === username &&
                                            <span>{userDetails.password}</span>
                                        }
                                        {userDetails.user_name !== username &&
                                            <span>Other's Passwords are Hidden</span>
                                        }
                                        <span><i onClick={() => {setIsHide(true)}} class="fa-regular fa-eye-slash"></i>&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-pen-to-square"></i></span>
                                    </div>
                                }            
                                <div style={{fontWeight:"bold",  marginTop:"20px"}}>Profile Created On: </div>
                                <div className='body-inline'>
                                    <span>{slicedAddedDate}</span>
                                    <span><i class="fa-regular fa-pen-to-square"></i></span>
                                </div>
                                
                            </div>
                            <div style={{width:"40%", height:"65vh", margin:"0 0 0 20px"}}>
                                <fieldset style={{height:"65vh", borderRadius:"10px"}}>
                                    <legend>Recent Blog Posts</legend>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            ): (
                <p>Loading...</p>
            )}
            </ReactModal>
        </div>
    )
}
