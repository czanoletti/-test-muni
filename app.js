const app = require('./server/config/server');
const path = require('path');


// Routes declarations
let usuario = require('./server/routes/usuario');
let archivos = require('./server/routes/archivos');
let cliente_inhuma = require('./server/routes/cliente_inhuma');
let cliente_lote = require('./server/routes/cliente_lote');
let compra_lote = require('./server/routes/compra_lote');
let cursos = require('./server/routes/cursos');
let departamentos = require('./server/routes/departamento');
let empleados = require('./server/routes/empleado');
let inhumacion = require('./server/routes/inhumacion');
let lote = require('./server/routes/lote');
let noticias = require('./server/routes/noticia');
let oferta_trabajo = require('./server/routes/oferta_trabajo');
let persona = require('./server/routes/persona');
let postulante_trabajo = require('./server/routes/postulante');
let postulacion = require('./server/routes/postulacion');
let postulante = require('./server/routes/postulante');
let proyecto = require('./server/routes/proyecto');
let rol = require('./server/routes/rol');
let servicios = require('./server/routes/servicios');
let categoria_proyectos = require('./server/routes/categoria_proyecto');
let categoria_trabajo = require('./server/routes/categoria_trabajo');
let departamento_empleado= require('./server/routes/departamento_empleado');
let lista_servicios = require('./server/routes/lista_servicio');
let tipo_archivo = require('./server/routes/tipo_archivo');
let tipo_curso = require('./server/routes/tipo_curso');
let tipo_proyecto = require('./server/routes/tipo_proyecto');
let error = require('./server/routes/error');


// Routes

app.use('/api', archivos);
app.use('/api', cliente_inhuma);
app.use('/api', compra_lote);
app.use('/api', departamentos);
app.use('/api', empleados);
app.use('/api', inhumacion);
app.use('/api', lote);
app.use('/api', noticias);
app.use('/api', oferta_trabajo);
app.use('/api', persona);
app.use('/api', postulacion);
app.use('/api', postulante_trabajo);
app.use('/api', proyecto);
app.use('/api', postulante);
app.use('/api', rol);
app.use('/api', servicios);
app.use('/api', cursos);
app.use('/api', categoria_proyectos);
app.use('/api', categoria_trabajo);
app.use('/api', cliente_lote);
app.use('/api', departamento_empleado);
app.use('/api', lista_servicios);
app.use('/api', tipo_archivo);
app.use('/api', tipo_curso);
app.use('/api', tipo_proyecto);
app.use('/api', usuario);
app.use('/api/*', error);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'dist', 'municipalidad-morales', 'index.html'));
});


// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
