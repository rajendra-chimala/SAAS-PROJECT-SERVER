import express from 'express';
import cors from 'cors';
const app = express();
import  {authRoutes}  from './routes/globals/auth/authRoute';
import { instituteRoute } from './routes/institute/instituteRoute';

app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);
app.use('/api/institute', instituteRoute)

export default app;

