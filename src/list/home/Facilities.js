import f1 from '../../images/f1.png';
import f2 from '../../images/f2.png';
import f3 from '../../images/f3.png';
import f4 from '../../images/f4.png';
import f5 from '../../images/f5.png';
import f6 from '../../images/f6.png';
import f7 from '../../images/f7.png';
import f8 from '../../images/f8.png';
function Facilities() {
  return (
    <div>
      <div className="h-full w-full flex">
        <div className="mx-20 my-3">
          <h3 className="font-bold text-2xl">We do our best facilities</h3>
          <h3 className="font-bold text-2xl">provide you</h3>
          <p className="text-sm mt-6">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled 
            parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
          <button className="bg-customBrown text-white font-semibold h-10 w-36 rounded-lg mt-10">
            Contact
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mx-20 my-4 flex justify-between space-x-4">
            <div className="h-52 w-48 border border-gray rounded-xl shadow-md">
            <img src={f1} className='w-16 h-12 mx-16 mt-10'></img>
              <p className='text-center pt-5 text-lg'>Private workspace</p>
            </div>
            <div className="h-52 w-48 border border-gray rounded-xl shadow-md">
            <img src={f2} className='w-16 h-12 mx-16 mt-10'></img>
      <p className='text-center pt-5 text-lg'>Parking Area</p>
    
            </div>
            <div className="h-52 w-48 border border-gray rounded-xl shadow-md">
            <img src={f3} className='w-16 h-12 mx-16 mt-10'></img>
              <p className='text-center pt-5 text-lg'>Breakfast</p>
            </div>
            <div className="h-52 w-48 border border-gray rounded-xl shadow-md">
            <img src={f4} className='w-16 h-12 mx-16 mt-10'></img>
              <p className='text-center pt-5 text-lg'>Free Wifi</p>
            </div>
          </div>
          <div className="mx-20 my-2 flex justify-between space-x-4">
            <div className="h-52 w-48 border border-gray rounded-xl shadow-md">
            <img src={f5} className='w-16 h-12 mx-16 mt-10'></img>
              <p className='text-center pt-5 text-lg'>Free Electricity</p>
            </div>
            <div className="h-52 w-48 border border-gray rounded-xl shadow-md">
            <img src={f6} className='w-16 h-12 mx-16 mt-10'></img>
              <p className='text-center pt-5 text-lg'>Swimming Pool</p>
            </div>
            <div className="h-52 w-48 border border-gray rounded-xl shadow-md">
            <img src={f7} className='w-16 h-12 mx-16 mt-10'></img>
              <p className='text-center pt-5 text-lg'>Exercise Space</p>
            </div>
            <div className="h-52 w-48 border border-gray rounded-xl shadow-md">
            <img src={f8} className='w-16 h-12 mx-16 mt-10'></img>
              <p className='text-center pt-5 text-lg'>Other Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Facilities;
