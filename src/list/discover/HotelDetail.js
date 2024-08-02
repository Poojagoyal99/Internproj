
import CardImg from '../../images/card1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HotelDetail = () => {

    return (
        <>
        <div className='flex mx-44 my-20'>
            <div>
            <div className='max-h-full w-full'>
    <img src={CardImg} alt='hotelimage' className='h-96 w-svw' />
</div>
                <div className='flex space-x-3 mt-20'>
                <img src={CardImg} alt='hotelimage' className='h-28 w-28'></img>
                <img src={CardImg} alt='hotelimage'className='h-28 w-28'></img>
                <img src={CardImg} alt='hotelimage'className='h-28 w-28'></img>
                <img src={CardImg} alt='hotelimage'className='h-28 w-28'></img>
                </div>
            </div>
            <div className=' mt-6 ml-72'>
                <p className='text-customBrown text-base'>London England</p>
                <h1 className='font-medium text-2xl mt-4'>Hotel Regetn Park</h1>
                <div className='flex space-x-8 mt-6'>
                <h2 className='font-bold text-lg'>Rs200 Par Night</h2>
                <div className='bg-gray-200 h-30 w-px' ></div>
                <div className="flex">
                       {[...Array(5)].map((_, i) => (
                           <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
                       ))}
                        <p>5</p>
                   </div>
                </div>
                <p className='text-sm mt-10'>A good hotel booking system serves as a centralized platform that allows guests to make reservations for rooms, amenities, and services. 
                    Meanwhile, an online reservation system also provides hoteliers with a streamlined way to handle reservations, availability, pricing, and guest information. 
                    Customize your entire booking flow with Bookinglayer.</p>
                <button className='bg-customBrown text-white font-normal text-xl h-14 w-56 rounded-xl mt-12'>BOOK NOW</button>
                
            </div>
        </div>
            <div className=' flex mx-44 space-x-10'>
                <div className='min:h-72 w-3/6 border border-gray-300 shadow-lg'>
                <div className='flex ml-10 my-5'>
                <img src={CardImg} alt='profilepic' className='h-20 w-20 rounded-full'></img>
                <div className='ml-5 mt-3'>
                <h1 className='font-semibold'>ABCDSF HFINKK</h1>
                <p className='text-sm text-gray-500 pt-1'>DHfngn fjgmks</p>
                <div className="flex pt-2">
                       {[...Array(4)].map((_, i) => (
                           <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
                       ))}
                   </div>
                </div>
                </div>
                <p className='text-sm ml-10 mb-10 mr-20'>A good hotel booking system serves as a centralized platform that allows guests to make reservations for rooms, amenities, and services. 
                    Meanwhile, an online reservation system also provides hoteliers with a streamlined way to handle reservations, availability, pricing, and guest information. 
                    Customize your entire booking flow with Bookinglayer.</p>
            </div>
            <div className='min:h-72 w-3/6 border border-gray-300 shadow-lg'>
            <div className='flex ml-10 my-5'>
                <img src={CardImg} alt='profilepic' className='h-20 w-20 rounded-full'></img>
                <div className='ml-5 mt-3'>
                <h1 className='font-semibold'>ABCDSF HFINKK</h1>
                <p className='text-sm text-gray-500 pt-1'>DHfngn fjgmks</p>
                <div className="flex pt-2">
                       {[...Array(4)].map((_, i) => (
                           <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
                       ))}
                   </div>
                </div>
                </div>
                <p className='text-sm ml-10 mb-10 mr-20'>A good hotel booking system serves as a centralized platform that allows guests to make reservations for rooms, amenities, and services. 
                    Meanwhile, an online reservation system also provides hoteliers with a streamlined way to handle reservations, availability, pricing, and guest information. 
                    Customize your entire booking flow with Bookinglayer.</p>
            </div>
            </div>
           
        </>
    );
};
export default HotelDetail;