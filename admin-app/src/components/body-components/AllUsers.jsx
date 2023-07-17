import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MoreUser from './MoreUser'

export default function AllUsers() {
    const[userDetails, setUserDetails] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/adminApp/admins/get`).then((res) =>{
            const data = res.data.results
            setUserDetails(data)
        })
    })

    return (
        <div className='body-components'>
            <div className='div-frame'>
                <table className='details-table'>
                    <thead>
                        <tr>
                            <th style={{borderTopLeftRadius:"6px"}}>Avatar</th>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Blog Posts</th>
                            <th style={{borderTopRightRadius:"6px", border:"none"}}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                    {userDetails.map((item, index) => (
                        <tr key={item._id}>
                            <td> <img src={`${item.avatar}`} className='prof-pic-nav' alt='prof-pic-nav'/></td>
                            <td>{item.user_id}</td>
                            <td>{item.user_name}</td>
                            <td>{item.first_name}&nbsp;{item.middle_name}&nbsp;{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>{item.blog_post}</td>
                            <td style={{border:"none"}}>
                                <div className='body-inline' >
                                    <button className='btn btn-danger'>Ban</button>
                                    <button className='btn btn-warning'>Update</button>
                                    <MoreUser id={item._id}/>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className='container' style={{height:"10vh"}}>
                <button className='main-btn'>Add New User</button>
            </div>
        </div>
    )
}
