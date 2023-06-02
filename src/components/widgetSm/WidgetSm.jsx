import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src="./Images/profile.jpg" alt='profile foto' className='widgetSmImg'/>
                <div className="widgetSmUser">
                      <span className="widgetSmUsername">Ana Maria</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility/>
                  Display
                </button>
          </li>
          <li className="widgetSmListItem">
            <img src="./Images/profile.jpg" alt='profile foto' className='widgetSmImg'/>
                <div className="widgetSmUser">
                      <span className="widgetSmUsername">Ana Maria</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility/>
                  Display
                </button>
          </li>
          <li className="widgetSmListItem">
            <img src="./Images/profile.jpg" alt='profile foto' className='widgetSmImg'/>
                <div className="widgetSmUser">
                      <span className="widgetSmUsername">Ana Maria</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility/>
                  Display
                </button>
          </li>
          <li className="widgetSmListItem">
            <img src="./Images/profile.jpg" alt='profile foto' className='widgetSmImg'/>
                <div className="widgetSmUser">
                      <span className="widgetSmUsername">Ana Maria</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility/>
                  Display
                </button>
          </li>
          <li className="widgetSmListItem">
            <img src="./Images/profile.jpg" alt='profile foto' className='widgetSmImg' />
                <div className="widgetSmUser">
                      <span className="widgetSmUsername">Ana Maria</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility/>
                  Display
                </button>
          </li>
          <li className="widgetSmListItem">
            <img src="./Images/profile.jpg" alt='profile foto' className='widgetSmImg'/>
                <div className="widgetSmUser">
                      <span className="widgetSmUsername">Ana Maria</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility/>
                  Display
                </button>
          </li>
        </ul>
    </div>
  )
}
