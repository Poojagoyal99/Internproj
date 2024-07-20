import hisimg from '../../images/Historyimg.png';

const History = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center p-4 md:p-8">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
                    <img src={hisimg} alt="History" className="w-3/4 md:w-full " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                    <p className="text-sm font-semibold">AaoPadharo</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-customLigthBrown">Your Gateway to Ujjain's Comfort</h1>
                    <h1 className="text-2xl md:text-3xl font-bold text-customLigthBrown">and Culture</h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        At AaoPadharo, we are committed to connecting travelers with the best that Ujjain has to offer. 
                        At AaoPadharo, we are committed to connecting travelers with the best that Ujjain has to offer. 
                        At AaoPadharo, we are committed to connecting travelers with the best that Ujjain has to offer. 
                        At AaoPadharo, we are committed to connecting travelers with the best that Ujjain has to offer. 
                        At AaoPadharo, we are committed to connecting travelers with the best that Ujjain has to offer.
                    </p>
                    <div className="relative w-full h-96 pt-10">
                        <div className="absolute w-5/6 h-0.5 bg-gray-200 top-1/2 transform -translate-y-1/2 ml-20 mt-10"></div>
                        <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2 "></div>
                        <div className="absolute  transform -translate-x-1/2 -translate-y-1/2 mt-28 ml-32">
                        <h1  className='text-customLigthBrown font-bold text-5xl'>100+</h1>
                        <p className='text-xl font-medium pt-7'>Holiday Package</p>
                        </div>
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-black mt-36 mr-56">
                        <h1 className='text-customLigthBrown font-bold text-5xl'>201+</h1>
                        <p className='text-xl font-medium pt-7'>Hotels</p>
                        </div>
                        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 text-black ml-28 mb-16">
                        <h1 className='text-customLigthBrown font-bold text-5xl'>15+</h1>
                        <p className='text-xl font-medium pt-7'>Rental Services</p>
                        </div>
                        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 text-black mr-56 mb-16">
                        <h1 className='text-customLigthBrown font-bold text-5xl'>120M+</h1>
                        <p className='text-xl font-medium pt-7'>Satisfied Travelers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;
