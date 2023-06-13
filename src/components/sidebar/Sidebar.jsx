import React from 'react'
import "./sidebar.css"
import { ChatBubbleOutline,AttachMoneyOutlined, DynamicFeed, LineStyle, MailOutline, PermIdentity,  Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="siderbarWrapper">

            <div className="siderbarMenu">
                <h3 className='sidebarTitle'>Dashbord</h3>
                <ul className="siderbarList">
                    <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                     <li className="sidebarListItem">
                        <Timeline className= 'sidebarIcon'/>
                        Analytics
                    </li>
                     <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="siderbarMenu">
                <h3 className='sidebarTitle'>Dashbord</h3>
                <ul className="siderbarList">
                    <li className="sidebarListItem ">
                        <PermIdentity className='sidebarIcon'/>
                       Users
                    </li>
                     <li className="sidebarListItem">
                        <Storefront className= 'sidebarIcon'/>
                        Products
                    </li>
                    <li className="sidebarListItem ">
                        <AttachMoneyOutlined className='sidebarIcon'/>
                        Transactions
                    </li>
                     <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="siderbarMenu">
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className="siderbarList">
                    <li className="sidebarListItem">
                        <MailOutline className='sidebarIcon'/>
                        Mail
                    </li>
                     <li className="sidebarListItem">
                        <DynamicFeed className= 'sidebarIcon'/>
                        Feedback
                    </li>
                     <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="siderbarMenu">
                <h3 className='sidebarTitle'>Notification</h3>
                <ul className="siderbarList">
                    <li className="sidebarListItem ">
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                    </li>
                     <li className="sidebarListItem">
                        <Timeline className= 'sidebarIcon'/>
                        Analytics
                    </li>
                     <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
