import { useEffect, useState } from "react";
import csvFile from './data.csv';
import Papa from 'papaparse';

function Test() {
    
    const [data, setData] = useState(null)

    fetch(csvFile)
    .then(r => r.text())
    .then(text => {
        Papa.parse(text, {
            header: true,
            complete: (results) => {
                setData(results.data);
            }
        })
    });

    return (
        <div className="test">
            <h1>API response</h1>
            {
                data ? data.map((item, key) => (
                    <div>
                        <p key={key}>{item.Name}{" "}{item.City}</p>
                    </div>
                    
                ))
                :
                (<p>Loading</p>)
            }
        </div>
    )
}

export default Test