import './Single.css'
import SideBar from '../SideBar/SideBar'
import SinglePost from './SinglePost/SinglePost'
function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <SideBar/>
    </div>
  )
}

export default Single
