import express from 'express';
import cors from 'cors';
const app = express();
import  {authRoutes}  from './routes/globals/auth/authRoute';

app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);

export default app;

