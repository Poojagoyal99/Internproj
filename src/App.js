import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./list/Login";
import Mainlogin from "./list/Mainlogin";
import Home from './list/home/Home';
import Discover from './list/discover/Discover';
import Blog from './list/blog/Blog';
import ExploreCard from './list/discover/ExploreCard';
import PostDetail from './list/blog/PostDetail';
import Rentals from './list/rentals/Rentals';
import PickUp from './list/rentals/PickUp';
import DriverDetail from './list/rentals/DriverDetail';
function App() {
    return (
        <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Mainlogin />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/hotel-details" element={<ExploreCard />} />
          <Route path='/postdetails' element = {<PostDetail />} />
          <Route path='/rentals' element = {<Rentals />} />
          <Route path='/yourInfo' element = {<PickUp />} />
          <Route path='/driverdetail' element = {<DriverDetail />} />
        </Routes>
      </div>
    </Router>
    );
};

export default App;
