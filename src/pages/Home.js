import './Home.css'

import React from 'react'
import Header from '../header/header'
import Top from '../topbar/top'
import SideBar from '../SideBar/SideBar'
import Post from '../Post/Post'
function Home() {
  return (
    < >
     <Top/>
     <Header/>
     <div className='home'>
     <Post/>
     <SideBar/>
     </div>
    </>
  )
}

export default Home
