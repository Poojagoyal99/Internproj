import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
const PickUp = () => {
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
    const navigateToAboutRental = () => {
      navigate('/rentals');
    };
    const navigateToAboutDriverDetail = () => {
      navigate('/driverdetail');
    };
    return(
        <>
        <Navbar navigateToAbout={navigateToAbout} navigateToAbout1={navigateToAbout1} navigateToAbout2={navigateToAbout2} navigateToAbout4={navigateToAbout4} ></Navbar>
        <div className='mx-28 my-20 h-500 w-5/6 rounded-2xl shadow-2xl shadow-slate-500 flex flex-row space-x-10'>
          <div className='ml-28 h-400 w-1/3 mt-10 bg-customCream rounded-2xl'>
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
          <div >
          <form className='mt-20 lg:ml-28'>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
            Your Name
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
            Email Address
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="email"
            placeholder="JohnDoe@gmail.com"
          />
        </div>
      </div>

      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
            Pick Up Address
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="text"
            placeholder="No 5, Makurdi Street"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
          Phone Number
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="tel"
            placeholder="+91 1234567890"
          />
        </div>
      </div>

      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
            Date of Pickup
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="date"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-lg font-semibold mb-2">
            Date of Drop Up
          </label>
          <input
            className="appearance-none block w-full bg-transparent border-b-2 border-gray-300 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:border-black"
            type="date"
          />
        </div>
      </div>

      <div className="flex">
        <button
          className="bg-gray-300 hover:bg-gray-500 text-white py-2 px-4 rounded ml-20 w-36 text-xl "
          type="submit" onClick={navigateToAboutRental}>
          Back
        </button>
        <button
          className="bg-customPeach hover:bg-red-500 text-white py-2 px-4 rounded w-36 text-xl ml-7" 
          type="reset" onClick={navigateToAboutDriverDetail}>
          Next
        </button>
      </div>
    </form>
          </div>
        </div>
        <Footer navigateToAbout2={navigateToAbout2}></Footer>
        </>
    );
};
export default PickUp;