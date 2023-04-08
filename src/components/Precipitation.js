import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import groupBy from 'lodash/groupBy';

import precipitationData from '../data/climate-daily.csv';

function Precipitation() {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const fetchParseData = async () => {
      Papa.parse(precipitationData, {
        download: true,
        header: true,
        delimiter: ",",
        complete: ((result) => {
          setData(result.data);
        })
      })
    }
    fetchParseData();
  }, []);

  const groupByTimestamp = groupBy(data, 'LOCAL_DATE');
  const dates = Object.keys(groupByTimestamp)
    .filter(date => {
      const counts = groupByTimestamp[date];
      return counts.some(count => parseFloat(count.TOTAL_RAIN) >= 0 || parseFloat(count.TOTAL_SNOW) >= 0);
    })
    .filter((date) => !selectedYear || new Date(date).getFullYear() === selectedYear)
    .sort((a, b) => new Date(a) - new Date(b));

  const rain = dates.map((date) => {
    const counts = groupByTimestamp[date];
    return counts.reduce((total, count) => total + parseFloat(count.TOTAL_RAIN), 0);
  });

  const snow = dates.map((date) => {
    const counts = groupByTimestamp[date];
    return counts.reduce((total, count) => total + parseFloat(count.TOTAL_SNOW), 0)*10;
  });

  const years = Array.from(new Set(data.map((row) => new Date(row.LOCAL_DATE).getFullYear())))
  .filter(year => !isNaN(parseInt(year)));

  const traces = [
    {
      x: dates,
      y: rain,
      type: 'bar',
      name: 'Rain',
      barmode: 'stack',
      marker: { color: '#448' }
    },
    {
      x: dates,
      y: snow,
      type: 'bar',
      name: 'Snow',
      barmode: 'stack',
      marker: { color: '#88C' }
    },
  ];

  return (
    <div>      
      <Plot
        data={traces}
        layout={{
          title: selectedYear ? `Precipitation Distribution for Year ${selectedYear}` : 'Precipitation Distribution',
          xaxis: { title: 'Date' },
          yaxis: { title: 'Precipitation (mm)' },
          width: 800,
          height: 600,
          autosize: true,
          barmode: 'stack',
        }}
      />
      <div style={{ marginTop: '20px', marginBottom: '80px' }}>
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

export default Precipitation;
