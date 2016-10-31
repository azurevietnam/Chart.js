//Chart Type Bar

var ChartBar = $('#ChartBar');
var DataBar = {
  //Create label columm
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //Insert Label, Data, Background
  datasets: [{
    label: "# Select Value",
    data: [19, 12, 13, 15, 12, 14],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};
var ChartBar = new Chart(ChartBar, {
  //Select type chart
  type: 'bar',
  data: DataBar,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

});
