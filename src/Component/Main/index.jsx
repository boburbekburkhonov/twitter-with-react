import React, {useState} from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from '../Login'
import Navbar from '../Navbar'
import Profile from '../Profile'
import Question from '../Question'
import Home from '../Home'
import Yuriqnoma from '../Yuriqnoma'
import Error from '../Error'
import Search from '../Search'
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  const navigate = useNavigate()

  const user = {
    username: 'johndoe',
    password:'123456'
  }

  function userCheck (params){
    user.username === params.username && user.password === params.password ?

    navigate('/home') : navigate('/')
  }

  const {pathname} = useLocation()

  return (
    <div className='containers d-flex'>
    {pathname === '/' ? '' : <Navbar />}
      <main className='main'>
        <Routes>
          <Route exact path='/' element={<Login isLogin={userCheck} />} />
          <Route exact path='/info' element={<Yuriqnoma />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/question' element={<Question />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      {pathname === '/' ? '' : <Search />}
    </div>
  );
}

export default index;