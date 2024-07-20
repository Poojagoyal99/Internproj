import image from '../../images/imgtxt.png';
function ImgTxt() {
return(
<>
<div className="relative w-full h-96  overflow-hidden shadow-xl shadow-gray-400/90 mx-20 my-10">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt="Card image"
      />
    </div>
</>
);
}
export default ImgTxt;