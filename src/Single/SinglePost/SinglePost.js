import './SinglePost.css'
import PostImg from '../nature.jpg'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DateRangeIcon from '@mui/icons-material/DateRange';
function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singleWrapper'>
        <img
         src={PostImg} className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
        Lorem ipsum is placeholder text
        <div className='singlePostEdit'>
        <EditIcon className='singlePostIcon'/>
        <DeleteIcon className='singlePostIcon'/>
        </div>
        </h1>
        
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author : <b>Alita</b></span>
          <span className='singlePostDate'>  1 hour</span>
        </div> 
        <p className='singlePostPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the </p>
      </div>
    </div>
  )
}

export default SinglePost
