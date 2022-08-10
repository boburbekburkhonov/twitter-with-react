import React from 'react';
import searchimg from '../../assets/images/search-img.png'
import mushtariy from '../../assets/images/mushtariy.png'
import shuhratbek from '../../assets/images/shuhratbek.png'
import './main.css'

function index(props) {
  return (
    <div className='search'>
      <div className="container">
        <div className='search-wrapper'>
        <input className='search-input mb-2' type="search" placeholder='Search Twitter' />

        <img src={searchimg} alt="searchimg" width='373' height='178px' />

        <div className='search-center'>
          <h3 className='search-heading'>
          You might like
          </h3>

          <ul className='list-unstyled m-0 p-0 mb-3'>
            <li className='d-flex align-items-center mb-4'>
              <img src={mushtariy} alt="mushtariy" width='60' height='60' />

              <div className='ms-2'>
                <h1 className='search-center-heading'>Mushtariy</h1>
                <p className='search-center-desc'>@Mushtar565266</p>
              </div>

              <button className='search-center-btn'>Follow</button>
            </li>

            <li className='d-flex align-items-center justify-content-between'>
              <img src={shuhratbek} alt="mushtariy" width='60' height='60' />

              <div className='ms-2'>
                <h1 className='search-center-heading'>Shuhratbek</h1>
                <p className='search-center-desc'>@mrshukhrat</p>
              </div>

              <button className='search-center-btn'>Follow</button>
            </li>
          </ul>
        <span className='search-center-span'>Show more</span>
        </div>

        </div>
      </div>
    </div>
  );
}

export default index;