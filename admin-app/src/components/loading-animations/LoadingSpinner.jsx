import React from 'react'
import './loading-animations.css'

export default function LoadingSpinner(pops) {
  const loadingMsg = pops.loadingMsg
  return (
    <div>
        <div className='loading-container'>
            <div className="loading-spinner"></div>
            <div style={{color:'white'}} >{loadingMsg}</div>
        </div>   
    </div>
  )
}
