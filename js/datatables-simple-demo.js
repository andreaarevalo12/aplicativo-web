window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    mostrarRegistros()

});



  responseDataNew = []
  idActualizar = null

  var config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
}
  
  
  const mostrarRegistros = async() => {
       url = 'http://127.0.0.1:5000/api/chevrolet/'

        await axios({ method: 'GET', url: url, config })
        .then(responseData => {
        response = responseData.data
        if(response.length > 0){
            responseDataNew = response
          
            let tableBody = document.getElementById("cuerpoTabla");
            for (let i = 0; i < Object.keys(response).length; i++) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${response[i].marca}</td>
            <td>${response[i].modelo}</td>
            <td>${response[i].color}</td>
            <td>${response[i].ano}</td>
            <td>${response[i].precio}</td>
            <td><button class="btn bg-btn-primary" onclick="actualizarData(${i})">Actualizar</button></td>
            <td><button class="btn bg-gradient-danger text-white" onclick="eliminarData(${i})">Eliminar</button></td>
         `;
        tableBody.appendChild(tr);
        }
    }
     }).catch()
  };


  const actualizarData = (index) => {
    idActualizar = responseDataNew[index].web_scraper_order
    document.getElementById("modelo").value = `${responseDataNew[index].modelo}`
    document.getElementById("color").value = `${responseDataNew[index].color}`
    document.getElementById("año").value = `${responseDataNew[index].ano}`
    document.getElementById("precio").value = `${responseDataNew[index].precio}`
    alert = document.getElementById("alertFormulario")
    alert.style.display = "block";
  }

  const guardarData = async() => {
    modelo = document.getElementById("modelo").value
    color = document.getElementById("color").value
    año = document.getElementById("año").value
    precio = document.getElementById("precio").value
    

    if(modelo === '' || año === '' || precio === ''){
        alert = document.getElementById("alertErrorRegister")
        alert.innerHTML = `Complete los campos`
        alert.style.display = "block"
    }else if(año < 1900){
        alert = document.getElementById("alertErrorRegister")
        alert.innerHTML = `Ingrese el año correcto, entre el rango 1900 - 2030`
        alert.style.display = "block"
    }else{

        data = [
            {
                "ano": año,
                "color": color,
                "marca": "CHEVROLET",
                "modelo": modelo,
                "precio": precio,
            }
        ]
        
       

        url = 'http://127.0.0.1:5000/api/chevrolet/update/' + idActualizar

        console.log('idActualizar', idActualizar)

        await axios({ method: 'PUT', url: url, data: data, header: config })
            .then(response => {
                location.reload()
        }).catch(erroe => {
            alert = document.getElementById("alert")
            alert.innerHTML = `Ingrese los datos correctos`
            alert.style.display = "block"
        })
       
    }
    
  }


  const eliminarData = async(index) => {
   id  = responseDataNew[index].web_scraper_order

    url = 'http://127.0.0.1:5000/api/chevrolet/delete/' + id

        await axios({ method: 'DELETE', url: url, header: config })
            .then(response => {
              location.reload()
        }).catch(erroe => {
            alert = document.getElementById("alert")
            alert.innerHTML = `Ingrese los datos correctos`
            alert.style.display = "block"
        })

  }

  

