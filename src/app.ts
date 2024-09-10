const express = require ('express')
import router from "./routes/index";

const app = express();

app.use(express.json());

app.use('/api', router);

module.exports = app;