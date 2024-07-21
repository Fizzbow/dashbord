import {
  CartesianGrid,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import InsightCardContain from "./InsightCardContain";

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
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
      <ChartContainer config={chartConfig}>
        <ScatterChart accessibilityLayer>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ChartContainer>
    </InsightCardContain>
  );
};

export default ScatterTrading;
