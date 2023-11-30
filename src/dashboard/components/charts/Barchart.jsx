import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Post 1",
    Views: 4000,
    Comments: 2400,
  },
  {
    name: "Post 2",
    Views: 3000,
    Comments: 1398,
  },
  {
    name: "Post 3",
    Views: 2000,
    Comments: 9800,
  },
  {
    name: "Post 4",
    Views: 2780,
    Comments: 3908,
  },
];

export default class BarChartComponent extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Views"
            fill="#0088FE"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="Comments"
            fill="#8884d8"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
