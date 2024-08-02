import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import postImg from "../../images/postimg1.png";

const PostDetail = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex mx-32 my-24 space-x-10">
                <div className="w-1/2">
                    <img src={postImg} alt="imageOfPost" className="h-96 w-full object-cover"></img>
                </div>
                <div className="w-1/2">
                    <h1 className="font-bold text-xl">Famous Place at MNOMN</h1>
                    <p className="font-semibold text-sm">
                        Written by John Due <span className="text-lg text-gray-500 pl-5">date</span>
                    </p>
                    <p className="text-gray-500 text-base pt-4">
                        With their elaborate superfluities and wonderful architecture, Indian monuments represent one of the most outstanding facets of the multi-faceted Indian culture. 
                        An architectural feat in itself, each Indian monument is a remarkably splendid sample of unbelievable artistry, covering a sense of mystery, deception and romance.
                        Be it the marvel in white marble, the spellbinding Taj Mahal; or the red stone splendor, the magnificent Red Fort; or the magnificence of temple art of Khajuraho, Konark and Hampi, there is evident the master craftsmanship and elegance, that brings to the forefront the splendor of the bygone era.
                        <br></br>
                        With their elaborate superfluities and wonderful architecture, Indian monuments represent one of the most outstanding facets of the multi-faceted Indian culture. 
                        An architectural feat in itself, each Indian monument is a remarkably splendid sample of unbelievable artistry, covering a sense of mystery, deception and romance.
                        Be it the marvel in white marble, the spellbinding Taj Mahal; or the red stone splendor, the magnificent Red Fort; or the magnificence of temple art of Khajuraho, Konark and Hampi, there is evident the master craftsmanship and elegance, that brings to the forefront the splendor of the bygone era. 
                        Monuments are witnesses of India's past; the monuments of India are also the guardian pillars of India's cultural heritage.
                        The monuments of India have become an inspiration for the future generations.
                    </p>
                    <h1 className="text-lg font-semibold pt-4">Important info:</h1>
                    <p className="text-gray-500 text-base pt-4">
                        With their elaborate superfluities and wonderful architecture, Indian monuments represent one of the most outstanding facets of the multi-faceted Indian culture. 
                        An architectural feat in itself, each Indian monument is a remarkably splendid sample of unbelievable artistry, covering a sense of mystery, deception and romance.
                        Be it the marvel in white marble, the spellbinding Taj Mahal; or the red stone splendor, the magnificent Red Fort; or the magnificence of temple art of Khajuraho, Konark and Hampi, there is evident the master craftsmanship and elegance, that brings to the forefront the splendor of the bygone era. 
                        Monuments are witnesses of India's past; the monuments of India are also the guardian pillars of India's cultural heritage.
                        The monuments of India have become an inspiration for the future generations.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PostDetail;
