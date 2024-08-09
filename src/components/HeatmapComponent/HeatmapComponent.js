import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ZAxis } from 'recharts';

const HeatmapComponent = ({ data }) => {
  return (
    <ScatterChart width={800} height={400}>
      <CartesianGrid />
      <XAxis type="category" dataKey="x" name="Class" />
      <YAxis type="number" dataKey="y" name="Value" />
      <ZAxis type="number" dataKey="value" range={[100, 400]} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="Match Values" data={data} fill="#8884d8" />
    </ScatterChart>
  );
};

export default HeatmapComponent;
