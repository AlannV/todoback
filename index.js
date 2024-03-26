require("dotenv").config()
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {PORT, DEVELOPMENT, PRODUCTION} = process.env

console.log(`You are in DEVELOPMENT mode`)

conn.sync({ force: DEVELOPMENT }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server runing at port ${PORT}`);
  });
});
