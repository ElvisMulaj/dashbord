import React from 'react'
import "./topbar.css"
import { Language, NotificationsNone, Settings } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>Movie Dashbord</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconbadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconbadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                    
                </div>
                <img src='./Images/elvis.jpg' alt='' className="topAvatar"/>
            </div>
        </div>
       </div>
  )
}
