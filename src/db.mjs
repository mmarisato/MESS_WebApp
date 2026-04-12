import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MESSisMaqi444",   
  database: "mess_webapp",
  port: 3306                 
});

export default pool;