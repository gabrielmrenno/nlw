import "dotenv/config";
import express, { Express } from "express";

import {router} from "./routes";

const app = express();

// diz que pode ser passado json no body da requisição
app.use(express.json());
// passando as rotas
app.use(router);

app.get("/github", (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get("/signin/callback", (req, res) => {
    const {code} = req.query;

    return res.json(code);
})

app.listen(4000, () => console.log('Server is running on port 4000.'));