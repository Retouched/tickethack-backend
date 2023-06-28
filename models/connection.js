const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://orsiniquentin:LZlenfm8vmqMVk6W@cluster0.dye1crt.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));