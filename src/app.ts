import express from 'express';
const app = express();
import  {authRoutes}  from './routes/globals/auth/authRoute';

app.use("/api/auth", authRoutes);

export default app;

