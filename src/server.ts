import express from 'express';
import initRoutes from './routes/routes.js'
import connectDB from './database/database.ts'
import cors from 'cors'

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}))

connectDB();
initRoutes(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
