let url_base = 'https://api.openweathermap.org/data/2.5/weather'
let api_ket = '29a1fe85617f323b431391b84841a923'
let dif_Kelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${url_base}?q=${ciudad}&appid=${api_ket}`)
    .then(response => response.json())
    .then(response => mostrarDatoClima(response))
}

function mostrarDatoClima (response){
    console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const temperatuta = response.main.temp
    const descripcion = response.weather[0].description
    const icon = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre} ${paisNombre}`

    const temperatutaInfo = document.createElement('p')
    temperatutaInfo.textContent = `La temperatura es: ${parseFloat(temperatuta-dif_Kelvin).toFixed(2)} °C`

    const iconoClima = document.createElement('img')
    iconoClima.src = `https://openweathermap.org/img/wn/${icon}@2x.png`


    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `la descripcion meteorologica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperatutaInfo)
    divDatosClima.appendChild(iconoClima)
    divDatosClima.appendChild(descripcionInfo)
    
    
}
