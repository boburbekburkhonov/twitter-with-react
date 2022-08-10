import React, { useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import './main.css'

function index(props) {

  useEffect(() => {
    alanBtn({
      key: 'c901b3dd03966952eec4fa264c84b5d62e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
    });
  }, []);

  return (
    <div>
      <h1 className='alert alert-info mt-3'>You can get answers to these questions</h1>

      <p className='desc-question'>How can you help me?</p>
      <p className='desc-question'>What is Twitter?</p>
      <p className='desc-question'>How to deactivate your account?</p>
      <p className='desc-question'>Help with Google search visibility?</p>
      <p className='desc-question'>Tired of Twitter?</p>

      <p className='alert alert-danger mt-4 h4'>Faqat shu yerdagi savollarni bering iltimos! <span className='text-dark h3'>Mikrofonni bosing.</span></p>
    </div>
  );
}

export default index;