import '../css/App.css';
import Surface from './Surface';
import Temp_slider from './Temp_slider';
import Wind from './Wind'
import Snow from './Snow'
import Aqi from './Aqi';
// import Test from './Test'

function App() {
    return (
        <div className="App">
            <Surface />
            <Temp_slider />
            <Wind />
            <Snow />
            <Aqi />
            {/* <div className='row'>
                <div className='graph-card'>
                    <Surface />
                </div>
                <div className='graph-card'>

                </div>
            </div>
            <div className='row'>
                <div className='graph-card'>

                </div>
                <div className='graph-card'>

                </div>
            </div> */}
            {/* <Test /> */}
        </div>
    );
}

export default App;