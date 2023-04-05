import './Write.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Img1 from '../../Single/nature.jpg'
function Write() {
  return (
    <div className='write'>
        <img src={Img1}  className='writeImg'/>
     <form className='writeForm'>
        <div className='writeFormGroup'>
             <label htmlFor='fileInput'>
             <AccountCircleIcon  className='Icon' />
            </label> 
             <input type='file' id='fileInput' style={{display:'none'}}/>
             <input type='text' placeholder='Title' className='writeInput' autoFocus='true' />
        </div>
        <div className='writeFormGroup'>
            <textarea className='writeInput writeText' type="text" placeholder='Tell your Story...'></textarea>
        </div>
       <button className='writeSubmit'>Publish</button> 
     </form>
    </div>
  )
}

export default Write
