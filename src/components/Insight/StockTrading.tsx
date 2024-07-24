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
  },
  {
    name: "Page B",
    NVDA: 3000,
    AAPL: 2210,
  },
  {
    name: "Page C",
    NVDA: 2000,
    AAPL: 2290,
  },
  {
    name: "Page D",
    NVDA: 2780,
    AAPL: 2000,
  },
  {
    name: "Page E",
    NVDA: 1890,
    AAPL: 2181,
  },
  {
    name: "Page F",
    NVDA: 2390,
    AAPL: 2500,
  },
  {
    name: "Page G",
    NVDA: 3490,
    AAPL: 2100,
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
            <defs>
              <pattern
                id="colorNVDA"
                patternUnits="userSpaceOnUse"
                width="5"
                height="5"
              >
                <circle cx="1" cy="1" r="0.5" fill="#9780ff" />
                <circle cx="1" cy="1" r="0.5" fill="rgba(0, 0, 0, 0)" />
              </pattern>
            </defs>
          </defs>
          <CartesianGrid stroke="#383838" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line
            type="natural"
            dataKey="AAPL"
            stroke="#fde246"
            dot={false}
            strokeWidth={2}
            activeDot={{
              r: 7,
              strokeOpacity: 0.5,
              stroke: "#fde246",
              strokeWidth: 7,
            }}
          />
          <Area
            fill="url(#colorNVDA)"
            type="natural"
            dataKey="NVDA"
            stroke="#9780ff"
            strokeWidth={2}
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
