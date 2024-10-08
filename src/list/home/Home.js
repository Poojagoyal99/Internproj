
import Footer from "../../components/footer";
import Card from "./Card";
import ImgTxt from "./ImgTxt";
import NavImg from "./NavImg";
import Review from "./Review";
import Facilities from "./Facilities";
import History from "./History";
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
  const navigateToAbout3 = () => {
    navigate('/rentals');
  };
  const navigateToAbout4 = () => {
    navigate('/login');
  };
  return (
    <>
      <NavImg navigateToAbout={navigateToAbout} navigateToAbout1={navigateToAbout1} navigateToAbout2={navigateToAbout2} navigateToAbout3={navigateToAbout3} navigateToAbout4={navigateToAbout4}></NavImg>
      <History></History>
      <div>
      <h1 className="text-customBrown text-center font-bold text-3xl py-20">Discover the best Hotels</h1>
        <Card></Card>
      </div>
      <br></br>
      
      <br></br>
      <ImgTxt></ImgTxt>
      <Facilities />
      <Review></Review>
      <Footer navigateToAbout2={navigateToAbout2}></Footer>
    </>
  );
};
export default Home;
