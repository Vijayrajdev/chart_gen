import React from "react";
import { Adata } from "../Data/Data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartContext } from "../App";

const Areachart = () => {
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
          <AreaChart
            width={500}
            height={400}
            data={Adata}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Areachart;
