// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


datos = [
  {
    año: 2018,
    precio: 40000000
  },
  {
    año: 2019,
    precio: 10000000
  },
  {
    año: 2022,
    precio: 20000000
  },
  {
    año: 2023,
    precio: 40000000
  },
  {
    año: 2018,
    precio: 30000000
  },
  {
    año: 2017,
    precio: 20000000
  },
  {
    año: 2015,
    precio: 40000000
  },
  {
    año: 2017,
    precio: 30000000
  },

  {
    año: 2016,
    precio: 40000000
  },
  {
    año: 2020,
    precio: 30000000
  },
  {
    año: 2018,
    precio: 40000000
  },

  {
    año: 2002,
    precio: 20000000
  },
  {
    año: 2004,
    precio: 30000000
  },
  {
    año: 2006,
    precio: 40000000
  },
  
]


const mostrarData = () => {
  años = [2000, 2001, 2002, 2003, 2004, 2005, 2006]
  valoresObtenidos = []

  años.forEach(element2 => {
    var datosNew = datos.filter(element => element2 == element.año)
    if(datosNew.length > 0){
      valoresObtenidos.push(datosNew)
    }else{
      valoresObtenidos.push([{año: element2 , precio: 0}])
    }
  });
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

  return valoresPrecios
}

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: mostrarData(),
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

const eventosGrafico2 = () => {
  value = document.getElementById('feacturesOptions2').value
  años = []
  console.log(value)
  if(value == 'rangoAnual1'){
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
  myLineChart.data.labels = valoresLabels
	myLineChart.data.datasets[0].data = [0, 0, 40000000, 40000000, 50000000, 110000000]
	myLineChart.update()

}






