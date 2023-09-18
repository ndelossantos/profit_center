import express, { Request } from 'express'
const sql = require('mssql');
const connect = require('../config/databaseConfig');


const getPkgproductsByComm = async (req:Request) => {
    var comm_id = req.params.commid

    try {
        var queryString = 'SELECT * FROM tbl_ecinfoz_pkg_products WHERE pkg_prod_comm_id = @comm_id';

        let pool = await sql.connect(connect);
        let result = await pool.request()
            .input('comm_id', sql.NVarChar, comm_id)
            .query(queryString)

        return result;
    
    } catch (error) {
        console.log(error)
    }
};


  
module.exports = { 
    getPkgproductsByComm
};