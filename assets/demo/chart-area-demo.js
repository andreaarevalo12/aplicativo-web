// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';




modelo = []


const getData = async() => {
  url = 'http://127.0.0.1:5000/api/chevrolet/'
 

await axios({ method: 'GET', url: url, config })
    .then(responseData => {
        response = responseData.data
        console.log('Config ', response)
        if(response.length > 0){
           document.getElementById('tarjeta1').innerHTML = response.length
           
        }
        
  }).catch()
}


getData()




// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10000000, 20000000, 11000000, 18000000, 12000000, 13000000, 15000000],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


const actualizarDatosLineChart = () => {
  console.log('Data  ', modelo)
  value = document.getElementById('feacturesOptions1').value
  modelo = ['AVEO', 'AVEO EMOTION', 'AVEO HATCHBACK', 'AVEO SEDAN', 'AVEO EMOTION SEDAN', 'AVEO EMOTION COUPE', 'AVEO COUPE']
  años = []
  if(value == 'AVEO'){
     años = [2000, 2001, 2002, 2003, 2004, 2005, 2006]
  }else if(value == 'rangoAnual2'){
    años = [2007, 2008, 2009, 2010, 2011, 2012]
  }else if(value == 'rangoAnual3'){
    años = [2013, 2014, 2015, 2016, 2017, 2018]
  }else{
    años = [2019, 2020, 2021, 2022, 2023]
  }

  valoresObtenidos = []

  años.forEach(element2 => {
    var datosNew = datos.filter(element => element2 == element.año)
    if(datosNew.length > 0){
      valoresObtenidos.push(datosNew)
    }else{
      valoresObtenidos.push([{año: element2 , precio: 0}])
    }
  });

  //console.log(valoresObtenidos)
  
  valoresLabels = []
  valoresPrecios = []
  valoresObtenidos.forEach((array) => {
    var suma = 0
    for (i in array){
      suma+=array[i].precio
    }
    valoresLabels.push(String(array[0].año))
    valoresPrecios.push(suma)
  })
  console.log(valoresPrecios)
  myLineChart1.data.labels = valoresLabels
	myLineChart1.data.datasets[0].data = valoresPrecios
	myLineChart1.update()
}
