var speedCanvas = document.getElementById("btcChart");
var time = [];
var inicio = 0 ;
function createChart(){

time.push(inicio+"s");
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels:time,
  datasets: [{
    label: ("Precio BTC : $"+ precioBTC) ,
    data: historico_precio,
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
inicio = inicio + 30;
if(time.length == 120){
    time.shift();

}
if(historico_precio.length == 120){
    historico_precio.shift();
}
}

createChart();
setInterval('createChart()',30000);