import express from 'express';
import path from 'path';
import open from 'open';
//webpack import
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */

const port = 3000 || process.env.PORT;
//dev env
const dev_env = process.env.DEVELOPMENT || 'development';
//express()
const app = express();
//compiler
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));


//get
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

//users
app.get('/users',function(req,res){
  //hard-coded
  res.json([
    {"id": 1,"firstName":"A","lastName":"B","email":"a@gmail.com"},
    {"id": 2,"firstName":"C","lastName":"D","email":"c@gmail.com"},
    {"id": 3,"firstName":"E","lastName":"F","email":"e@gmail.com"}
  ]);
});



//listen
app.listen(port,function(err){
  if(err){
    console.error(err);
  }
  else{
    open('http://localhost:'+port);
  }
});
