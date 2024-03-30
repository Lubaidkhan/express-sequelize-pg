
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database'); 

app.use(express.json());

app.use('/users', userRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return sequelize.sync(); 
  })
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
