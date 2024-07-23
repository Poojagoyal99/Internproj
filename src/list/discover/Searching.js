import { FaCalendarAlt, FaUser } from 'react-icons/fa';
function Searching() {
    return(
        <>
        <div className="w-full h-full">
        <div className="bg-yellow-600 w-9/12 h-32 mx-44 mt-10 rounded-3xl flex justify-evenly">
        <div>
            <h1 className='mt-6 font-bold text-2xl'>Book a Hotel</h1>
            <p className='text-lg text-gray-600 mt-2'>Discover the perfect space for you!</p>
        </div>
        <div className="flex justify-around">
        <div className="flex mb-4 space-x-4 mt-5">
                <div className='w-28'>
                  <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkin-date">
                    Check-In Date
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                      <FaCalendarAlt />
                    </span>
                    <input
                      type="date"
                      id="checkin-date"
                      className="bg-white text-black w-full py-2 pl-10 pr-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                    />
                  </div>
                </div>
                <div className="w-28">
                  <label className="block text-black text-sm font-semibold mb-2" htmlFor="checkout-date">
                    Check-Out Date
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
                      <FaCalendarAlt />
                    </span>
                    <input
                      type="date"
                      id="checkout-date"
                       className="bg-white text-black w-full py-2 pl-10 pr-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5rem 1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              </div>
        <div className="flex mb-4 mt-5 space-x-4">
                <div className="w-28">
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
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5rem 1.5rem' }}
                    />
                  </div>
                </div>
                <div className="w-28">
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
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5rem 1.5rem' }}
                    />
                  </div>
                </div>
        </div>
        <div>
            <p className='mt-6 text-gray-500 text-sm'>Book now</p>
            <button className='w-32 h-12 text-white bg-customPeach mt-2 rounded-xl font-bold text-lg shadow-xl'>SEARCH</button>
        </div>
        </div>
        </div>
        </>
    );
};
export default Searching;