import express, { Request, Response } from 'express'
const sql = require('mssql');
const connect = require('../config/databaseConfig');


const getCountries = async (req:Request) => {

    try {
        var queryString = 'SELECT ccode, country FROM tblcurrencies';

        let pool = await sql.connect(connect);
        let result = await pool.request()
            .query(queryString)

        return result;
    
    } catch (error) {
        console.log(error)
    }
};

  
module.exports = { 
    getCountries
};