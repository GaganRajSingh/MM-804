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
              <NavLink to="/MM-804/" exact activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/MM-804/temperature" activeClassName="active">Temperature</NavLink>
              <ul>
                <li><NavLink to="/MM-804/temperature/slider" activeClassName="active">Temperature slider</NavLink></li>
                <li><NavLink to="/MM-804/temperature/over-years" activeClassName="active">Temperature over years</NavLink></li>
                <li><NavLink to="/MM-804/temperature/single-year" activeClassName="active">Temperature of single year</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/MM-804/precipitation" activeClassName="active">Precipitation</NavLink>
              <ul>
                <li><NavLink to="/MM-804/precipitation/distribution" activeClassName="active">Precipitation Distribution</NavLink></li>
                <li><NavLink to="/MM-804/precipitation/snow" activeClassName="active">Snow</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/MM-804/humidity" activeClassName="active">Humidity</NavLink></li>
            <li><NavLink to="/MM-804/aqi" activeClassName="active">AQI</NavLink></li>
            <li><NavLink to="/MM-804/wind" activeClassName="active">Wind</NavLink></li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/MM-804" element={<div className="home">
              <h1 className="title">Climate Data Visualization</h1>
              <p className="author">By Yanshan Wan and Gagan Raj Singh</p>
            </div>} />
            <Route path="/MM-804/temperature" element={<><Surface /><Slicing /><Temp_slider /></>} />
            <Route path="/MM-804/temperature/slider" element={<Slicing />} />
            <Route path="/MM-804/temperature/over-years" element={<Surface />} />
            <Route path="/MM-804/temperature/single-year" element={<Temp_slider />} />
            <Route path="/MM-804/precipitation" element={<><Precipitation /><Snow /></>} />
            <Route path="/MM-804/precipitation/distribution" element={<><Precipitation /></>} />
            <Route path="/MM-804/precipitation/snow" element={<><Snow /></>} />
            <Route path="/MM-804/humidity" element={<Humidity />} />
            <Route path="/MM-804/aqi" element={<Aqi />} />
            <Route path="/MM-804/wind" element={<Wind />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
