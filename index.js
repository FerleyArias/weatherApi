const argv=require('./config/yargs').argv

const clima = require('./api/api')

clima.getClima(argv.ciudad)
  .then(resp=>console.log(resp))
  .catch(err=>console.log(err.message))