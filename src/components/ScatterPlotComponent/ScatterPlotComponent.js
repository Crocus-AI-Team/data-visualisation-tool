import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ScatterPlotComponent = ({ data }) => {
  return (
    <ScatterChart width={800} height={400}>
      <CartesianGrid />
      <XAxis type="category" dataKey="x" name="Class" />
      <YAxis type="number" dataKey="y" name="Value" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="Match Values" data={data} fill="#8884d8" />
    </ScatterChart>
  );
};

export default ScatterPlotComponent;
