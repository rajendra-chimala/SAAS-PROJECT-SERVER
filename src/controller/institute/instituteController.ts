import {Request,Response}  from "express";
import sequelize from "../../database/connection";


export const createInstitute = async (req:Request, res:Response) => {
    try {
        const {instituteName,instituteEmail,institutePhone,instituteAddress} = req.body;
        const instituteVatNo = req.body.instituteVatNo || null;
        const institutePanNo = req.body.institutePanNo || null;

        if(!instituteName || !instituteEmail || !institutePhone || !instituteAddress) {
            return res.status(400).json({ error: "All fields are required" });
        }

        await sequelize.query(`CREATE TABLE institute(
            id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            instituteName VARCHAR(255) NOT NULL,
            instituteEmail VARCHAR(255) NOT NULL UNIQUE,
            institutePhone VARCHAR(15) NOT NULL ,
            instituteAddress VARCHAR(255) NOT NULL,
            instituteVatNo VARCHAR(50),
            institutePanNo VARCHAR(50),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`)


        res.status(201).json({ message: "Institute created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to create institute" });
    }
}