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
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/temperature" activeClassName="active">Temperature</NavLink></li>
            <li><NavLink to="/precipitation" activeClassName="active">Precipitation</NavLink></li>
            <li><NavLink to="/humidity" activeClassName="active">Humidity</NavLink></li>
            <li><NavLink to="/aqi" activeClassName="active">AQI</NavLink></li>
            <li><NavLink to="/wind" activeClassName="active">Wind</NavLink></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/temperature" element={<><Surface /><Slicing /><Temp_slider /></>} />
            <Route path="/precipitation" element={<>              
              <h2 className="title">Precipitation</h2>
              <Precipitation />
              <h2 className="title">Snow</h2>
              <Snow />
            </>} />
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
