import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Cards from './Cards';
import Searching from './Searching';
import { useNavigate } from 'react-router-dom';

function Discover() {
    const navigate = useNavigate();
    const navigateToAbout1 = () => {
        navigate('/blog');
      };
      const navigateToAbout2 = () => {
        navigate('/home');
      };
    return(
        <>
<Navbar navigateToAbout1 = {navigateToAbout1} navigateToAbout2={navigateToAbout2}></Navbar>
<br></br>
<Searching></Searching>
<br></br>
<Cards></Cards>
<Cards></Cards>
<Cards></Cards>
<Cards></Cards>
<div className='flex justify-end'>
    <button className='bg-customBrown text-white w-32 h-12 font-bold mr-20 rounded-lg'>Show More</button>
</div>
<br></br>
<Footer navigateToAbout2={navigateToAbout2}></Footer>
</>
    );
};
export default Discover;