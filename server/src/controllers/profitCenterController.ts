import express, {Request, Response, NextFunction} from 'express'


const profitCenterModel = require('../models/profitCenterModel');

const profitCenterController = {
   
    getPcHeadOffice: async (req:Request, res:Response) => {
        
        try {
            const result = await profitCenterModel.getPcHeadOffice(req)
            // console.log(result.recordset)
            res.json(result.recordset);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    },

    getPcBCO: async (req:Request, res:Response) => {
        
        try {
            const result = await profitCenterModel.getPcBCO(req)
            // console.log(result.recordset)
            res.json(result.recordset);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    },


    getPcBranches: async (req:Request, res:Response) => {
        
        try {
            const result = await profitCenterModel.getPcBranches(req)
            // console.log(result.recordset)
            res.json(result.recordset);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    },

    // getPackagesSub: async (req:Request, res:Response) => {
        
    //     try {
    //         const result = await packagesModel.getPackagesSub(req)
    //         // console.log(result.recordset)
    //         res.json(result.recordset);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).send('Server error');
    //     }
    // },


    // getPackagesCommonBySub: async (req:Request, res:Response) => {
        
    //     try {
    //         const result = await packagesModel.getPackagesCommonBySub(req)
    //         // console.log(result.recordset)
    //         res.json(result.recordset);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).send('Server error');
    //     }
    // }
    

  
};

module.exports = profitCenterController;