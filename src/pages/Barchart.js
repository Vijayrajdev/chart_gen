import React from "react";
import { Bdata } from "../Data/Data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContext } from "../App";

const Barchart = () => {
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
          <BarChart
            width={500}
            height={300}
            data={Bdata}
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
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
