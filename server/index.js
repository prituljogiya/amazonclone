const express= require('express');
const mongoose= require('mongoose');

//import like package from dart
const authRouter=require('./routes/auth.js');

//INIT
const PORT=3000;
const app=express();
const DB="mongodb+srv://pritul:pritul123@cluster0.gqsiib1.mongodb.net/?retryWrites=true&w=majority";

//middleware
app.use(express.json());
app.use(authRouter);

//mongodb connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, '0.0.0.0', () => {  
    console.log('connected to port '+PORT);
});