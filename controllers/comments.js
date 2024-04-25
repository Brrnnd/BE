import express from "express"
import { prisma } from "../lib/prisma.js"

export const comments = express.Router()

comments.get("/", async(req, res)=>{
   const comments = await prisma.comments.findMany()
   res.json(comments)
})

comments.post('/', async (req, res)=>{
   await prisma.comments.create({
    data: req.body
   })
   res.sendStatus(201)
})