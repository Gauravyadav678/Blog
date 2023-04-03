import './SinglePost.css'
import PostImg from '../carimg.jpg'
function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singleWrapper'>
        <img src={PostImg} className='singlePostImg'/>
        <h1 className='singlePostTitle'>
        Lorem ipsum is placeholder text 
        </h1>
      </div>
    </div>
  )
}

export default SinglePost
