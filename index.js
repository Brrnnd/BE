import express from "express"
import { users } from "./controllers/users.js";
import parser from "body-parser"
import { tags } from "./controllers/tags.js";
import { comments } from "./controllers/comments.js";
import { blogs } from "./controllers/blogs.js";

const app = express();
const port = 3000

app.use(parser.json())
app.use("/users",users)
app.use("/tags",tags)
app.use("/comments",comments)
app.use("/blogs",blogs)

app.listen(port, () => {
    console.log('Menyala lekku di port: ' + port);
})