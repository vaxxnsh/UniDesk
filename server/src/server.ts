import express from "express";
import 'dotenv/config';
import { PORT } from "./constants/index";
import cors from 'cors';
import DB from './constants/prisma';
import userRouter from './routers/user';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/dummy',(req,res) => {
    res.send("Hello From UniDesk!");
})

app.use('/auth',userRouter);

async function startServer() {
    app.listen(PORT,() => console.log(`Server started at PORT : ${PORT}`));
}

startServer()
.then(async () => 
{
    await DB.$disconnect();
})
.catch(async (e) => 
{
    console.error(e);
    await DB.$disconnect();
    process.exit(1);
});

