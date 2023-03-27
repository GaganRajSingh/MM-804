import Plot from "react-plotly.js";

function Snow() {

    var data = [{
        type: 'scattermapbox',
        marker: {color: 'fuchsia', size: 4}
    }];

    var layout = {
        width: 800,
        height: 600,
        dragmode: 'zoom',
        mapbox: {
            // style: 'white-bg',
            style: 'open-street-map',
            layers: [
                {
                    "below": 'traces',
                    "sourcetype": "raster",
                    "source": [
                        "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"
                    ]
                },
                {
                    sourcetype: "raster",
                    source: ["https://geo.weather.gc.ca/geomet/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX={bbox-epsg-3857}&CRS=EPSG:3857&WIDTH=1000&HEIGHT=1000&LAYERS=RADAR_1KM_RDBR&TILED=true&FORMAT=image/png"]
                }],
        below: 'traces',
        center: {lat: 38, lon: -90}, zoom: 4},
        margin: {r: 0, t: 0, b: 0, l: 0},
        showlegend: false
    
    };
    

    return (
        <div>
            <Plot data={data} layout={layout} />
        </div>
    )
}

export default Snow