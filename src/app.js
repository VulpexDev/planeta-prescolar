const express = require('express');

const morgan = require('morgan');

const  {db} = require('./firebase')

const app = express();

app.get('/',async (req ,res )=> {
   const querySnapshot = await db.collection('contacts').get()
   console.log(querySnapshot.docs[0].data())
})


app.use(morgan('dev'))


module.exports = app;
