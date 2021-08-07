//configuracao do grafico 2
var config_line2 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Temperatura - Field 1',
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
      text: 'Temperatura -Field 1'
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
          source: 'data',
          autoSkip: true,
          maxTicksLimit: 20  
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

var config_line22 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Temperatura - Field 2',
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
      text: 'Temperatura -Field 2'
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
          source: 'data',
          autoSkip: true,
          maxTicksLimit: 20  
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

var config_line3 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Temperatura - Field 2',
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
      text: 'Temperatura -Field 2'
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
          source: 'data',
          autoSkip: true,
          maxTicksLimit: 20 
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

var config_line4 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Temperatura - Field 2',
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
      text: 'Temperatura -Field 2'
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
          source: 'data',
          autoSkip: true,
          maxTicksLimit: 20    
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

var config_line5 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'MÉDIA Temperatura - Field 2',
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
      text: 'MÉDIA Temperatura -Field 2'
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
          source: 'data',
          autoSkip: true,
          maxTicksLimit: 20 
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

var config_line6 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Variação Temperatura - Field 2',
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
      text: 'Variação Temperatura - Field 2'
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
          source: 'data',
          autoSkip: true,
          maxTicksLimit: 20  
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
function createMyLine2() {
  var ctx = document.getElementById('canvas2').getContext('2d');
  window.myLine2 = new Chart(ctx, config_line2);
  getLastThingSpeakData();
};



function createMyLine21() {
  var ctx2 = document.getElementById('canvas21').getContext('2d');
  window.myLine3 = new Chart(ctx2, config_line22);
  getLastThingSpeakData2();
};

function createMyLine3() {
  var ctx3 = document.getElementById('canvas3').getContext('2d');
  window.myLine33 = new Chart(ctx3, config_line3);
  getLastThingSpeakData3();
};

function createMyLine4() {
  var ctx4 = document.getElementById('canvas4').getContext('2d');
  window.myLine4 = new Chart(ctx4, config_line4);
  getLastThingSpeakData4();
};

function createMyLine25() {
  var ctx5 = document.getElementById('canvas25').getContext('2d');
  window.myLine5 = new Chart(ctx5, config_line5);
  getLastThingSpeakData25();
};


function createMyLine26() {
  var ctx6 = document.getElementById('canvas26').getContext('2d');
  window.myLine6 = new Chart(ctx6, config_line6);
  getLastThingSpeakData26();
};


