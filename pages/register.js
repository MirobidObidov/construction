import React from 'react'
import '../styles/register.module.css'

const Register = () => {
  return (
    <div>
        <div className="sign">
            <div className="container">
                <form action="#">
                    <h1>Sign up</h1>
                    <div className="input-box">
                        <input type="text" placeholder="email" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="username" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="password" required />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember Me</label>
                    </div>
                    <button type="submit" class="btn">Sign up</button>
                    <div className="register-link">
                        <p>Have you got an account? Sign in!</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register