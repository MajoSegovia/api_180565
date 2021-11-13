const express = require('express');
const app = express();

app.set('port',process.env.PORT || 3000);

app.use(express.json());

app.use(require('./routes/empleados'));

//prueba uno
app.listen(app.get('port'),()=>{
    console.log("Servidor iniciando en el puerto: ", app.get('port'));
});