import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import DbCon from './config/db.js';
import AuthRoutes from './routes/Auth.js';
import NotesRoutes from './routes/Notes.js';
import cookieParser from 'cookie-parser';

// Initialize dotenv to load environment variables
dotenv.config();

// Assign PORT with a fallback value
const PORT = process.env.PORT || 3000;
const app = express();

// Initialize database connection
DbCon();

// Set up CORS configuration
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'  // Use environment variable for flexibility
}));

// Set up middleware
app.use(cookieParser()); // Parsing cookies
app.use(express.json()); // Parsing JSON bodies

// Define routes
app.use('/auth', AuthRoutes);
app.use('/notes', NotesRoutes);

// Basic health check route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
