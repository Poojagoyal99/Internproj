import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
const BookingConfirm = () => {
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
        <div className='mx-28 my-20 h-500 w-5/6 rounded-2xl shadow-2xl shadow-slate-500 flex flex-row space-x-10'>
          <div className='ml-28 h-400 w-1/3 mt-10 bg-customCream rounded-2xl'>
<h1 className='text-xl font-medium pl-10 pt-6'>Data Collection</h1>
<p className='text-gray-500 pl-10 pr-4 pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
<div className='flex'>
<div>
  <div className='h-10 w-10 mt-5 ml-10 bg-yellow-500 rounded-full'> <div className='pt-1 ml-1'><CheckIcon style={{ fontSize: '2rem', color: 'white' }} /></div>
  </div>
  <div className='h-12 w-1 mt-1 ml-14 bg-yellow-500'></div>
  <div className='h-10 w-10 mt-1 ml-10 pt-1 bg-yellow-500 rounded-full'>
      <div className='ml-1'>  <CheckIcon style={{ fontSize: '2rem', color: 'white' }} /></div>
  </div>
  <div className='h-12 w-1 ml-14 mt-1 bg-yellow-500'></div>
  <div className='h-10 w-10 mt-1 ml-10 pt-1 bg-yellow-500 rounded-full'>
      <div className='ml-1'>  <CheckIcon style={{ fontSize: '2rem', color: 'white' }} /></div>
  </div>
</div>
<div>
  <p className='pl-16 pt-8 text-lg'>PickUp Details</p>
  <p className='pl-16 pt-16 text-lg'>Driver</p>
  <p className='pl-16 pt-16 text-lg'>Confirm</p>
</div>
</div>
</div>
          <div>
<div className='text-4xl font-bold text-customBrown ml-24 mt-32'>Booking Confirmed</div>
<div className='flex mt-10'>
<div className='h-28 w-28 rounded-full bg-green-600  ml-20'>
<div className="p-6">
        <CheckIcon style={{ fontSize: '4rem', color: 'white' }} />
      </div>
</div>
<div className='min- w-60 ml-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
          </div>
          </div>
          </div>
        <br></br>
        <Footer navigateToAbout2={navigateToAbout2}></Footer>
        </>
    );
};
export default BookingConfirm;