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
        <div>
          <div>
<h1>Data Collection</h1>
<p></p>
<div>
  <div></div><p>Pick Up Details</p>
  <div></div>
  <div></div><p>Driver</p>
  <div></div>
  <div></div><p>Confirm</p>
</div>
          </div>
        </div>
        <br></br>
        <Footer navigateToAbout2={navigateToAbout2}></Footer>
        </>
    );
};
export default PickUp;