import {v4 as uuidv4} from "uuid";
import { readFileFunc, writeFileFunc } from "./data-read-write.js";

export const listAllBlogs = async (req, res) => {
    const blogs = await readFileFunc();
    if(!blogs.length) 
        res.send("No blogs to display.");
    else 
        res.send(blogs);
}

export const addBlog = async (req, res) => {
    const blogs = await readFileFunc();
    const blog = {...req.body, id:uuidv4()};
    blogs.push(blog);
    writeFileFunc(blogs);
    res.send(`New blog with title ${blog.blogTitle} added to the list.`);
};


export const listABlog = async (req, res) => {
    const blogs = await readFileFunc();
    if(!blogs.length) res.send("No blogs present.");
    else{
        const id = req.params.id;
        const blog = blogs.find(ele => ele.id === id);
        if(!blog) res.send(`No such blog with id ${id} exists.`);
        else res.send(blog);
    }
};


export const deleteBlog = async (req, res) => {
    let blogs = await readFileFunc();
    if(!blogs.length) res.send("No blogs present.");
    else{
        const id = req.params.id;
        const blog = blogs.find(ele => ele.id === id);
        if(!blog) res.send(`No such blog with id ${id} exists.`);
        else{
            blogs = blogs.filter(ele => ele.id !== id);
            writeFileFunc(blogs);
            res.send(`Blog with title ${blog.blogTitle} deleted from the list.`);
        }   
    }
};


export const updateBlogWithPatch = async (req, res) => {
    const blogs = await readFileFunc();
    if(!blogs.length) res.send("No blogs present.");
    else{
        const id = req.params.id;
        const blog = blogs.find(ele => ele.id === id);
        if(!blog) res.send(`No such blog with id ${id} exists.`);
        else{
            const {blogTitle, blogBody} = req.body;
            if(blogTitle) blog.blogTitle = blogTitle;
            if(blogBody) blog.blogBody = blogBody;
            writeFileFunc(blogs);
            res.send(`Blog with id ${id} updated.`);
        }
    }
};


export const updateBlogWithPut = async (req, res) => {
    const blogs = await readFileFunc();
    if(!blogs.length) res.send("No blogs present");
    else{
        const id = req.params.id;
        const index = blogs.findIndex(ele => ele.id === id);
        if(index === -1) res.send(`No such blog with id ${id} exists.`);
        else{
            blogs[index] = {...req.body, id};
            writeFileFunc(blogs);
            res.send(`Blog with id ${id} updated.`);
        }
    }
};

