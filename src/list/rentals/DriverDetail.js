import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import driverImg from "../../images/driverImg.png";
const DriverDetail = () => {
    const navigate = useNavigate();

    const navigateToAbout = () => {
      navigate('/discover');
    };
    const navigateToAbout1 = () => {
      navigate('/blog');
    };
    const navigateToAbout2 = () => {
      navigate('/home');
    };
    const navigateToAbout4 = () => {
      navigate('/login');
    };
    const navigateToAboutPickUp = () => {
      navigate('/yourInfo');
    };
    const navigateToAboutBookingConfirm = () => {
      navigate('/cabConfirm');
    };
    return(
        <>
        <Navbar navigateToAbout={navigateToAbout} navigateToAbout1={navigateToAbout1} navigateToAbout2={navigateToAbout2} navigateToAbout4={navigateToAbout4} ></Navbar>
        <div className='mx-28 my-20 h-500 w-5/6 rounded-2xl shadow-2xl shadow-slate-500 flex flex-row space-x-10'>
          <div className='ml-14 h-400 w-1/3 mt-10 bg-customCream rounded-2xl'>
<h1 className='text-xl font-medium pl-10 pt-6'>Data Collection</h1>
<p className='text-gray-500 pl-10 pr-4 pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
<div>
  <div className='h-10 w-10 mt-5 ml-10 bg-yellow-500 rounded-full'><p></p><p className='pl-20 text-lg '>PickUp Details</p></div>
  <div className='h-12 w-1 mt-1 ml-14 bg-yellow-500'><p className='pl-16 text-lg pt-16'>Driver</p></div>
  <div className='h-10 w-10 mt-1 ml-10 pt-1 bg-gray-400 rounded-full'><span className='text-white text-2xl pl-3 font-bold'>2</span></div>
  <div className='h-12 w-1 ml-14 mt-1 bg-gray-400'><p className='pl-16 pt-16 text-lg'>Confirm</p></div>
  <div className='h-10 w-10 mt-1 ml-10 pt-1 bg-gray-400 rounded-full'><span className='text-white text-2xl pl-3 font-bold'>3</span></div>
</div>
          </div>
          <div>
            <div className='bg-customSkin h-72 w-80 rounded-2xl mt-20 ml-24'>
              <img src={driverImg} alt='driverimage' className='h-72 w-80 py-5 px-5'></img>
            </div>
          </div>
          <div >
          <form className='mt-20 ml-10'>
        <div className="min-w-60 md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
          Driver Name
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="text"
            placeholder="John Doe"
          />
      </div>
        <div className="min-w-60 md:w-1/2 px-3 mt-7">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
          Phone Number
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="tel"
            placeholder="+91 1234567890"
          />
      </div>
      <div className="min-w-60 md:w-1/2 px-3 mb-6 md:mb-0 mt-7">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
          Verification
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="text"
            placeholder="id used for verification"
          />
      </div>
    </form>
    <div className="flex space-x-10 mt-14 mr-20">
        <button
          className="bg-gray-300 hover:bg-gray-500 text-white py-2 px-4 rounded w-36 text-xl "
          type="submit" onClick={navigateToAboutPickUp}>
          Back
        </button>
        <button
          className="bg-customPeach hover:bg-red-500 text-white py-2 px-4 rounded w-36 text-xl" 
          type="reset" onClick={navigateToAboutBookingConfirm}>
          Next
        </button>
      </div>
    </div>
        </div>
        
        <Footer navigateToAbout2={navigateToAbout2}></Footer>
        </>
    );
};
export default DriverDetail;