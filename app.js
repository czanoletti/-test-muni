



// const express = require('express');
// let http = require('http');
// let path = require('path');
// let favicon = require('serve-favicon');
// // const logger = require('morgan');
// const bp = require('body-parser');
//
// let config = {
//   userName: 'sa',
//   password:'<mittelstand3>',
//   server: 'localhost',
//   options:{
//     database:'DBMuniMoralesPublicidad'
//   }
// };
//
// let connection = new Connection(config);
//
// connection.on('connect', (err)=>{
//   if(err){
//     console.log(err);
//   } else{}
//   console.log('success');
// });
//
//
// const app = express();
//
// let userRouter = require('./server/routes/user');
//
// //Static Files
// app.use(express.static(path.join(__dirname, 'dist/municipalidad-morales')));
//
// // Placing Middleware
// // app.use(logger('dev'));
// app.use(bp);
// app.use(bp.urlencoded({'extended':'false'}));
//
// //Api Routes
// app.use('/api', userRouter);
//
// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/municipalidad-morales/index.html'));
// });
//
// // catch 404 and forward to error hand
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//  // render the error page
// res.status(err.status || 500);
// res.render('error');
// });
//
//
// const port = process.env.PORT || '3001';
// app.set('port', port);
//
// const server = http.createServer(app);
// server.listen(port, ()=> console.log('Running app'));
