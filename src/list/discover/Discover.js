import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Cards from './Cards';
import Searching from './Searching';
function Discover() {
    return(
        <>
<Navbar></Navbar>
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
<Footer></Footer>
</>
    );
};
export default Discover;