import './Login.css'

function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form className='loginForm'>
                <label >E-mail</label>
                <input type='email' className='loginInput' placeholder='enter your Email....' />
                <label >Password</label>
               <input type='password' className='loginInput' placeholder='enter your passwor...' />
                <button className='loginButton'>Login</button>
            </form>
            <button className='loginRegister'>Register Here </button>
        </div>
    )
}

export default Login
