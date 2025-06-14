import express, { Request, Response } from 'express';
import { Router } from 'express';

const router: Router = express.Router();
import { createInstitute } from '../../controller/institute/instituteController';
router.post("/create", (req: Request, res: Response) => {
    createInstitute(req, res);
});

export const instituteRoute =  router;