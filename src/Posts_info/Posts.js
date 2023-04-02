import './Posts.css'
import React from 'react'
import ImagePost from '../header/images.jpg'
function Posts() {
  return (
    <div className='Posts'>
      <img className='image' src={ImagePost}
      alt='this is sample image' />
      <div className='postInfo'>
        <div className='postsCats'>
            <span className='postsCat'>Music</span>
            <span className='postsCat'>Life</span>
        </div>
        <span className='postTitle'>
            lorem us the word ji too many forest to keept it up guys
        </span> 
        <hr/>
        <span className='postDate'>1 hour Ago</span>
      </div>
    </div>
  )
}

export default Posts
