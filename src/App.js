import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/blogs" element={<Blogs />} /> */}
          {/* <Route exact path="/signup" element={<Signup />} /> */}
          {/* <Route exact path="/information" element={<Information />} /> */}
          {/* <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
