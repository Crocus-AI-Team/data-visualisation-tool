import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { generateColors } from './generateColors'; // Import the color generation function

const PieChartComponent = ({ data }) => {
  const filteredData = data.filter(entry => entry.value > 0); // Filter out entries with value 0
  const COLORS = generateColors(filteredData.length); // Generate colors based on filtered data length

  return (
    <PieChart width={800} height={400}>
      <Pie
        data={filteredData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label={({ name, value }) => `${name} (${value})`}
      >
        {filteredData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
