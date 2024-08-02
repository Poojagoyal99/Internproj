import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import HotelDetail from "./HotelDetail";
import { useNavigate } from 'react-router-dom';
const ExploreCard = () =>{
    const navigate = useNavigate();
    const navigateToAbout = () => {
        navigate('/discover');
      };
    const navigateToAbout2 = () => {
        navigate('/home');
      };
      const navigateToAbout1 = () => {
        navigate('/blog');
      };
    return(
        <>
        <Navbar navigateToAbout2={navigateToAbout2} navigateToAbout={navigateToAbout} navigateToAbout1={navigateToAbout1}></Navbar>
        <HotelDetail></HotelDetail>

        <br></br>
        <Footer navigateToAbout2={navigateToAbout2} ></Footer>
        </>
    );
};
export default ExploreCard;