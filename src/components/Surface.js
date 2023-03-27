import Plot from 'react-plotly.js';
// import Papa from 'papaparse';
import mean_temp from '../data/mean_temp.json'
import min_temp from '../data/min_temp.json'
import max_temp from '../data/max_temp.json'
import years from '../data/years.json'

function Surface() {

    // const [mean_z, setMeanData] = useState(null);

    // fetch(mean_data)
    // .then(data => data.text())
    // .then(data =>{
    //     Papa.parse(data, {
    //         header: true,
    //         complete: (data) => {
    //             var z_data = []
    //             data.data.map((row) => {
    //                 var r = []
    //                 for (const [k, v] of Object.entries(row)){
    //                     r.push(v)
    //                 }
    //                 z_data.push(r)
    //             } )
    //             setMeanData(z_data)
    //         }
    //     })
    // });

    const data = [
        {
            y: years,
            z: mean_temp,
            type: 'surface',
            showscale: false,
        },
        {
            y: years,
            z: min_temp,
            type: 'surface',
            showscale: false,
        },
        {
            y: years,
            z: max_temp,
            type: 'surface',
            showscale: false,
        }

    ]
    
    const layout = {
        updatemenus : [{
            buttons: [{
                method : 'restyle',
                args: ['visible', [true, false, false]],
                label: 'Mean temp'
            },
            {
                method : 'restyle',
                args: ['visible', [false, true, false]],
                label: 'Min temp'
            },
            {
                method : 'restyle',
                args: ['visible', [false, false, true]],
                label: 'Max temp'
            }]
        }],
        width: 800,
        height: 600
    }

    return (
        <div className='plot'>
            <Plot data={data} layout={layout} />
        </div>
    );
}


export default Surface