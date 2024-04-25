import express from "express"
import { prisma } from "../lib/prisma.js"

export const tags = express.Router()

tags.get("/", async(req, res)=>{
   const users = await prisma.tags.findMany()
   res.json(tags)
})

tags.post('/', async (req, res)=>{
   await prisma.tags.create({
    data: req.body
   })
   res.sendStatus(201)
})