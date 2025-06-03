import app from './src/app';
import dotenv from 'dotenv';
import envConfig from './src/config/config';
dotenv.config();

// Import the database connection to ensure it is established
import './src/database/connection';
// Start the server 

function startServer() {
  const PORT = envConfig.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();