const argv = require('yargs').options({
  ciudad:{
    alias:'c',
    desc: 'Nombre de las ciudad de la consulta',
    demand:true
  }
}).help().argv

module.exports={argv}