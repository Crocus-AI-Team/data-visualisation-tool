import React from 'react';
import { Treemap, Tooltip } from 'recharts';

const TreemapComponent = ({ data }) => {
  return (
    <Treemap
      width={800}
      height={400}
      data={data}
      dataKey="value"
      ratio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
    >
      <Tooltip />
    </Treemap>
  );
};

export default TreemapComponent;
