import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import navImg from '../../images/loginImg1.png';
import logo from '../../images/logo.png';

const NavImg = ({ navigateToAbout, navigateToAbout1, navigateToAbout2, navigateToAbout3, navigateToAbout4 }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div>
      <div className="relative w-screen min-h-screen overflow-hidden">
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent my-7">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-white text-lg font-bold">
              <button onClick={navigateToAbout2}>
                <img src={logo} alt="logo" className="h-12" />
              </button>
            </div>
            <div className="flex space-x-14">
              <button className="text-white hover:text-gray-400" onClick={navigateToAbout}>Discover</button>
              <button className="text-white hover:text-gray-400" onClick={navigateToAbout3}>Rentals</button>
              <button className="text-white hover:text-gray-400" onClick={navigateToAbout1}>Blog Post</button>
              <button className="bg-customPeach text-white px-4 py-2 rounded" onClick={navigateToAbout4}>Logout</button>
            </div>
          </div>
        </nav>
        <img
          className="w-full h-full object-cover opacity-90"
          src={navImg}
          alt="Card"
        />
        <div className="absolute inset-0 flex flex-col lg:flex-row items-start lg:items-center justify-center px-10 bg-opacity-80">
          <div className="text-container lg:w-1/2 flex flex-col items-start justify-center lg:justify-start lg:pl-16">
            <h2 className="text-white text-4xl font-normal">Discover Ujjain</h2>
            <h2 className="text-white text-4xl font-normal mb-2 py-4">with <b><i>Aaopadharo</i></b></h2>
            <button className="bg-gradient-to-r from-ffe485 to-c1a43e text-black px-4 py-2 rounded-full">Search Hotels</button>
          </div>
          <div className="form-container lg:w-2/6 flex justify-end lg:pr-24">
            <div className="bg-white bg-opacity-50 p-4 rounded-3xl w-80 max-w-md h-80 ml-60">
              <h1 className='font-bold text-center text-xl'>Book a Hotel</h1>
              <p className='text-center text-sm'>Discover the perfect space for you</p>
              <div className="flex mb-4 space-x-4 mt-5">
                <div className='w-32'>
                  <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkin-date">
                    Check-In Date
                  </label>
                  <div className="relative max-w-sm">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
                      <FaCalendarAlt />
                    </span>
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                      placeholderText="Select date"
                    />
                  </div>
                </div>
                <div className="w-32">
  <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkout-date">
    Check-Out Date
  </label>
  <div className="relative max-w-sm">
    <input type='date' placeholder='select date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5 " ></input>
  </div>
</div>
              </div>
              <div className="flex mb-4 space-x-4">
                <div className="w-32">
                  <label className="block text-black text-sm font-semibold mb-2" htmlFor="adults">
                    Adults
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
                      <FaUser />
                    </span>
                    <input
                      type="number"
                      id="adults"
                      className="bg-white text-black w-full py-2 pl-10 pr-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                      min="1"
                      defaultValue=""
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1.5rem 1.5rem',
                      }}
                    />
                  </div>
                </div>
                <div className="w-32">
                  <label className="block text-black text-sm font-semibold mb-2" htmlFor="children">
                    Children
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
                      <FaUser />
                    </span>
                    <input
                      type="number"
                      id="children"
                      className="bg-white text-black w-full py-2 pl-10 pr-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                      min="0"
                      defaultValue=""
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1.5rem 1.5rem',
                      }}
                    />
                  </div>
                </div>
              </div>
              <button className="w-3/6 bg-customPeach text-white font-semibold shadow-xl py-2 rounded-lg hover:bg-opacity-75 transition duration-200 ml-14">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavImg;
