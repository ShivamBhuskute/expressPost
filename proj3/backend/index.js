import express from "express";

import homeroute from "./routes/home.js";
import loginroute from "./routes/login.js";

const app = express();

app.use(
    "/",
    (req, res, next) => {
        console.log("helo");
        next();
    },
    homeroute
);
app.use("/", loginroute);

app.listen(3000, () =>
    console.log("Server is running at http://localhost:3000")
);
