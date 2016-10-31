var Pie = $('#ChartPie');
var data = {
  labels: [
    "Red",
    "Blue",
    "Yellow"
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ],
    hoverBackgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ]
  }]
};
var myPie = new Chart(Pie, {
  type: 'pie',
  data: data
});
