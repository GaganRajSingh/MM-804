import Plot from "react-plotly.js";
import snow_cities from '../data/snow_cities.json'
import snow_years from '../data/snow_years.json'
import snow_locs from '../data/snow_locs.json'


function Snow() {

    var frames = snow_cities.map((snow_data, index) => {
        return {
            name: snow_years[index],
            data: [{
                type: 'densitymapbox',
                lat: snow_locs[0],
                lon: snow_locs[1],
                z: snow_data,
                radius: 70,
                colorscale: [
                    [0, 'white'],
                    [0.3, 'white'],
                    [1, 'blue']
                ],
                zmin: -100,
                zmax: 250,
                showscale: false
            }]
        }
    });

    var data = frames[1]['data'];

    var layout = {
        width: 800,
        height: 600,
        sliders : [{
            // len: 0.95,
            transition: {duration: 100},
            steps: snow_years.map((year) => {
                return {
                    label: year,
                    method: 'animate',
                    args: [[year], {
                        mode: 'immediate',
                        frame: {redraw: true, duration: 300},
                        transition: {duration: 100}
                    }]
                }
            })
            
        }],
        dragmode: 'zoom',
        mapbox: {
            style: 'dark',
            layers: [
                // {
                //     "below": 'traces',
                //     "sourcetype": "raster",
                //     "source": [
                //         "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"
                //     ]
                // }
            ],
            below: 'traces',
            center: {lat: 49, lon: -95}, zoom: 2.7
        },
        margin: {r: 0, t: 0, b: 0, l: 0},
        showlegend: false
    };
    
    const config = {
        mapboxAccessToken: "pk.eyJ1IjoiZ2FnYW5yYWpzaW5naCIsImEiOiJjbGZyYWh2dnkwM3Z1M3dxdGRlazN2OXVlIn0.PxePnabnyl4tpa6olc2LLQ"
    };
      

    return (
        <div>
            <Plot data={data} layout={layout} frames={frames} config={config}/>
        </div>
    )
}

export default Snow