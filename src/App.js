import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./list/Login";
import Mainlogin from "./list/Mainlogin";
import Home from './list/home/Home';
function App() {
    return (
        <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Mainlogin />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </div>
    </Router>
    );
};

export default App;
