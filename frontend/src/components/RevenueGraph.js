import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Day 1', revenue: 400 },
  { name: 'Day 2', revenue: 300 },
  { name: 'Day 3', revenue: 200 },
  { name: 'Day 4', revenue: 278 },
  { name: 'Day 5', revenue: 189 },
];

const RevenueGraph = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export default RevenueGraph;
