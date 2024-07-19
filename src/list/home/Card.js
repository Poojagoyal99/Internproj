import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import card1 from '../../images/card1.png';

const Card = () => {
  return (
    <>
    <div className="w-96 mx-16 h-96 rounded-3xl shadow-xl shadow-gray-400/90 shadow-{left-right-bottom} ">
    <div className="overflow-hidden rounded-3xl">
        <img
          className="h-72 w-full object-cover"
          src={card1}
          alt="Card image"
        />
      </div>
      <div className="p-4">
        <p>XYZ</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 mr-1" />
          ))}
          <p className='pl-40'>hjh</p>
          </div>
      </div>
      </div>
      
      </>
  );
};

export default Card;
