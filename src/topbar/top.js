import './top.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import Img1 from './myimage.jpg'
function top() {
  return (
    <div className='top'>
      <div className="topleft">
        <FacebookIcon className='topicon top-1'/>
        <TwitterIcon className='topicon top-2'/>
        <WhatsAppIcon className='topicon top-3'/>
        <InstagramIcon className='topicon top-4'/>
      </div>
      <div className="topcenter">
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>about</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Know More</li>
        </ul>
      </div>
      <div className="topright"> 
      <img className='myimage' src={Img1} alt="My Image" />
      <SearchIcon className='searchIcon'/>
      </div>
    </div>
  )
}

export default top
