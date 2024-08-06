import CardImg from "../../images/card1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HotelDetail = () => {
  return (
    <>
      <div className="flex ml-44 my-20">
        <div>
          <div className="max-h-full w-full">
            <img src={CardImg} alt="hotelimage" className="h-96 min-w-96" />
          </div>
          <div className="flex space-x-3 mt-20">
            <img src={CardImg} alt="hotelimage" className="h-28 w-28"></img>
            <img src={CardImg} alt="hotelimage" className="h-28 w-28"></img>
            <img src={CardImg} alt="hotelimage" className="h-28 w-28"></img>
            <img src={CardImg} alt="hotelimage" className="h-28 w-28"></img>
          </div>
        </div>
        <div className="mt-6 ml-20">
          <p className="text-customBrown text-base">London England</p>
          <h1 className="font-medium text-2xl mt-4">Hotel Regetn Park</h1>
          <div className="flex space-x-8 mt-6">
            <h2 className="font-bold text-lg">Rs200 Par Night</h2>
            <div className="bg-gray-200 h-30 w-px"></div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-orange-500 mr-1"
                />
              ))}
              <p>5</p>
            </div>
          </div>
          <p className="text-sm mt-10 mr-20">
            A good hotel booking system serves as a centralized platform that
            allows guests to make reservations for rooms, amenities, and
            services. Meanwhile, an online reservation system also provides
            hoteliers with a streamlined way to handle reservations,
            availability, pricing, and guest information. Customize your entire
            booking flow with Bookinglayer.
          </p>
          <button className="bg-customBrown text-white font-normal text-xl h-14 w-56 rounded-xl mt-12">
            BOOK NOW
          </button>
          <h1 className="font-semibold text-3xl mt-10 ml-24 text-gray-700">
            Rating
          </h1>
          <div className="flex ml-28">
            <div className="flex items-center font-bold text-7xl mt-10">
              <i className="mr-2">0.0</i>
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500 text-3xl"
              />
            </div>
            <div className="ml-28 my-10">
              <div class="flex items-center">
                <span class="mr-2">5</span>
                <div class="w-80 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700">
                  <div class="bg-yellow-500 h-2.5 rounded-sm w-10"></div>
                </div>
                <span class="ml-2">0.0%</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2">4</span>
                <div class="w-80 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700">
                  <div class="bg-yellow-500 h-2.5 rounded-sm w-10"></div>
                </div>
                <span class="ml-2">0.0%</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2">3</span>
                <div class="w-80 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700">
                  <div class="bg-yellow-500 h-2.5 rounded-sm w-10"></div>
                </div>
                <span class="ml-2">0.0%</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2">2</span>
                <div class="w-80 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700">
                  <div class="bg-yellow-500 h-2.5 rounded-sm w-10"></div>
                </div>
                <span class="ml-2">0.0%</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="mr-2">1</span>
                <div class="w-80 bg-gray-200 rounded-sm h-2.5 dark:bg-gray-700">
                  <div class="bg-yellow-500 h-2.5 rounded-sm w-10"></div>
                </div>
                <span class="ml-2">0.0%</span>
              </div>
            </div>
          </div>

          <hr className="mt-5"></hr>
          <div className="text-gray-500 mt-3">
            Click to add a review.
            <button className="text-blue-500 ml-48">+Add Review</button>
          </div>
        </div>
      </div>
      <div className="flex mx-44 space-x-10">
        <div className="min:h-72 w-3/6 border border-gray-300 shadow-lg">
          <div className="flex ml-10 my-5">
            <img
              src={CardImg}
              alt="profilepic"
              className="h-20 w-20 rounded-full"
            ></img>
            <div className="ml-5 mt-3">
              <h1 className="font-semibold">ABCDSF HFINKK</h1>
              <p className="text-sm text-gray-500 pt-1">DHfngn fjgmks</p>
              <div className="flex pt-2">
                {[...Array(4)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-orange-500 mr-1"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm ml-10 mb-10 mr-20">
            A good hotel booking system serves as a centralized platform that
            allows guests to make reservations for rooms, amenities, and
            services. Meanwhile, an online reservation system also provides
            hoteliers with a streamlined way to handle reservations,
            availability, pricing, and guest information. Customize your entire
            booking flow with Bookinglayer.
          </p>
        </div>
        <div className="min:h-72 w-3/6 border border-gray-300 shadow-lg">
          <div className="flex ml-10 my-5">
            <img
              src={CardImg}
              alt="profilepic"
              className="h-20 w-20 rounded-full"
            ></img>
            <div className="ml-5 mt-3">
              <h1 className="font-semibold">ABCDSF HFINKK</h1>
              <p className="text-sm text-gray-500 pt-1">DHfngn fjgmks</p>
              <div className="flex pt-2">
                {[...Array(4)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-orange-500 mr-1"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm ml-10 mb-10 mr-20">
            A good hotel booking system serves as a centralized platform that
            allows guests to make reservations for rooms, amenities, and
            services. Meanwhile, an online reservation system also provides
            hoteliers with a streamlined way to handle reservations,
            availability, pricing, and guest information. Customize your entire
            booking flow with Bookinglayer.
          </p>
        </div>
      </div>
    </>
  );
};
export default HotelDetail;
