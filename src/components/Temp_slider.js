import Plot from 'react-plotly.js';
import mean_temp from '../data/mean_temp.json'
import min_temp from '../data/min_temp.json'
import max_temp from '../data/max_temp.json'
import years from '../data/years.json'

function Temp_slider () {

    const data = [
        {
            y: mean_temp[1],
            line: {
                simplify: false,
            }
        }
    ]

    const layout = {
        width: 800,
        height: 600,
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
            
        }],
        updatemenus: [{
            type: 'buttons',
            showactive: false,
            buttons: [{
                label: 'Play',
                method: 'animate',
                args: [null, {
                    fromcurrent: true,
                    frame: {redraw: false, duration: 1000},
                    transition: {duration: 500}
                }]
            },
            {
                label: 'Pause',
                method: 'animate',
                args: [[null], {
                    mode: 'immediate',
                    frame: {redraw: false, duration: 0}
                }]
            }]
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
    const frames_min = min_temp.map((temp, index) => {
        return {
            name: years[index],
            data: [{
                y: temp
            }]
        }
    })
    const frames_max = max_temp.map((temp, index) => {
        return {
            name: years[index],
            data: [{
                y: temp
            }]
        }
    })
    
    
    return (
        <div>
            <Plot data = {data} layout = {layout} frames={frames_mean} />
        </div>
    )
}

export default Temp_slider