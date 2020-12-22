const mysql = require('mysql')
const {database} = require('./keys')
const pool = mysql.createPool(database)

pool.getConnection((err,con)=>{
    if(err){
        throw err
    }
    if (con) con.release()
    console.log('conexion realizada')
    return
})
module.exports = pool