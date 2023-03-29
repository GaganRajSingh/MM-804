import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import groupBy from 'lodash/groupBy';

import precipitationData from '../data/climate-daily.csv';

function Precipitation() {
  const [data, setData] = useState([]);

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
  .sort((a, b) => new Date(a) - new Date(b));


  const rain = dates.map((date) => {
    const counts = groupByTimestamp[date];
    return counts.reduce((total, count) => total + parseFloat(count.TOTAL_RAIN), 0);
  });

  const snow = dates.map((date) => {
    const counts = groupByTimestamp[date];
    return counts.reduce((total, count) => total + parseFloat(count.TOTAL_SNOW), 0);
  });

  console.log(snow);
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
          title: 'Precipitation by Snow and Rain Stacked Bar Chart',
          xaxis: { title: 'Date' },
          yaxis: { title: '' },
          width: 800,
          height: 600,
          autosize: true,
          barmode: "stack"
        }}
      />
    </div>
  );
}

export default Precipitation;
