import React, { useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import { GlobalContext } from "./Context";

const Charts = () => {
  const { dailyData } = useContext(GlobalContext);

  const [chartData, setChartData] = useState([]);

  async function api() {
    const fetch = await dailyData;

    setChartData(fetch);
  }
  api();

  const lineChart = chartData[0] ? (
    <Line
      data={{
        labels: chartData.map((date) => date.reportDate),
        datasets: [
          {
            data: chartData.map((confirmed) => confirmed.confirmed.total),
            label: "confirmed",
            borderColor: "blue",
            fill: true,
          },
          {
            data: chartData.map((deaths) => deaths.deaths.total),
            label: "deaths",
            borderColor: "red",
            fill: true,
          },
        ],
        options: {},
      }}
    />
  ) : null;

  return (
    <div className="charth2">
      <h2>Daily Data</h2>
      <div className="chart">{lineChart}</div>
    </div>
  );
};

export default Charts;
