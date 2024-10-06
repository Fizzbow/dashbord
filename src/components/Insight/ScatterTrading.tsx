import {
  CartesianAxis,
  CartesianGrid,
  Dot,
  DotProps,
  Label,
  Legend,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import InsightCardContain from "./InsightCardContain";
import { CardHeader } from "../ui/card";
import { FC } from "react";

const appleData = [
  { x: 100, y: 200, z: 200, r: 8 },
  { x: 120, y: 100, z: 260, r: 8 },
  { x: 170, y: 300, z: 400, r: 10 },
  { x: 150, y: 400, z: 500, r: 10 },
];

const nvdaData = [
  { x: 46, y: 200, z: 200, r: 8 },
  { x: 50, y: 100, z: 260, r: 10 },
  { x: 60, y: 300, z: 400, r: 10 },
  { x: 140, y: 250, z: 280, r: 10 },
  { x: 110, y: 280, z: 200, r: 8 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
    outerHeight: 400,
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
    outerHeight: 400,
  },
};

const ScatterTrading = () => {
  return (
    <InsightCardContain className="col-start-5 col-end-7">
      <CardHeader>Analytics</CardHeader>
      <ChartContainer className="flex-1 w-full" config={chartConfig}>
        <ScatterChart
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
          accessibilityLayer
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Legend
            formatter={(value) => {
              return (
                <span className="text-white text-[16px] ml-3">{value}</span>
              );
            }}
            verticalAlign="top"
            iconSize={5}
            align="right"
            height={36}
          />
          <XAxis fill="#8E8D8E" tickLine={false} type="number" dataKey="x" />
          <YAxis tickLine={false} axisLine={false} type="number" dataKey="y" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Scatter
            name="NVDA"
            data={appleData}
            fill="#fde246"
            shape={<RenderDot />}
          />
          <Scatter name="AAPL" data={nvdaData} fill="#9780ff" />
        </ScatterChart>
      </ChartContainer>
    </InsightCardContain>
  );
};

const RenderDot: FC<DotProps> = (props) => {
  return <Dot {...props} />;
};

export default ScatterTrading;
