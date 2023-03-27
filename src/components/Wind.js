import Plot from 'react-plotly.js';
import years from '../data/wind_years.json'
import wind from '../data/wind_dirs.json'

function Wind () {

    const data = [{
        r: wind[0],
        marker: {color: "rgb(106,81,163)"},
        type: "barpolar",
    }]

    const layout = {
        width: 800,
        height: 600,
        polar: {
            angularaxis: {direction: "clockwise"},
            barmode: "overlay"
        },
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
                    frame: {redraw: true, duration: 1000},
                    transition: {duration: 500}
                }]
            },
            {
                label: 'Pause',
                method: 'animate',
                args: [[null], {
                    mode: 'immediate',
                    frame: {redraw: true, duration: 0}
                }]
            }]
        }]
    }

    const frames = wind.map((dirs, index) => {
        return {
            name: years[index],
            data: [{
                r: dirs,
                marker: {color: "rgb(106,81,163)"},
                type: "barpolar"
            }]
        }
    })

    return (
        <div>
            <Plot layout = {layout} data = {data} frames={frames} />
        </div>
    )
}

export default Wind