import React, {useState, useContext} from 'react';
import logo from '../../assets/images/twiiter.png'
import dataContext from '../Context/dataContext';
import './main.css'

function index({isLogin}) {

  const[userName, setUserName] = useState('')
  const[password, setPasword] = useState('')

  const params = {
    username: userName,
    password: password
  }

  return (
    <div className='login'>
      <div className="container">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <h1 className='login-heading'>
          Log in to Twitter
        </h1>

        <div>
          <input type="text" placeholder='Phone number, email address' className='login-input'
          onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <input type="password" placeholder='Password' className='login-input mt-4'
          onChange={(e) => setPasword(e.target.value)}
          />
        </div>

        <button className='btn-primary mt-4' onClick={() => isLogin(params)}>Log In</button>

        <div className='d-flex justify-content-between mt-5'>
          <button className='login-forgot'>
            Forgot password?
          </button>

          <button className='login-forgot'>
            Sign up to Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;