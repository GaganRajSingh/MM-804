import { useState } from "react";
import Plot from "react-plotly.js";
import dates from '../data/aqi_dates.json'
import values from '../data/aqi_values.json'

function Aqi () {

    const filter = Array.from({ length: 101 }, (_, i) => i / 10)
    const [threshold, setThreshold] = useState(0)
    const [visibleData, setVisible] = useState(values.map((value) => {
        return 1
    }))


    const handleSliderChange = (e) => {
        setThreshold(parseFloat(e.step.label))
        setVisible(
            values.map((value) => {
                return value >= parseFloat(e.step.label) ? 1 : 0.3
            })
        )
    }

    var data = [
        {
            name: "AQI",
            x: dates,
            y: values,
            type: 'scatter',
            mode: 'markers',
            marker: {
                opacity: visibleData
            }
        },
        {
            name: "Threshold",
            x: [dates[0], dates[dates.length-1]],
            y: [threshold, threshold],
            type: 'line',
            line: {
                dash: 'dash'
            }
        }
    ]

    var layout = {
        width: 800,
        height: 600,
        yaxis: {
            range: [0, 10],
        },
        sliders: [
            {
                steps: filter.map((f) => {
                    return {
                        label: f,
                        value: f,
                        method: 'skip'
                    }
                })
            }
        ],
    }

    return (
        <div>
            <Plot data={data} layout={layout} onSliderChange={handleSliderChange}/>
        </div>
    )
}

export default Aqi