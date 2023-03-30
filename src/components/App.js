import '../css/App.css';
import Surface from './Surface';
import Temp_slider from './Temp_slider';
import Wind from './Wind'
import Snow from './Snow'
import Aqi from './Aqi';
import Slicing from './Slicing'

function App() {
    return (
        <div className="App">
            <Surface />
            <Slicing />
            {/* <Temp_slider /> */}
            <Wind />
            <Snow />
            <Aqi />
        </div>
    );
}

export default App;