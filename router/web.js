import express from 'express';
import { userAdd, userDelete, userFetch, userUpdate } from '../controller/controller.js';

const web = express.Router();

web.post("/add", userAdd);
web.get("/fetch/:id", userFetch);
web.delete("/delete/:id", userDelete);
web.put("/update/:id", userUpdate);


export default web;

