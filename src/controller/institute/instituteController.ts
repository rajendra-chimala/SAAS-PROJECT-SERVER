import {Request,Response}  from "express";
import sequelize from "../../database/connection";
import { generateInstituteNumber } from "../../services/generateTableNumber";


export const createInstitute = async (req:Request, res:Response) => {
    try {
        const {instituteName,instituteEmail,institutePhone,instituteAddress} = req.body;
        const instituteVatNo = req.body.instituteVatNo || null;
        const institutePanNo = req.body.institutePanNo || null;

        // if(!instituteName || !instituteEmail || !institutePhone || !instituteAddress) {
        //     return res.status(400).json({ error: "All fields are required" });
        // }

        const instituteNumber =  generateInstituteNumber();

        await sequelize.query(`CREATE TABLE IF NOT EXISTS institute_${instituteNumber}(
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

            await sequelize.query(`INSERT INTO institute_${instituteNumber} (instituteName, instituteEmail, institutePhone, instituteAddress, instituteVatNo, institutePanNo) VALUES (?,?,?,?,?,?) `,{
                replacements:[instituteName, instituteEmail,institutePhone, instituteAddress, instituteVatNo,institutePanNo ]
            } );

            


        res.status(201).json({ message: "Institute created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to create institute" });
    }
} 



export const createTeacher = async (req:Request, res:Response) => {
    // await sequelize.query(`CREATE TABLE teacher_${instituteNumber}(
    //         id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    //         teacherName VARCHAR(255) NOT NULL,
    //         teacherEmail VARCHAR(255) NOT NULL UNIQUE,
    //         teacherPhone VARCHAR(15) NOT NULL)`)
}