import express, { Request } from 'express'
const sql = require('mssql');
const connect = require('../config/databaseConfig');


const getPcHeadOffice = async (req:Request) => {
    // var categ_id = req.params.categid === '1' ? req.params.categid : '001'
    var from = req.params.from
    var to = req.params.to
    var search = req.params.search === 'taberu-san' ? '' : req.params.search

    try {
        var queryString = 'exec dbo.getProfitCenter_HeadOffice_Per_Prodcode_SP @from, @to, "001", @search';

        let pool = await sql.connect(connect);
        let result = await pool.request()
            .input('from', sql.NVarChar, from)
            .input('to', sql.NVarChar, to)
            .input('search', sql.NVarChar, search)
            .query(queryString)

        return result;
    
    } catch (error) {
        console.log(error)
    }
};


const getPcBCO = async (req:Request) => {
    
    var from = req.params.from
    var to = req.params.to
    var search = req.params.search === 'taberu-san' ? '' : req.params.search

    try {
        var queryString = 'exec dbo.getProfitCenter_BCO_Per_Prodcode_SP @from, @to, "0033", @search';

        let pool = await sql.connect(connect);
        let result = await pool.request()
            .input('from', sql.NVarChar, from)
            .input('to', sql.NVarChar, to)
            .input('search', sql.NVarChar, search)
            .query(queryString)

        return result;
    
    } catch (error) {
        console.log(error)
    }
};


const getPcBranches = async (req:Request) => {
    
    var from = req.params.from
    var to = req.params.to

    try {
        var queryString = 'exec dbo.getProfitCenter_Branches_Per_Prodcode_SP @from, @to, "0033"';

        let pool = await sql.connect(connect);
        let result = await pool.request()
            .input('from', sql.NVarChar, from)
            .input('to', sql.NVarChar, to)
            .query(queryString)

        return result;
    
    } catch (error) {
        console.log(error)
    }
};




  
module.exports = { 
    getPcHeadOffice,
    getPcBCO,
    getPcBranches
};