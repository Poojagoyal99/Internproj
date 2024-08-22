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
    return(
        <>
        <Navbar navigateToAbout={navigateToAbout} navigateToAbout1={navigateToAbout1} navigateToAbout2={navigateToAbout2} navigateToAbout4={navigateToAbout4} ></Navbar>
        <div className='mx-28 my-20 min-h-96 w-5/6 rounded-2xl shadow-2xl shadow-slate-500'>
          <div className='ml-8 min-h-96 w-96 bg-customCream rounded-2xl'>
<h1 className='text-xl font-medium pl-10 pt-6'>Data Collection</h1>
<p className='text-gray-500 pl-10 pr-4 pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
<div>
  <div className='h-10 w-10 mt-5 ml-10 bg-yellow-500 rounded-full'><p></p><p className='pl-20 text-lg '>PickUp Details</p></div>
  <div className='h-16 w-1 mt-1 ml-14 bg-yellow-500'><p className='pl-16 text-lg pt-20'>Driver</p></div>
  <div className='h-10 w-10 mt-1 ml-10 pt-1 bg-gray-400 rounded-full'><span className='text-white text-2xl pl-3 font-bold'>2</span></div>
  <div className='h-16 w-1 ml-14 mt-1 bg-gray-400'><p className='pl-16 pt-20 text-lg'>Confirm</p></div>
  <div className='h-10 w-10 mt-1 ml-10 pt-1 bg-gray-400 rounded-full'><span className='text-white text-2xl pl-3 font-bold'>3</span></div>
</div>
          </div>
        </div>
        <br></br>
        <Footer navigateToAbout2={navigateToAbout2}></Footer>
        </>
    );
};
export default PickUp;