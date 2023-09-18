import express, {Request, Response, NextFunction} from 'express'


const countryModel = require('../models/countryModel');

const countryController = {
   
    getCountries: async (req:Request, res:Response) => {
        
        try {
            const result = await countryModel.getCountries(req)
            // console.log(result.recordset)
            res.json(result.recordset);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }

  
};

module.exports = countryController;