//configuracao do grafico 2
var config_line3 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Temperatura',
      data: [],
      borderWidth: 6,
      borderColor: 'rgba(255,0,0,0.85)',
      backgroundColor: 'transparent',
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Field 3'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        type: 'time',
        ticks: {
          minRotation: 90,
          source: 'data'  
        },
        distribution: 'series',
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Data'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Temperatura'
        }
      }]
    }
  }
};

/*cria o grafico myline2 com os ultimos valores enviados#
* para o thingspeak
*/
function createMyLine3() {
  var ctx = document.getElementById('canvas23').getContext('2d');
  window.myLine3 = new Chart(ctx, config_line3);
  getLastThingSpeakData3();
};

/*
* requisita os ultimos dados enviados para o thingspeak
* e atualiza os valores no grafico
*/
function getLastThingSpeakData3(){
  console.log("aaaaaaaaaaaaaaaaaaa")
  var channel_id = 196384; //id do canal
  var field_number1 = 1; //numero do field
  var field_number2 = 2; //numero do field
  var field_number3 = 3 //3
  var field_number4 = 4 //4
  var num_results = 500; //numero de resultados requisitados


}
  