import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Area,
  ComposedChart,
} from "recharts";
import MotionNumber from "motion-number";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { CardHeader, CardTitle } from "../ui/card";
import InsightCardContain from "./InsightCardContain";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { useState } from "react";
import { motion } from "framer-motion";

interface SelectProp {
  val: number;
  per: number;
  bullish: number;
}

const selectData: Record<string, SelectProp> = {
  apple: {
    val: 5678,
    per: 1.8,
    bullish: 0.2,
  },
  banana: {
    val: 788,
    per: 2.8,
    bullish: -0.06,
  },
  grapes: {
    val: 1234,
    per: 5.2,
    bullish: -0.5,
  },
  pineapple: {
    val: 5555,
    per: 4.2,
    bullish: 0.04,
  },
};

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
  const [selectKey, setSelectKey] = useState(() => {
    const defaultKey = Object.keys(selectData)[0];
    return defaultKey;
  });
  return (
    <InsightCardContain className="col-start-1 col-end-5">
      <CardHeader className="justify-between items-center">
        <span>AI Insight</span>
        <Select
          onValueChange={(key) => {
            if (key) {
              setSelectKey(key);
            }
          }}
        >
          <SelectTrigger>
            <SelectValue
              defaultValue={selectKey}
              placeholder="Select a fruit"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.keys(selectData).map((key) => (
                <SelectItem value={key} key={key}>
                  {key}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardTitle className="px-6 flex flex-row gap-2 pb-6">
        {/* {JSON.stringify(selectData[selectKey].val)} */}
        <MotionNumber
          value={selectData[selectKey].val}
          format={{ style: "currency", currency: "USD" }}
          style={{ lineHeight: 0.85 }}
          className="~text-xl/4xl font-semibold [--mask-height:0.25em]"
          after={() => (
            <MotionNumber
              className="~text-base/2xl items-center px-[0.3em] font-semibold [--mask-height:0.3em]"
              value={selectData[selectKey].bullish}
              format={{ style: "percent" }}
              style={{ borderRadius: 999, lineHeight: 0.85 }}
              first={() => (
                <motion.svg
                  className="mr-0.5 size-[0.75em] self-center"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                  stroke="currentColor"
                  transition={{
                    rotate: { type: "spring", duration: 0.5, bounce: 0 },
                  }}
                  animate={{
                    rotate: selectData[selectKey].bullish > 0 ? 0 : -180,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </motion.svg>
              )}
              animate={{
                backgroundColor:
                  selectData[selectKey].bullish > 0 ? "#34d399" : "#ef4444",
              }}
            />
          )}
        />
      </CardTitle>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ComposedChart
          accessibilityLayer
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
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
          <XAxis tickLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} />
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
