import React from 'react';
import bobur from '../../assets/images/bobur.png'
import images from '../../assets/images/images.png'
import design from '../../assets/images/design.png'
import commentmenu from '../../assets/images/comment-menu.png'
import clou from '../../assets/images/clou.png'
import './main.css'

function index(props) {
  return (
    <section className='home'>
      <div className="container">
        <h2 className='home-heading'>Home</h2>

        <div className='home-line'></div>

        <div className='mb-5'>
          <div className='d-flex align-items-center'>
          <img src={bobur} alt="bobur" width='60' height='60' />
          <p className='home-comment-desc ms-3'>What’s happening</p>
          </div>

          <div className='d-flex align-items-center mt-5'>
          <img src={images} alt="images" width='190' height='23' />

          <button className='home-comment-btn ms-auto'>Tweet</button>
          </div>
        </div>

        <div className='home-line'></div>

        <div className='d-flex align-items-center flex-column mb-5'>

          <div className='d-flex align-items-center'>
          <img src={design} alt="design" width='60' height='60' />
          <div className='ms-3'>
            <div className='d-flex align-items-center'>
            <h3 className='home-comment-design-heading'>
              Designsta
            </h3>
            <p className='home-comment-design-desc'>@inner · 25m</p>
            </div>

            <p className='home-comment-design-desc-small mt-2'>
            Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
            </p>
          </div>
          </div>

          <img className='mt-5' src={commentmenu} alt="commentmenu" width='590' height='26' />
        </div>

        <div className='home-line'></div>

      <div className='d-flex align-items-center flex-column mt-5'>

        <div className='d-flex align-items-center'>
        <img src={clou} alt="clou" width='60' height='60' />
        <div className='ms-3'>
          <div className='d-flex align-items-center'>
          <h3 className='home-comment-design-heading'>
          cloutexhibition
          </h3>
          <p className='home-comment-design-desc'>@RajLahoti · 22m</p>
          </div>

          <p className='home-comment-design-desc-small mt-2'>
          YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.
          </p>
        </div>
        </div>

        <img className='mt-5' src={commentmenu} alt="commentmenu" width='590' height='26' />
        </div>
      </div>
    </section>
  );
}

export default index;