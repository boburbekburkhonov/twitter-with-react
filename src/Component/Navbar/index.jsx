import React, {useState, useRef} from 'react';
import {NavLink} from 'react-router-dom'
import Bobur from '../Bobur'
import logo from '../../assets/images/twiiter.png'
import home from '../../assets/images/home.png'
import profile from '../../assets/images/profile.png'
import question from '../../assets/images/question.png'
import './main.css'

function index(props) {

  const[nav, setNav] = useState(false);
  const button = useRef()
  const overlay = useRef()

  function add() {
    setNav(true)
    button.current.classList.add('d-none');
    overlay.current.classList.remove('d-none');
  }

  function closeAdd() {
    setNav(false)
    button.current.classList.add('d-none')
    button.current.classList.remove('d-none')
    overlay.current.classList.add('d-none');
  }

  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 27){
      setNav(false)
      button.current.classList.add('d-none')
      button.current.classList.remove('d-none')
      overlay.current.classList.add('d-none');
    }
  })

  document.addEventListener('click', (e) => {
    if(e.target === overlay.current){
      setNav(false)
      button.current.classList.add('d-none')
      button.current.classList.remove('d-none')
      overlay.current.classList.add('d-none');
    }
  })

  return (
    <>
     <div className={`navbar-wrapper ${nav ? 'd-inline-block' : 'd-none'}`}>
      <div className="container">
        <nav className='navbar mx-auto'>
          <div>
          <NavLink to='/' className='logo d-inline-block mb-5 ' href="#">
            <img src={logo} alt="logo" width='40' height='33' />
          </NavLink>

          <button onClick={() => closeAdd()} className='closed'></button>
          </div>

          <ul className='list-unstyled m-0 p-0'>
            <li className='d-flex align-items-center mb-4'>
              <img src={home} alt="home" width='28' height='28' />

              <NavLink to='/home' className={({isActive}) => isActive ? 'ms-3 list-link text-decoration-none active' : 'ms-3 list-link text-decoration-none'} href="#">
                Home
              </NavLink>
            </li>

            <li className='d-flex align-items-center mb-4'>
              <img src={profile} alt="home" width='28' height='28' />

              <NavLink to='/profile' className={({isActive}) => isActive ? 'ms-3 list-link text-decoration-none active' : 'ms-3 list-link text-decoration-none'} href="#">
              Profile
              </NavLink>
            </li>

            <li className='d-flex align-items-center mb-4'>
              <img src={question} alt="home" width='28' height='28' />

              <NavLink to='/question' className={({isActive}) => isActive ? 'ms-3 list-link text-decoration-none active' : 'ms-3 list-link text-decoration-none'} href="#">
              Question
              </NavLink>
            </li>
          </ul>

          <a className='btn-tweet mt-5 mb-5' href="#">
          Tweet
          </a>

          <Bobur />
        </nav>
      </div>
    </div>
    <button ref={button} onClick={() => add()} className='hamburger'></button>

    <div ref={overlay} className='overlay d-none'></div>
    </>
  );
}

export default index;