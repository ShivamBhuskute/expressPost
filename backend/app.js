import express from "express";
import cors from "cors";

const app = express();
const PORT = 5173;

// app.get("/", (req, res) => {
//     res.status(200);
//     res.send("WELCOME");
// });
app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
    const { name } = req.body;
    res.send(`Welcome ${name}`);
});

app.get("/hello", (req, res) => {
    res.set("Content-Type", "text/html");
    res.status(200).send("<h1>Hello to this page</h1>");
});

app.listen(PORT, (error) => {
    if (!error) console.log("server running on port", PORT);
    else console.log("ERROR", error);
});
