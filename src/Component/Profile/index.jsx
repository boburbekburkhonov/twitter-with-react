import React from 'react';
import arrow from '../../assets/images/arrow.png'
import two from '../../assets/images/two.png'
import bobur from '../../assets/images/bobur.png'
import comment from '../../assets/images/comment.png'
import './main.css'

function index(props) {
  return (
    <section className='home'>
      <div className="container d-flex flex-column">
        <div className='home-top mb-3 d-flex align-items-center'>
          <img src={arrow} alt="arrow" width='20' height='16' />

          <div className='ms-4'>
          <h1 className='home-top-heading'>Bobur</h1>
          <p className='home-top-desc'>1,070 Tweets</p>
          </div>
        </div>

        <div>
        <img className='mavlonov' src={two} alt="mavlonov" width='' height='335' />

        <button className='home-edit d-inherit'>Edit profile</button>
        </div>

        <div className='home-center d-flex flex-direction'>
        <div className='home-top'>
          <div>
          <h1 className='home-top-heading'>Bobur</h1>
          <p className='home-top-desc'>@bobur_mavlonov</p>
        </div>

        <p className='home-center-desc mt-3'>
        UX&UI designer at <a href='#' className='home-center-desc-link'>@abutechuz</a>
        </p>
        </div>
        </div>

        <div className='following d-flex mt-3'>
          <p className='following-desc'><span className='following-desc-span'>67 </span>Following</p>

          <p className='following-desc ms-4'><span className='following-desc-span'>47 </span>Followers</p>
        </div>

        <div className='comment d-flex pt-5'>
          <img src={bobur} alt="bobur" width='60' height='60' />

          <div className='ms-3'>
            <div className='d-flex align-items-center'>
              <h3 className='comment-heading'>
              Bobur
              </h3>
              <p className='comment-desc'>
              @bobur_mavlonov · Apr 1
              </p>
            </div>

            <p className='comment-small'>A bo'pti maskamasman</p>
          </div>
        </div>

        <img className='comment-img mx-auto mt-3' src={comment} alt="comment" height='500' />
      </div>
    </section>
  );
}

export default index;