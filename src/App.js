import logo from './logo.svg';
import image from './illustration-dashboard.png';
import './App.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleNotifyClick = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);
    setIsValid(valid);
    if (valid) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 className="text-3xl/relaxed text-gray-400 font-light"> We are launching <span className="text-black font-bold">soon! </span></h1>
          <p className="text-gray-800 text-base  ">  Subscribe and get notified
          </p>
        </div>

        <div className='flex gap-4 flex-col sm:flex-row '>
          <div className='relative flex-grow'>
            <input type='email'
              className={`w-72 border-2 ${isValid ? 'border-inputBorder' : 'border-red-400'} pl-4 py-2 rounded-3xl  outline-none placeholder-inputBorder `}
              placeholder='Your email address...'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValid(true); // Reset validation on change
              }}
              required
            />
            {!isValid && (
              <p className="text-red-500 text-xs italic mt-1 absolute left-0">
                Please provide a valid email address
              </p>
            )}
          </div>


          <button onClick={handleNotifyClick} className="bg-primaryBlue text-white text-sm px-11 py-2 sm:py-2  rounded-3xl shadow-buttonShadow">
            Notify Me</button>
        </div>

        <img src={image} className="dashboard" alt="main" />
        <div className="flex gap-6 " >
          <div className='icon'><FaFacebookF /></div>
          <div className='icon'><FaTwitter /></div>
          <div className='icon'><FaInstagram /></div>

        </div>
        <p className="text-xxs text-gray-400">&copy; Copyright Ping. All rights reserved.</p>

      </header>
    </div >
  );
}

export default App;