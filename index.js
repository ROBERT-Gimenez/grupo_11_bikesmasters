const app = require("./src/app");
const { get } = require("./src/routes");

const port =process.env.PORT || 4000;

app.listen(port)


console.log("listen on port"+ port)

const mysql2 = require('mysql2');

const config ={
username:process.env.DATABASE_USERNAME,
password:process.env.DATABASE_PASSWORD,
database:process.env.DATABASE_NAME,
host:process.env.DATABASE_HOST,
dialect:"mysql",
dialectModule:"mysql2"
};