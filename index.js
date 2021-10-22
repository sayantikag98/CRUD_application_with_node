import express from "express";
import chalk from "chalk";
import route from "./routes/blogs.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/blogs", route);

app.listen(3000, () => {
    console.log(chalk.yellow.inverse("Starting server at http:localhost:3000 ...."));
});