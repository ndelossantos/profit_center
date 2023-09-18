import express, { Request } from 'express'
const sql = require('mssql');
const connect = require('../config/databaseConfig');


const getPackagesMain = async (req:Request) => {

    try {
        var queryString = 'SELECT pkg_main_id, pkg_main_name FROM tbl_ecinfoz_pkg_main';

        let pool = await sql.connect(connect);
        let result = await pool.request()
            .query(queryString)

        return result;
    
    } catch (error) {
        console.log(error)
    }
};


const getPackagesSub = async (req:Request) => {

    var main_id = req.params.mainid
    
    try {
        var queryString = 'SELECT pkg_sub_id, pkg_sub_name FROM tbl_ecinfoz_pkg_sub WHERE pkg_sub_main_id = @main_id';

        let pool = await sql.connect(connect);
        let result = await pool.request()
            .input('main_id', sql.NVarChar, main_id)
            .query(queryString)

        return result;
    
    } catch (error) {
        console.log(error)
    }
};


const getPackagesCommonBySub = async (req:Request) => { 

    var sub_id = req.params.subid
    
    try {
        var queryString = 'SELECT * FROM tbl_ecinfoz_pkg_common WHERE pkg_comm_sub_id = @sub_id';

        let pool = await sql.connect(connect);
        let result = await pool.request()
            .input('sub_id', sql.NVarChar, sub_id)
            .query(queryString)

        return result;
    
    } catch (error) {
        console.log(error)
    }
};




  
module.exports = { 
    getPackagesMain,
    getPackagesSub,
    getPackagesCommonBySub
};