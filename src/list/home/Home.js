import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Card from "./Card";
import ImgTxt from "./ImgTxt";
import NavImg from "./NavImg";
import Review from "./Review";
const Home = () => {
  return (
    <>
      <NavImg></NavImg>
      <div>
      <h1 className="text-customBrown text-center font-bold text-3xl py-20">Discover the best Hotels</h1>
        <div className="flex">
          <Card  />
          <Card />
          <Card />
        </div>
      </div>
      <br></br>
      <br></br>
      <ImgTxt></ImgTxt>
      <Review></Review>
      <Footer></Footer>
    </>
  );
};
export default Home;
