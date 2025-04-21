"use client";

import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChartData } from "@/types";

type Props = {
  data: ChartData;
};

export default function LineGraph({ data }: Props) {
  return (
    <div className="w-full h-full">
      <Line data={data} className="!w-full !h-full" />
    </div>
  );
}
