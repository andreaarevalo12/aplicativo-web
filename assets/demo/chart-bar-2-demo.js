
modeloObject = [
    {
      modelo: 'SPARK GT',
      precio: 10000000
    },
    {
      modelo: 'SPARK GT',
      precio: 14000000
    },
    {
      modelo: 'SPARK GT',
      precio: 12000000
    },
    {
      modelo: 'SPARK GT',
      precio: 26000000
    },
    {
        modelo: 'SPARK GT',
        precio: 27000000
      },
    {
      modelo: 'AVEO',
      precio: 24500000
    },
    {
      modelo: 'AVEO COUPE',
      precio: 20000000
    },
    {
      modelo: 'CAMARO',
      precio: 113000000
    },
    {
      modelo: 'CAMARO',
      precio: 96000000
    },
    {
      modelo: 'SPARK GT',
      precio: 50000000
    },
    {
        modelo: 'ASTRA SEDAN',
        precio: 40000000
    },
    {
        modelo: 'AVEO EMOTION',
        precio: 20500000
    },
    {
        modelo: 'CHEYENNE',
        precio: 28000000
    },
    {
        modelo: 'CAMARO',
        precio: 20000000
    }
  ]


var ctx = document.getElementById('bar-chart').getContext('2d');
var chart2 = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['SPARK', 'ASTRA SEDAN', 'CORSA', 'AVEO', 'AVEO COUPE'],
    datasets: [
    {
        label: 'Rango 1',
        data: [19800000, 16700000, 13500000, 19500000, 20000000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
        label: 'Rango 2',
        data: [14500000, 0, 19800000, 0, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
    },
    {
        label: 'Rango 3',
        data: [16500000, 0, 15000000, 0, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
    }]
},
options: {
    responsive: true,
    title: {
        display: true,
        text: 'Modelos y Rangos de Precios ',
        fontSize: 24,
        fontColor: '#2c3e50',
        padding: 20
    },
    legend: {
        display: true,
        position: 'bottom'
    }
}
});




const eventosGrafico4 = () => {
    var value = document.getElementById("feacturesOptions4").value
    data = []
    if(value === 'rango1'){
       data = modeloObject.filter(modelo => modelo.precio >= 10000000 && modelo.precio < 20000000)
    }else if(value == 'rango2'){
       data = modeloObject.filter(modelo => modelo.precio >= 20000000 && modelo.precio < 30000000)
    }else{
       data = modeloObject.filter(modelo => modelo.precio >= 30000000)
    }

    mostrarDataNew = []
    data.forEach(element => {
        let modelosOK = data.filter(modelo => element.modelo === modelo.modelo && !mostrarDataNew.includes())
        if(!mostrarDataNew.includes(modelosOK)){
            mostrarDataNew.push(modelosOK)
        }
    });

    dataLabel = []
    dataBarra1 = []
    dataBarra2 = []
    dataBarra3 = []

    mostrarDataNew.forEach(objet => {
        if(objet.length >= 3){
            dataLabel.push(objet[0].modelo) 
            dataBarra1.push(objet[0].precio)
            dataBarra2.push(objet[1].precio) 
            dataBarra3.push(objet[2].precio)
        }else if(objet.length == 2){
            dataLabel.push(objet[0].modelo) 
            dataBarra1.push(objet[0].precio)
            dataBarra2.push(objet[1].precio) 
            dataBarra3.push(0)
        }else{
            dataLabel.push(objet[0].modelo) 
            dataBarra1.push(objet[0].precio)
            dataBarra2.push(0) 
            dataBarra3.push(0) 
        }
    })

    modelosLabels = []
    labels = dataLabel.filter( onlyUnique )

    if(labels.length > 5){
        for (var i = 0; i < 5; i++) {
            modelosLabels.push(labels[i])
        }
    }else{
        modelosLabels = labels 
    }

    chart2.data.labels = modelosLabels
	chart2.data.datasets[0].data = dataBarra1.filter( onlyUnique )
    chart2.data.datasets[1].data = dataBarra2.filter( onlyUnique )
    chart2.data.datasets[2].data = dataBarra3.filter( onlyUnique )
	chart2.update()
 }

 function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index || self.indexOf(value) !== 0;
}