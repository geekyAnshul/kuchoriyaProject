import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
// import Home from './Components/Home';
import Services from './Components/Services';
// import AboutUs from './Components/AboutUs';
import Collaboration from './Components/Collaboration';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/service" element={<Services />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/collaboration" element={<Collaboration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

