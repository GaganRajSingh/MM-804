import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

import humidityData from '../data/ACISDailyData-Humidity.csv';

function Humidity() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(humidityData, {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  const humidityMin = data.map((row) => parseFloat(row.Humidity_Min));
  const humidityMax = data.map((row) => parseFloat(row.Humidity_Max));
  const relativeHumidityAvg = data.map((row) => parseFloat(row.Relative_Humidity_Avg));

  const trace1 = {
    y: humidityMin,
    name: 'Humidity Min',
    type: 'violin',
    side: 'both',
    box: { visible: true },
    line: { color: '#1f77b4' },
  };

  const trace2 = {
    y: humidityMax,
    name: 'Humidity Max',
    type: 'violin',
    side: 'both',
    box: { visible: true },
    line: { color: '#d62728' },
  };

  const trace3 = {
    y: relativeHumidityAvg,
    name: 'Relative Humidity Avg',
    type: 'violin',
    side: 'both',
    box: { visible: true },
    line: { color: '#2ca02c' },
  };

  return (
    <Plot
      data={[trace1, trace2, trace3]}
      layout={{
        width: 800,
        height: 500,
        title: 'Humidity Distribution',
        yaxis: {
          title: 'Humidity (%)',
        },
      }}
    />
  );
}

export default Humidity;

