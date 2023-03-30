import Plot from 'react-plotly.js';
import mean_temp from '../data/mean_temp.json'
import years from '../data/years.json'
import { useState } from 'react';

function Slicing() {    

    const [year, setYear] = useState(1996);
    
    const handleSliderChange = (e) => {
        setYear(1996 + e.slider.active)
    }

    const data3d = [
        {
            type: 'mesh3d',
            x: [0, 365, 365, 0],
            y: [year, year, year, year],
            z: [-40, -40, 40, 40],
            i: [0, 1, 2, 3],
            j: [2, 3, 0, 1],
            k: [1, 0, 3, 2],
            opacity: 0.6,
            color: 'grey'
        },
        {
            y: years,
            z: mean_temp,
            type: 'surface',
            showscale: false,
        }
    ]
    
    const layout3d = {
        width: 650,
        height: 550,
    }

    const data2d = [
        {
            y: mean_temp[1],
            line: {
                simplify: false,
            }
        }
    ]

    const layout2d = {
        width: 650,
        height: 550,
        sliders : [{
            len: 0.95,
            transition: {duration: 500},
            steps: years.map((year) => {
                return {
                    label: year,
                    method: 'animate',
                    args: [[year], {
                        mode: 'immediate',
                        frame: {redraw: true, duration: 500},
                        transition: {duration: 500}
                    }]
                }
            })
            
        }]
    }

    const frames_mean = mean_temp.map((temp, index) => {
        return {
            name: years[index],
            data: [{
                y: temp
            }]
        }
    })

    return (
        <div className='plot'>
            <Plot data={data3d} layout={layout3d} />
            <Plot data={data2d} layout={layout2d} frames={frames_mean} onSliderChange={handleSliderChange} />
        </div>
    );
}


export default Slicing