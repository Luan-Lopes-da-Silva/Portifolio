import Chart, { plugins } from 'chart.js/auto';

export default function(){
  const ctx = document.querySelector('#myChart')
  new Chart(ctx,{
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: '# Balance in end of month',
        data: [800,1100,1500,-800,900,5000],
        backgroundColor:["#FFFFFF","#9400D3","#E1D6F6","#4169E1","#FFFF00","#FF0000","#F0BE00"]
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
    }
  })
}