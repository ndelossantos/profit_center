import express, {Request, Response, NextFunction} from 'express'


const packagesModel = require('../models/packagesModel');

const packagesController = {
   
    getPackagesMain: async (req:Request, res:Response) => {
        
        try {
            const result = await packagesModel.getPackagesMain(req)
            // console.log(result.recordset)
            res.json(result.recordset);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    },


    getPackagesSub: async (req:Request, res:Response) => {
        
        try {
            const result = await packagesModel.getPackagesSub(req)
            // console.log(result.recordset)
            res.json(result.recordset);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    },


    getPackagesCommonBySub: async (req:Request, res:Response) => {
        
        try {
            const result = await packagesModel.getPackagesCommonBySub(req)
            // console.log(result.recordset)
            res.json(result.recordset);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }
    

  
};

module.exports = packagesController;