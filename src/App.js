import React from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import RadarChart from "./components/RadarChart";
import DoughnutChart from "./components/DoughnutChart";
import ContributionCalendar from "./components/HeatMap";
import { articlesData, contributionValues } from "./Data";
import "./App.css";

function App() {
  const barChartData = {
    labels: articlesData.map((data) => data.year),
    datasets: [
      {
        label: "Articles Published",
        data: articlesData.map((data) => data.articlesPublished),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineChartData = {
    labels: articlesData.map((data) => data.year),
    datasets: [
      {
        label: "Comments Received",
        data: articlesData.map((data) => data.commentsReceived),
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const pieChartData = {
    labels: articlesData.map((data) => data.year),
    datasets: [
      {
        label: "Articles Published",
        data: articlesData.map((data) => data.articlesPublished),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(46, 204, 113, 0.6)",
          "rgba(231, 76, 60, 0.6)",
          "rgba(241, 196, 15, 0.6)",
          "rgba(52, 152, 219, 0.6)",
        ],
      },
    ],
  };

  const radarChartData = {
    labels: articlesData.map((data) => data.year),
    datasets: [
      {
        label: "Articles Published",
        data: articlesData.map((data) => data.articlesPublished),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
      },
      {
        label: "Comments Received",
        data: articlesData.map((data) => data.commentsReceived),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
      },
    ],
  };

  const doughnutChartData = {
    labels: articlesData.map((data) => data.year),
    datasets: [
      {
        label: "Articles Published",
        data: articlesData.map((data) => data.articlesPublished),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(46, 204, 113, 0.6)",
          "rgba(231, 76, 60, 0.6)",
          "rgba(241, 196, 15, 0.6)",
          "rgba(52, 152, 219, 0.6)",
        ],
      },
    ],
  };

  const chartStyle = {
    paddingBottom: "20px",
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontFamily: "Montserrat" }}>
        Big Data Analytics
      </h1>
      <div className="container">
        <div className="row">
          <div className="chart-container" style={chartStyle}>
            <h2 style={{ textAlign: "center" }}>
              Bar Chart - Number of Articles Published Every Year
            </h2>
            <BarChart chartData={barChartData} />
          </div>
          <div className="chart-container" style={chartStyle}>
            <h2 style={{ textAlign: "center" }}>
              Line Chart - Comments Received on the Articles
            </h2>
            <LineChart chartData={lineChartData} />
          </div>
        </div>
        <div className="row">
          <div className="chart-container" style={chartStyle}>
            <h2 style={{ textAlign: "center" }}>
              Pie Chart -Number of Articles Published by Year
            </h2>
            <PieChart chartData={pieChartData} />
          </div>
          <div className="chart-container" style={chartStyle}>
            <h2 style={{ textAlign: "center" }}>
              Radar Chart - Articles & Comments Received
            </h2>
            <RadarChart chartData={radarChartData} />
          </div>
        </div>
        <div className="row">
          <div className="chart-container" style={chartStyle}>
            <h2 style={{ textAlign: "center" }}>
              Doughnut Chart - Articles Published by Year
            </h2>
            <DoughnutChart
              chartData={doughnutChartData}
              style={{ height: "400px", width: "400px" }}
            />
          </div>
          <div
            className="chart-container"
            style={{ height: "700px", width: "700px" }}
          >
            <h2 style={{ textAlign: "center" }}>
              HeatMap - To show Contibutions
            </h2>
            <ContributionCalendar
              values={contributionValues}
              until="2024-07-07"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
