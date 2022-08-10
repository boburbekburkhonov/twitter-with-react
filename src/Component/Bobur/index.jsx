import React from 'react';
import bobur from '../../assets/images/bobur.png'
import menu from '../../assets/images/menu.png'
import './main.css'

function index(props) {
  return (
    <div className='bobur d-flex align-items-center'>
      <img src={bobur} alt="bobur" width='50' height='50' />

      <div className='ms-2 me-5'>
        <h3 className='heading'>Bobur</h3>
        <p className='desc'>@bobur_mavlonov</p>
      </div>

      <img src={menu} alt="menu" width='17' height='4' />
    </div>
  );
}

export default index;