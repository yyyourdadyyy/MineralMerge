import React from 'react';
import { Chart as ChartJS, Filler, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement } from "chart.js";
import {Doughnut, Line, Bar} from 'react-chartjs-2';



ChartJS.register(
    ArcElement, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Filler
)

const DoughnutChartComponent = ({post}) => {



  console.log(post);

  const Ferum = isNaN(parseInt(post.title)) ? 0 : parseInt(post.title);
  const Sulfur = isNaN(parseInt(post.text)) ? 0 : parseInt(post.text);
  console.log('post.title:', post.title);
  console.log('post.text:', post.text);
  console.log('Переменные', Ferum, Sulfur);
  const Other = 100 - (Ferum + Sulfur);
  console.log('Other', Other);
      const data = {
          // labels: ['Fe, S, Other'],
          datasets: [{
            // label: ['Fe, S, Other'],
            data: [Ferum, Sulfur, Other],
            backgroundColor: [
              '#F7BA4E',
              '#D9D9D9',
              '#12191F',
            ],
            border: false,
            borderRadius : 3,
          },]
        };

      const options = {
          cutout: 60,
          responsive: true,
        };
      return <Doughnut data={data} options={options} />
  };

  const DoughnutChartMain = () => {

    const Ferum = 54;
    const Sulfur = 32;
    const Other = 100 - (Ferum + Sulfur);
        const data = {
            // labels: ['Fe, S, Other'],
            datasets: [{
              // label: ['Fe, S, Other'],
              data: [Ferum, Sulfur, Other],
              backgroundColor: [
                '#F7BA4E',
                '#D9D9D9',
                '#12191F',
              ],
              border: false,
              borderRadius : 3,
            },]
          };
        const options = {
            cutout: 60,
            responsive: true,
          };
        return <Doughnut data={data} options={options} />
    };


const LineChart = () => {
  const data = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        backgroundColor: '#F7BA4E',
        borderColor: '#F7BA4E',
        label: '',
        data: [90214, 134320, 180432, 214124, 234567, 504092],
        // borderWidth: 1,
        pointStyle: true,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
          color: '#F2FDFD',
        },
      },
      x: {
        ticks: {
          display: true,
          color: '#F2FDFD',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
      <Line data={data} options={options} />
  );
};

const BarChart = () => {
  const data = {
    labels: [''],
    datasets: [{
      label: 'RICH',
      data: [56],
      backgroundColor: ['#ED9F78'],
      borderRadius:8,
  }, {
      label: 'MID',
      data: [28],
      backgroundColor: ['#F7BA4E'],
      borderWidth: 1,
      borderRadius:8,
  }, {
      label: 'POOR',
      data: [16],
      backgroundColor: ['#45FAE7'],
      borderWidth: 1,
      borderRadius:8,
  }]
  };

  const options = {
    maintainAspectRatio: false,
    indexAxis: 'y',
            barPercentage: 0.9,
            plugins: {
              legend:{
                position: 'left',
                align: 'start',
                labels:{
                  color:'#F2FDFD',
                  boxWidth: 20,
                  boxHeight: 20,
                   useBorderRadius: true,
                   borderRadius: 5,
                  },
              },
              },
            scales: {
              y: {
                beginAtZero: true,
                ticks:{
                  display: false,
                },
                grid:{
                  display: false,
                }
              },
              x: {
                ticks:{
                  display: false,
                  color:'#F2FDFD',
                },
                grid:{
                  display: false,
                }
              }
            }
  };

  return (
      <div style={{height:'120px',width:'600px'}}>
        <Bar data={data} options={options} />
      </div>
  );
};

// export default LineChart;
// export default DoughnutChartComponent;
export {LineChart, DoughnutChartComponent, BarChart, DoughnutChartMain};

