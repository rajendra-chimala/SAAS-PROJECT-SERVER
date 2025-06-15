import express, { NextFunction, Request, Response } from 'express';
import { Router } from 'express';

const router: Router = express.Router();
import { createInstitute } from '../../controller/institute/instituteController';
import { isLoggedIn } from '../../middlewares/middleware';
router.post("/create",(req:Request,res:Response,next:NextFunction)=>{
    isLoggedIn(req, res, next);
},(req: Request, res: Response) => {
    createInstitute(req, res);
});

export const instituteRoute =  router;