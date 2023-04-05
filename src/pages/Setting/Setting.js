import './Setting.css'
import SideBar from '../../SideBar/SideBar'
import Img from '../../header/comix.jpg'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Setting() {
    return (
        <div className='setting'>
            <div className='settingWrapper'>
                <div className='settingTitle'>
                    <span className='settingUpdateTitle'>Update Your Account</span>
                    <span className='settingDeleteTitle'>Delete Your Account</span>
                </div>
                <form className='settingForm'>
                    <label>Profile Picture</label>
                    <div className='settingPP' >
                        <
                            img src={Img}
                            className='settingImg'
                        />
                        <label htmlFor='fileInput'>
                            <AccountCircleOutlinedIcon  className='settingPPIcon' />
                        </label>
                        <input type='file' id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Alita' />
                    <label>E-mail</label>
                    <input type='email' placeholder='abc@gmail.com' />
                    <label>Pass</label>
                    <input type='password' placeholder='password...' />
                    <button className='settingSubmit'>Update </button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}

export default Setting
