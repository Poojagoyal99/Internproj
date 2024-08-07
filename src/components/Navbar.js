import logo from "../images/logo.png";

const Navbar = ({ navigateToAbout1, navigateToAbout2, navigateToAbout , navigateToAbout3 }) => {
  return (
    <nav className="bg-customSkin p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white text-lg font-bold">
          <button onClick={navigateToAbout2}>
            <img src={logo} alt="logoImage" className="h-8 md:h-10" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 w-full md:w-auto">
          <button
            className="text-white hover:text-gray-400 px-4 py-2 md:px-6"
            onClick={navigateToAbout}>
            Discover
          </button>
          <button className="text-white hover:text-gray-400 px-4 py-2 md:px-6"  onClick={navigateToAbout3}>
            Rentals
          </button>
          <button
            className="text-white hover:text-gray-400 px-4 py-2 md:px-6"
            onClick={navigateToAbout1}>
            Blog Post
          </button>
          <button className="bg-customPeach text-white px-4 py-2 md:px-6 md:py-3 rounded mt-2 md:mt-0 w-full md:w-auto text-center">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
