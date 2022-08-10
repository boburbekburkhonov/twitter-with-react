import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar'
import Profile from '../Profile'
import Question from '../Question'
import Home from '../Home'
import Yuriqnoma from '../Yuriqnoma'
import Search from '../Search'
import './main.css'

function index(props) {
  return (
    <div className='containers d-flex'>
    <Navbar />
      <main className='main'>
        <Routes>
          <Route exact path='/' element={<Yuriqnoma />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/question' element={<Question />} />
        </Routes>
      </main>
    <Search />
    </div>
  );
}

export default index;