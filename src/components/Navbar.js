import logo from '../images/logo.png';
const Navbar = ({navigateToAbout1}) => {
    return(
<nav className="bg-customSkin p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold"><img src={logo} alt='logo image'></img></div>
        <div className="flex space-x-4">
          <button href="#" className="text-white hover:text-gray-400 px-20">Discover</button>
          <button href="#" className="text-white hover:text-gray-400 px-15">Rentals</button>
          <button href="#" className="text-white hover:text-gray-400 px-20" onClick={navigateToAbout1}>Blog Post</button>
          <button className="bg-customPeach text-white px-2 py-2 rounded">Login</button>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;