/*
* requisita os ultimos dados enviados para o thingspeak
* e atualiza os valores no grafico
*/
function getLastThingSpeakData(){
  console.log("aaaaaaaaaaaaaaaaaaa")
  var channel_id = 196384; //id do canal
  var field_number1 = 1; //numero do field
  var field_number2 = 2; //numero do field
  var num_results = 10; //numero de resultados requisitados
  $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/fields/' + field_number1 + '.json?results=500', function(data) {
    // get the data point
    feeds = data.feeds;
    // imprime os feeds recebidos
    
    console.log(data.feeds)
    // intera em todos os feeds recebidos e os adiciona no grafico
    for (d in feeds)
    {
      //variavel config_line2.data.datasets[0].data eh equivalente ao eixo y
      config_line2.data.datasets[0].data.push(feeds[d].field1);
      //variavel config_line2.labels eh equivalente ao eixo x
      var x_date = new Date(feeds[d].created_at);
      config_line2.data.labels.push(x_date);
    }
    window.myLine2.update();
  });
}

  function getLastThingSpeakData2(){
      console.log("aaaaaaaaaaaaaaaaaaa")
      var channel_id = 196384; //id do canal
      var field_number1 = 1; //numero do field
      var field_number2 = 2; //numero do field
      var num_results = 10; //numero de resultados requisitados
      $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/fields/' + field_number2 + '.json?results=500', function(data) {
        // get the data point
        feeds = data.feeds;
        // imprime os feeds recebidos
        console.log(data.feeds)
        // intera em todos os feeds recebidos e os adiciona no grafico
        for (d in feeds)
        {
          //variavel config_line2.data.datasets[1].data eh equivalente ao eixo y
          config_line22.data.datasets[0].data.push(feeds[d].field2);
          //variavel config_line2.labels eh equivalente ao eixo x
          var x_date = new Date(feeds[d].created_at);
          config_line22.data.labels.push(x_date);
        }
        window.myLine3.update();
      });
    }
    function getLastThingSpeakData3(){
      console.log("aaaaaaaaaaaaaaaaaaa")
      var channel_id = 196384; //id do canal
      var field_number3 = 3; //numero do field
      $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/fields/' + field_number3 + '.json?results=500', function(data) {
        // get the data point
        feeds = data.feeds;
        // imprime os feeds recebidos
        console.log(data.feeds)
        // intera em todos os feeds recebidos e os adiciona no grafico
        for (d in feeds)
        {
          //variavel config_line2.data.datasets[1].data eh equivalente ao eixo y
          config_line3.data.datasets[0].data.push(feeds[d].field3);
          //variavel config_line2.labels eh equivalente ao eixo x
          var x_date = new Date(feeds[d].created_at);
          config_line3.data.labels.push(x_date);
        }
        window.myLine33.update();
      });
    }
    function getLastThingSpeakData4(){
      console.log("aaaaaaaaaaaaaaaaaaa")
      var channel_id = 196384; //id do canal
      var field_number4 = 4; //numero do field
      $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/fields/' + field_number4 + '.json?results=500', function(data) {
        // get the data point
        feeds = data.feeds;
        // imprime os feeds recebidos
        console.log(data.feeds)
        // intera em todos os feeds recebidos e os adiciona no grafico
        for (d in feeds)
        {
          //variavel config_line2.data.datasets[1].data eh equivalente ao eixo y
          config_line4.data.datasets[0].data.push(feeds[d].field4);
          //variavel config_line2.labels eh equivalente ao eixo x
          var x_date = new Date(feeds[d].created_at);
          config_line4.data.labels.push(x_date);
        }
        window.myLine4.update();
      });
    }

    function getLastThingSpeakData25(){
      console.log("aaaaaaaaaaaaaaaaaaa")
      var channel_id = 196384; //id do canal
      var field_number2 = 2; //numero do field
      $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/fields/' + field_number2 + '.json?results=500', function(data) {
        // get the data point
        feeds = data.feeds;
        // imprime os feeds recebidos
        console.log(data.feeds)
        var soma=0;
        // intera em todos os feeds recebidos e os adiciona no grafico
        for (d in feeds)
        {
          soma=soma + parseFloat(feeds[d].field2);
        }
        console.log("AQUIII")
        console.log(soma)
        var media = soma/500;

        for (d in feeds)
        {
          //variavel config_line2.data.datasets[1].data eh equivalente ao eixo y
          config_line5.data.datasets[0].data.push(media);
          //variavel config_line2.labels eh equivalente ao eixo x
          var x_date = new Date(feeds[d].created_at);
          config_line5.data.labels.push(x_date);
        }
        

        window.myLine5.update();
      });
    }

    function getLastThingSpeakData26(){
      console.log("aaaaaaaaaaaaaaaaaaa")
      var channel_id = 196384; //id do canal
      var field_number2 = 2; //numero do field
      $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/fields/' + field_number2 + '.json?results=500', function(data) {
        // get the data point
        feeds = data.feeds;
        // imprime os feeds recebidos
        console.log(data.feeds)
        var soma=0;
        var maior = 0;
        var menor = 500;
        // intera em todos os feeds recebidos e os adiciona no grafico
        for (d in feeds)
        { 
          if(parseFloat(feeds[d].field2)>maior){
            maior = parseFloat(feeds[d].field2);
          }

          if(parseFloat(feeds[d].field2)<menor){
            menor = parseFloat(feeds[d].field2);
          }
        }
        console.log("AQUIII")
        console.log(variacao)
        var variacao = maior-menor;
        console.log("AQUIII")
        console.log(variacao)
        for (d in feeds)
        {
          //variavel config_line2.data.datasets[1].data eh equivalente ao eixo y
          config_line6.data.datasets[0].data.push(variacao);
          //variavel config_line2.labels eh equivalente ao eixo x
          var x_date = new Date(feeds[d].created_at);
          config_line6.data.labels.push(x_date);
        }
        

        window.myLine6.update();
      });
    }

    function previsao1(){
      console.log("RODANDOOO");
      $.get('aprendizado/', function(data){
        console.log(data);  
      });
    }