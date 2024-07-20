import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import card1 from '../../images/card1.png';

function Card() {
  return (
    <div className="flex  items-start my-8 justify-center space-x-14">
      {/* Left Card */}
      <div className="w-80 h-5/6 rounded-3xl shadow-lg shadow-gray-500">
        <div className="w-72 h-72 mx-auto pt-4 rounded-3xl px-5">
          <img src={card1} alt='card' className="w-full h-60 rounded-t-3xl object-cover" />
        </div>
        <div className="pl-5">
          <p className='font-bold text-lg'>Rudraksh Club & Resorts</p>
          <div className="flex items-center justify-between">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 mr-1" />
              ))}
            </div>
            <p className='font-bold text-lg text-green-700 pr-5'>Rs 3200</p>
          </div>
        </div>
      </div>
      
      {/* Middle Card (slightly higher) */}
      <div className="w-80 h-5/6 rounded-3xl shadow-lg shadow-gray-500 transform -translate-y-8">
        <div className="w-72 h-72 mx-auto pt-4 rounded-3xl px-5">
          <img src={card1} alt='card' className="w-full h-60 rounded-t-3xl object-cover" />
        </div>
        <div className="pl-5">
          <p className='font-bold text-lg'>Rudraksh Club & Resorts</p>
          <div className="flex items-center justify-between">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 mr-1" />
              ))}
            </div>
            <p className='font-bold text-lg text-green-700 pr-5'>Rs 3200</p>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="w-80 h-5/6 rounded-3xl shadow-lg shadow-gray-500">
        <div className="w-72 h-72 mx-auto pt-4 rounded-3xl px-5">
          <img src={card1} alt='card' className="w-full h-60 rounded-t-3xl object-cover" />
        </div>
        <div className="pl-5">
          <p className='font-bold text-lg'>Rudraksh Club & Resorts</p>
          <div className="flex items-center justify-between">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 mr-1" />
              ))}
            </div>
            <p className='font-bold text-lg text-green-700 pr-5'>Rs 3200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
 