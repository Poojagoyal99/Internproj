import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./list/Login";
import Mainlogin from "./list/Mainlogin";
import Home from './list/home/Home';
import Discover from './list/discover/Discover';
import Blog from './list/blog/Blog';
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
        </Routes>
      </div>
    </Router>
    );
};

export default App;
