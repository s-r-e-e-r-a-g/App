import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongodbConnect from './config/mongodb.js';
import router from './routes/authRouter.js';


const app = express();
const PORT = process.env.PORT || 5000
mongodbConnect();

app.use(cors());
app.use(express.json());
app.use('/api', router)

app.get('/',(req, res)=>{
    res.send("API Working");
})

app.listen(PORT,()=>{
    console.log(`Server Running in ${PORT}`);
})