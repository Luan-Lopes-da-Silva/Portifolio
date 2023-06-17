export default function(){
  const ctx = document.querySelector('#myChart')
  const ctx2 = document.querySelector('#myChart2')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mês de compra','Fevereiro', 'Março', 'Maio', 'Abril','Junho','Julho'],
      datasets: [{
        label: '# Evolução do fundo em R$',
        data: [114.00,111.00,113.00,114.00,116.00,120.00,124.00],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Mês de compra','Fevereiro', 'Março', 'Maio', 'Abril','Junho','Julho'],
      datasets: [{
        label: '# Evolução do fundo em R$',
        data: [120.00, 117.00, 116.00, 119.00, 121.00, 124.00, 129.00],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}