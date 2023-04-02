import './SideBar.css'
import SidebarImage from '../header/images.jpg'
import React from 'react'
import { Facebook } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
function SideBar() {
  return (
    <div className='sideBar'>
      <div className='sideBarItem'>
        <span className='sideBartitle'>About me</span>
        <img src={SidebarImage}/>
         <p className='text'>Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <div className='sideBarItem'>
        <span className='sideBartitle'>Categories</span>
        <div className='sideList'>
            <ul className='ListItem'>
            <li className='sideBarListItem'>Music</li>
            <li className='sideBarListItem'>Game</li>
            <li className='sideBarListItem'>Digital</li>
            <li className='sideBarListItem'>Mountain</li>
            <li className='sideBarListItem'>Dance</li>
            <li className='sideBarListItem'>College</li>
            </ul>
        </div>
      </div>
      <div className='sideBarItem'>
        <span className='sideBartitle'>Contact us</span>
        <div className='sideIconList'>
        <Facebook className='topicon top-1'/>
        <Twitter className='topicon top-2'/>
        <WhatsApp className='topicon top-3'/>
        <Instagram className='topicon top-4'/>
        </div>
      </div>
    </div>
  )
}

export default SideBar
