import React from 'react'
import './toast-msg.css'
import {useParams} from 'react-router-dom'

export default function ProfileWarningToast(props) {
    const toastMsg = props.msg
    return (
        <div>
            <div class="notification-warning">
                <p>{toastMsg}</p>
                <span class="notification__progress"></span>
            </div>
        </div>
    )
}
