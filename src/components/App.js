import '../css/App.css';
import Surface from './Surface';
import Temp_slider from './Temp_slider';
import Wind from './Wind';
import Snow from './Snow';
import Precipitation from './Precipitation';
import Humidity from './Humidity';
import Aqi from './Aqi';
import Slicing from './Slicing';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="sidebar">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/temperature" activeClassName="active">Temperature</NavLink>
              <ul>
                <li><NavLink to="/temperature/slider" activeClassName="active">Temperature slider</NavLink></li>
                <li><NavLink to="/temperature/over-years" activeClassName="active">Temperature over years</NavLink></li>
                <li><NavLink to="/temperature/single-year" activeClassName="active">Temperature of single year</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/precipitation" activeClassName="active">Precipitation</NavLink>
              <ul>
                <li><NavLink to="/precipitation/distribution" activeClassName="active">Precipitation Distribution</NavLink></li>
                <li><NavLink to="/precipitation/snow" activeClassName="active">Snow</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/humidity" activeClassName="active">Humidity</NavLink></li>
            <li><NavLink to="/aqi" activeClassName="active">AQI</NavLink></li>
            <li><NavLink to="/wind" activeClassName="active">Wind</NavLink></li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<div className="home">
              <h1 className="title">Climate Data Visualization</h1>
              <p className="author">By Yanshan Wan and Gagan Raj Singh</p>
            </div>} />
            <Route path="/temperature" element={<><Surface /><Slicing /><Temp_slider /></>} />
            <Route path="/temperature/slider" element={<Slicing />} />
            <Route path="/temperature/over-years" element={<Surface />} />
            <Route path="/temperature/single-year" element={<Temp_slider />} />
            <Route path="/precipitation" element={<><Precipitation /><Snow /></>} />
            <Route path="/precipitation/distribution" element={<><Precipitation /></>} />
            <Route path="/precipitation/snow" element={<><Snow /></>} />
            <Route path="/humidity" element={<Humidity />} />
            <Route path="/aqi" element={<Aqi />} />
            <Route path="/wind" element={<Wind />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
