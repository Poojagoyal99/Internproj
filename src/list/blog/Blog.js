import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import AllBlog from "./AllBlog";
import { useNavigate } from 'react-router-dom';
function Blog() {
    const navigate = useNavigate();
    const navigateToAbout = () => {
        navigate('/discover');
      };
    const navigateToAbout2 = () => {
        navigate('/home');
      };
    return (
        <>
        <Navbar navigateToAbout2={navigateToAbout2} navigateToAbout={navigateToAbout}></Navbar>
        <br></br>
        <AllBlog ></AllBlog>
        <br></br>
        <Footer navigateToAbout2={navigateToAbout2} ></Footer>
        </>
    );
};
export default Blog;