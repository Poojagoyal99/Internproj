import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CardImg from '../../images/card1.png';
function Cards() {
    return (
        <div className='flex justify-center space-x-32 mx-20 my-20'>
           <div className='w-72 min-h-80 bg-gray-100 rounded-t-2xl rounded-b-xl'>
           <img src={CardImg} alt='cardImg' className='w-72 rounded-t-2xl'></img>
           <p className='text-sm text-green-500 mt-3'>Ujjain xyz</p>
        <h3 className='mt-2 text-xl font-semibold'>Best Hotel Park</h3>
        <div className="flex items-center justify-between">
        <p className=' text-md  pr-5'>Rs 3200</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
              ))}
            </div>
            
          </div>
           </div>
           <div className='w-72 min-h-80 bg-gray-100 rounded-t-2xl rounded-b-xl'>
           <img src={CardImg} alt='cardImg' className='w-72 rounded-t-2xl'></img>
           <p className='text-sm text-green-500 mt-3'>Ujjain xyz</p>
        <h3 className='mt-2 text-xl font-semibold'>Best Hotel Park</h3>
        <div className="flex items-center justify-between">
        <p className=' text-md  pr-5'>Rs 3200</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
              ))}
            </div>
            
          </div>
           </div>
           <div className='w-72 min-h-80 bg-gray-100 rounded-t-2xl rounded-b-xl'>
           <img src={CardImg} alt='cardImg' className='w-72 rounded-t-2xl'></img>
           <p className='text-sm text-green-500 mt-3'>Ujjain xyz</p>
        <h3 className='mt-2 text-xl font-semibold'>Best Hotel Park</h3>
        <div className="flex items-center justify-between">
        <p className=' text-md  pr-5'>Rs 3200</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500 mr-1" />
              ))}
            </div>
            
          </div>
           </div>
           
        </div>
    );
};
export default Cards;