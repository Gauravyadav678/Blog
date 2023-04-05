import './Register.css'

function Register() {
    return (
        <div className='register'>
            <span className='registerTitle'>register</span>
            <form className='registerForm'>
            <label >User Name</label>
                <input type='text' className='registerInput' placeholder='enter your name....' />
                <label >E-mail</label>
                <input type='email' className='registerInput' placeholder='enter your Email....' />
                <label >Password</label>
               <input type='password' className='registerInput' placeholder='enter your passwor...' />
                <button className='registerButton'>Register</button>
            </form>
            <button className='loginButton'>Login Here </button>
        </div>
    )
}

export default Register
