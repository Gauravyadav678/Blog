import React from 'react'
import './header.css'
import Headimage from './headerimage.jpg'
function header() {
  return (
   <div className='header'> 
     <div className='headerTitle'>
      <span className='headerTitleSm'>Blog $ post</span>
      <span className='headerTitleLg'>Welcome to blog</span>
    </div>
    <img className="headerimage" src={Headimage}/>
   </div>

  )
}

export default header
