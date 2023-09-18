import React, { useState } from 'react'
import ReadOnly from '../tscriptz/Readonly'
import DiscriUnion from '../tscriptz/DiscrimanatedUnion'
import TypeGuards from '../tscriptz/TypeGuards'
import KeyOf from '../tscriptz/Keyof'
import TestKeyof from '../tscriptz/TestKeyOf'

type userInfo = {
    name:string,
    age:number
}



const Tspractice = () => {

    const dataPerson = {
        type:'person',
        name: 'NIkko',
        age: 5
    }
    
    const dataCompany = {
        type:'company',
        name: 'DeloZantos INC.',
        numberOfEmployees: 100
    }

    const userInfo = {
        name: 'Kniah',
        age: 3
    }

    const ProblematicUserInfo = {
        name: 'Nikko',
        lname: 'De Los Santos',
        age: 33,
        siblings: [
            {
                name: 'Clarice',
                children: 2
            },
            {
                name: 'Topacio',
                children: 5
            },
        ]
    } 
    
    return (
        <div className="profitcenter">

            
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">TypeScript Praktisan!</h1>
                
                <div className="bg-white shadow-lg rounded-lg">
                    <div className="grid grid-cols-1 px-10 py-5">
                        {/* <div className="mt-10">
                            <ReadOnly dataProps={userInfo} /> 
                        </div>
                        <div className="mt-10">
                            <DiscriUnion /> 
                        </div>
                        <div className="mt-10">
                            <TypeGuards dataProps={dataCompany} /> 
                        </div> */}
                        {/* <div className="mt-10">
                            <KeyOf dataProps={userInfo} /> 
                        </div> */}
                        <div className="mt-10">
                            <TestKeyof dataProps={ProblematicUserInfo} /> 
                        </div>
                        
                        
                    </div>
                </div>
           
            </div>
        </div>
    )
}

  
export default Tspractice
  