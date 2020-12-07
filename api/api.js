const axios= require('axios')

const ApiKey = "b5b107c84ad580a54c806c71dc5ec099"

const getClima = async (city) => {
  const encodeCity=encodeURI(city)
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeCity}&appid=${ApiKey}&units=metric`)
    .then( resp =>{
      return resp.data
    })
    .catch( err =>{
      throw new Error(`No se encontro informacion para ${city}`)
    })
  const lon = resp.coord.lon
  const lat = resp.coord.lat
  const temp = resp.main.temp
  return `${city} esta a ${temp} grados, sus coordenadas son: Lat(${lat}) - Lng(${lon})`
}

module.exports={getClima}
