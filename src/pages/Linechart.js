import React from "react";
import { LData } from "../Data/Data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContext } from "../App";

const Linechart = () => {
  const [chartInfo] = React.useContext(ChartContext);
  return (
    <div className="flex flex-col items-center justify-center h-full w-full my-16 md:my-12 gap-6">
      <div>
        <h1 className="text-xl md:text-3xl font-cinzel text-gradient">
          Hi {chartInfo.userName} !
        </h1>
      </div>
      <div className="h-[230px] w-[350px] md:h-[300px] md:w-[600px] lg:h-[500px] lg:w-[1000px] text-xs md:text-md">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={LData}
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
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Linechart;
