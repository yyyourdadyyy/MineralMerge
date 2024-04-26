const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Fe', 'S', 'Other'],
        datasets: [{
          label: '',
          data: [51, 34, 15],
          backgroundColor: [
            '#F7BA4E',
            '#D9D9D9',
            '#12191F',
          ],
          border: 1,
          borderRadius : 3,
        }]
      },
      options: {
        cutout: 60,
        responsive: true,
      }
    });

    const ctx2 = document.getElementById('linechart');
    const linechart = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
          datasets: [{
            backgroundColor: [
                '#F7BA4E',
              ],
              borderColor: [
                '#F7BA4E',
              ],
              label: '',
            data: [90214, 134320, 180432, 214124, 234567, 504092],
            borderWidth: 1,
            pointStyle: false,
            tension: 0.4,
            fill:true
          }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
          scales: {
            y: {
              beginAtZero: true,
              ticks:{
                display: false,
                color:'#F2FDFD',
              },
            },
            x: {
              ticks:{
                display: true,
                color:'#F2FDFD',
              },
              grid:{
                display: false,
              }
            },
          }
        }
      });
      const ctx3 = document.getElementById('barchart');
      const barchart = new Chart(ctx3, {
          type: 'bar',
          data: {
            labels: ['Ore saturation'],
            datasets: 
            [{
              label: 'RICH',
              data: [56],
              backgroundColor: ['#ED9F78'],
              borderRadius:50,
          }, {
              label: 'MID',
              data: [28],
              backgroundColor: ['#F7BA4E'],
              borderWidth: 1,
              borderRadius:50,
          }, {
              label: 'POOR',
              data: [16],
              backgroundColor: ['#45FAE7'],
              borderWidth: 1,
              borderRadius:50,
          }]
          },
          options: {
            indexAxis: 'y',
            barPercentage: 0.9,
            plugins: {
              legend:{
                position: 'left',
                align: 'start',
                labels:{
                  color:'#F2FDFD',
                  
                  boxWidth: 20, // ширина прямоугольника легенды
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
                  display: true,
                  color:'#F2FDFD',
                },
                grid:{
                  display: false,
                }
              }
            }
          }
        });

        const ctx4 = document.getElementById('bar-legend');
        const barLegend = new Chart(ctx4, {
            type: 'bar',
            data: {
              labels: ['RICH', 'MEDIUM', 'POOR'],
              datasets: [{
                label: 'RICH',
                data: [0],
                backgroundColor: ['#ED9F78'],
            }, {
                label: 'MEDIUM',
                data: [0],
                backgroundColor: ['#F7BA4E'],
                borderWidth: 1
            }, {
                label: 'POOR',
                data: [0],
                backgroundColor: ['#45FAE7'],
                borderWidth: 1
            }]
            },
            options: {
              legend: {
                position: 'left',
                  display: true,
                  labels: {
                   // размер шрифта легенды
                  },
                  reverse: true, // реверс порядка маркеров
              },
              plugins:{
                legend:{
                  position: 'left',
                  labels:{
                    boxWidth: 15, // ширина прямоугольника легенды
                    boxHeight: 15,
                    useBorderRadius: true,
                    borderRadius: 5,
                  },
                }
              },
              scales: {
                y: {
                  display: false
              },
              x: {
                  display: false
              }
            }
          }
          });