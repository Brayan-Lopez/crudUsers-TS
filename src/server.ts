const app = require ('./app');
import  sequelize from './config/database';

const PORT = 3000

const main = async () => {
  try{
    sequelize.sync();
    console.log('DB connect');
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  }catch (error) {
    console.log(error);
  }
};

main();



  




