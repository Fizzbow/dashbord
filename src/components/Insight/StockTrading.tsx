import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Card, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import InsightCardContain from "./InsightCardContain";

const data = [
  {
    name: "Page A",
    NVDA: 4000,
    AAPL: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    NVDA: 3000,
    AAPL: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    NVDA: 2000,
    AAPL: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    NVDA: 2780,
    AAPL: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    NVDA: 1890,
    AAPL: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    NVDA: 2390,
    AAPL: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    NVDA: 3490,
    AAPL: 4300,
    amt: 2100,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};

const StockTrading = () => {
  return (
    <InsightCardContain className="col-start-1 col-end-5">
      <CardHeader>AI Insight</CardHeader>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ComposedChart
          accessibilityLayer
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9780ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9780ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line
            type="natural"
            dataKey="AAPL"
            stroke="#fde246"
            dot={false}
            activeDot={{
              r: 7,
              strokeOpacity: 0.5,
              stroke: "#fde246",
              strokeWidth: 7,
            }}
          />
          {/* <Line
            dot={false}
            activeDot={{
              r: 7,
              strokeOpacity: 0.5,
              stroke: "#fde246",
              strokeWidth: 7,
            }}
            type="natural"
            dataKey="uv"
            stroke="#fde246"
          /> */}
          <Area
            fill="url(#colorUv)"
            type="natural"
            dataKey="NVDA"
            stroke="#9780ff"
            activeDot={{
              r: 7,
              stroke: "#9780ff",
              strokeOpacity: 0.5,
              strokeWidth: 7,
            }}
          />
        </ComposedChart>
      </ChartContainer>
    </InsightCardContain>
  );
};

export default StockTrading;
