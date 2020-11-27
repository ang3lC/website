const express = require('express');
const app = express();
const path = require('path');

//configuracion express
app.set('port', 3000);
app.set('views', path.join(__dirname,'Views'));
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'ejs');

//rutas
app.use(require('./route/index'));


//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//escuchando
app.listen(app.get('port'), () => { 
    console.log('Server on port', app.get('port'));
});