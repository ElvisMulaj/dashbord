import React from 'react'
import './user.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle"> Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
            <div className="userShowTop">
                <img src="https://pbs.twimg.com/profile_banners/1193108070/1366052358/600x200"
                 alt="profile" className="userShowImg" />
                 <div className="userShowTopTitle">
                    <span className="userShowUsername">Elvis Mulaj</span>
                    <span className="userShowUserTitle">Guitarist</span>
                 </div>
               </div>
           
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTtile">elvismulaj95</span>
                </div>
                
                <div className="userShowInfo">
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfoTtile">08.01.1995</span>
                </div>
                <span className="userShowTitle">Contact  Details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTtile">elvismulaj95</span>
                </div>
                <div className="userShowInfo">
                <PhoneAndroid className='userShowIcon'/>
                <span className="userShowInfoTtile">+38349810825</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfoTtile">elvismulaj95@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className='userShowIcon'/>
                <span className="userShowInfoTtile">Buroj /Skenderaj</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateRight">
                        <div className="userUpdateItem">
                           <label >Username</label>
                           <input type="text" placeholder='elvismulaj95'  className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                           <label >Full Name</label>
                           <input type="text" placeholder='Elvis Mulaj'  className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                           <label >Email</label>
                           <input type="text" placeholder='elvismulaj95@gmail.com'  className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                           <label >Phone Number</label>
                           <input type="text" placeholder='+38349810825'  className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                           <label >Address</label>
                           <input type="text" placeholder='Buroj/Skenderaj'  className='userUpdateInput'/>
                        </div>

                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className='userUpdateImg' src="https://pbs.twimg.com/profile_banners/1193108070/1366052358/600x200" />
                            <label htmlFor="file">
                                <Publish className='userUpdateIcon'/>
                                </label>
                            <input type='file' id='file' style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
