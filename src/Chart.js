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
        
      }}
      width={100}
      height={300}
      options={{ 
        
        maintainAspectRatio: false, 
      responsive: true, 
      title: {text: "Covid-19",
              display: true, 
              fontSize:20, 
              fontColor: "gray"
              }  }}
    />
  ) : null;

  return (
    <div >
      <h2 className="charth2">Daily Data</h2>
      <div className="chart">{lineChart}</div>
    </div>
  );
};

export default Charts;
