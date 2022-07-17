let lineXvalues = [];
let lineYvalues = [];
let lineY2values = [];
let lineY3values = [];
generateData("(Math.sin(2*x))", 0.5, 4, 0.5);

new Chart("myChart", {
  type: "line",
  data: {
    labels: lineXvalues,
    datasets: [{
    label: ' Clicks',
    fill: false,
    pointRadius: 4,
    pointBackgroundColor:"#fbcf71",
    borderColor: "#fbcf71",
    backgroundColor: "#fbcf71",
    data: lineY2values
    },{
    label: ' Page View',
    fill: false,
    pointRadius: 4,
    pointBackgroundColor:"#1f7bb6",
    borderColor: "#1f7bb6",
    backgroundColor: "#1f7bb6",
    data: lineY3values
    },{
    label: ' Sign ups',
    fill: false,
    pointRadius: 4,
    pointBackgroundColor:"#00acac",
    borderColor: "#00acac",
    backgroundColor: "#00acac",
    data: lineYvalues
    }]
  },    
  options: {
    legend: {
    display: true,
    position: 'bottom',
    fontSize: 21,
    labels:{
        boxWidth: 10,
        cursor: "pointer",
    }
    },
  }
});
function generateData(value, i1, i2, step) {
  for (let x = i1; x <= i2; x += step) {
    lineYvalues.push(eval(value));
   lineXvalues.push(x);
    lineY2values.push(eval((Math.sin(2 * x - 1.2)+0.05)));
    lineY3values.push(eval((Math.sin(2 * x - 2.4)+0.05)));
  }
}

//-------------------------------------------------------------------

var xValues = ["Total Clicks      65","Signups           22","Total Views    200"];
var yValues = [20,10,30];
var barColors = [
  "#1f7bb6",
  "#00acac",
  "#fbcf71",
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    
    datasets: [{
      backgroundColor: barColors,
      
      data: yValues
    }]
  },
  options: {
  legend:{
  rtl: false,
  position:"bottom",
  },
    title: {
      display: true,
      text: "CTR                          25%",
      position: "bottom",
      fontColor: "#ffffffbc",
    },
  },
});