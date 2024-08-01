import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("<h1>Hii!!!</h1>");
// });

app.use("/", (req, res) => res.send("<h1>Hello! world</h1>"));

app.listen(8000, () => {
    console.log(`Server is listening at http://localhost:8000`);
});
