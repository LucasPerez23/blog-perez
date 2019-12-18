const express = require ('express')
const mongoose = require ('mongoose')
const router = require ('./routes/index')

//config vars

const port = process.env.port ||3000;
const db = process.env.mongodb_uri || 'mongodb://localhost/blogPerez';
// conectarse a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
.catch(err => console.error(`Connection error ${err}`));
const app = express();
app.set ('view engine', 'pug');
app.set('vistas', '/views');
app.use ('/', router);
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.listen(port,()=>{
  console.log(`Server listening on port ${port}`);
})
