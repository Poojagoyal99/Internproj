import carImg from "../../images/car1.png";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import seatImg from "../../images/seat.png";
import bag from "../../images/luggage.png";
import speed from "../../images/speedometer.png";
function BookingCards() {
    const navigate = useNavigate();
    const navigateToAboutInfo = () => {
        navigate('/yourInfo');
    };
    return(
        <div className="h-full w-full flex space-x-16 my-24 ">
<div className="ml-24  h-96 w-96 bg-customCream rounded-lg">
    <h1 className="text-xl font-bold text-center pt-3">Toyota Matrix</h1>
<img src = {carImg} alt='carimage' className="h-36 w-76 ml-14 my-5"></img>
<div className="flex flex-row mx-14 my-4 space-x-10">
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"><img src={speed} alt="seatimag" className="h-8 ml-4 mt-3 w-8" />
    <p className="mt-5 text-sm w-20">120 <span className="text-gray-500">km/hr</span></p></div>
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"><img src={seatImg} alt="seatimag" className="h-8 ml-4 mt-3 w-8"></img> 
    <p className="mt-5 text-sm w-20">8<span className="text-gray-500"> seater</span></p> </div>
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"> <img src={bag} alt="seatimag" className="h-8 ml-4 mt-3 w-8"></img>
    <p className="mt-5 text-sm w-20">10<span className="text-gray-500"> laguage</span></p>
    </div>
</div>
    <div className="h-12 w-80 bg-gray-50 rounded-lg mx-8 my-4 mt-7">
        <p className="text-xl font-medium pt-2 pl-5">Rs.2000<span className="text-base text-gray-500">/day</span> <button className="h-8 w-36 ml-5 rounded-xl text-white text-xl font-thin bg-customPeach" onClick={navigateToAboutInfo}>BOOK NOW</button></p>
        </div>
</div>
<div className="ml-24  h-96 w-96 bg-customCream rounded-lg">
    <h1 className="text-xl font-bold text-center pt-3">Toyota Matrix</h1>
<img src = {carImg} alt='carimage' className="h-36 w-76 ml-14 my-5"></img>
<div className="flex flex-row mx-14 my-4 space-x-10">
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"><img src={speed} alt="seatimag" className="h-8 ml-4 mt-3 w-8" />
    <p className="mt-5 text-sm w-20">120 <span className="text-gray-500">km/hr</span></p></div>
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"><img src={seatImg} alt="seatimag" className="h-8 ml-4 mt-3 w-8"></img> 
    <p className="mt-5 text-sm w-20">8<span className="text-gray-500"> seater</span></p> </div>
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"> <img src={bag} alt="seatimag" className="h-8 ml-4 mt-3 w-8"></img>
    <p className="mt-5 text-sm w-20">10<span className="text-gray-500"> laguage</span></p>
    </div>
</div>
    <div className="h-12 w-80 bg-gray-50 rounded-lg mx-8 my-4 mt-7">
        <p className="text-xl font-medium pt-2 pl-5">Rs.2000<span className="text-base text-gray-500">/day</span> <button className="h-8 w-36 ml-5 rounded-xl text-white text-xl font-thin bg-customPeach" onClick={navigateToAboutInfo}>BOOK NOW</button></p>
        </div>
</div>
<div className="ml-24  h-96 w-96 bg-customCream rounded-lg">
    <h1 className="text-xl font-bold text-center pt-3">Toyota Matrix</h1>
<img src = {carImg} alt='carimage' className="h-36 w-76 ml-14 my-5"></img>
<div className="flex flex-row mx-14 my-4 space-x-10">
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"><img src={speed} alt="seatimag" className="h-8 ml-4 mt-3 w-8" />
    <p className="mt-5 text-sm w-20">120 <span className="text-gray-500">km/hr</span></p></div>
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"><img src={seatImg} alt="seatimag" className="h-8 ml-4 mt-3 w-8"></img> 
    <p className="mt-5 text-sm w-20">8<span className="text-gray-500"> seater</span></p> </div>
    <div className="h-16 w-16 rounded-full border-2 border-white bg-gray-200"> <img src={bag} alt="seatimag" className="h-8 ml-4 mt-3 w-8"></img>
    <p className="mt-5 text-sm w-20">10<span className="text-gray-500"> laguage</span></p>
    </div>
</div>
    <div className="h-12 w-80 bg-gray-50 rounded-lg mx-8 my-4 mt-7">
        <p className="text-xl font-medium pt-2 pl-5">Rs.2000<span className="text-base text-gray-500">/day</span> <button className="h-8 w-36 ml-5 rounded-xl text-white text-xl font-thin bg-customPeach" onClick={navigateToAboutInfo}>BOOK NOW</button></p>
        </div>
</div>
        </div>
    );
};

export default BookingCards;
