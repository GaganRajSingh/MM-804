import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

import humidityData from '../data/ACISDailyData-Humidity.csv';

function Humidity() {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    Papa.parse(humidityData, {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  const humidityMin = data.filter((row) => !selectedYear || new Date(row.Date).getFullYear() === selectedYear)
    .map((row) => parseFloat(row.Humidity_Min));
  const humidityMax = data.filter((row) => !selectedYear || new Date(row.Date).getFullYear() === selectedYear)
    .map((row) => parseFloat(row.Humidity_Max));
  const relativeHumidityAvg = data.filter((row) => !selectedYear || new Date(row.Date).getFullYear() === selectedYear)
    .map((row) => parseFloat(row.Relative_Humidity_Avg));

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

  const years = Array.from(new Set(data.map((row) => new Date(row.Date).getFullYear())))
  .filter((year) => !isNaN(year) && year !== undefined);

  return (
    <div>
      <Plot
        data={[trace1, trace2, trace3]}
        layout={{
          width: 800,
          height: 500,
          title: selectedYear ? `Humidity Distribution for Year ${selectedYear}` : 'Humidity Distribution',
          yaxis: { title: 'Humidity (%)' },
        }}
      />
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="year-dropdown">Select Year: </label>
        <select id="year-dropdown" value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
          <option value={null}>All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Humidity;
