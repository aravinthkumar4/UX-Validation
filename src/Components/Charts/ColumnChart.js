import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      type: "string",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    },
    legend: {
      position: "right",
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  };

  const series = [
    {
      name: "Day",
      data: [44, 55, 41, 67, 22, 43]
    },
    {
      name: "Week",
      data: [13, 23, 20, 8, 13, 27]
    },
    {
      name: "Month",
      data: [11, 17, 15, 15, 21, 14]
    },
    {
      name: "Year",
      data: [21, 7, 25, 13, 22, 8]
    }
  ];

  return (
    <div className="chart-container">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;
