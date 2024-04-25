import express from "express"
import { prisma } from "../lib/prisma.js"

export const blogs = express.Router()

blogs.get("/", async(req, res)=>{
   const blogs = await prisma.blogs.findMany()
   res.json(blogs)
})

blogs.post('/', async (req, res)=>{
   await prisma.blogs.create({
    data: req.body
   })
   res.sendStatus(201)
})