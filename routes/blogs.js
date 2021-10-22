import express from "express";
import {listAllBlogs, addBlog, listABlog, deleteBlog, updateBlogWithPatch, updateBlogWithPut} from "../controllers/blogs.js";

const route = express.Router();

route.get("/", listAllBlogs);

route.post("/", addBlog);

route.get("/:id", listABlog);

route.delete("/:id", deleteBlog);

route.patch("/:id", updateBlogWithPatch);

route.put("/:id", updateBlogWithPut);

export default route;