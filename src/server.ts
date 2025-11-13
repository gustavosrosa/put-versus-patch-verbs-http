import express, { Express } from "express";
import { router } from "./routes/router";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listen PORT ${PORT}`);
});