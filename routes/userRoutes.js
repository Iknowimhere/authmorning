import express from 'express'
import { login, register } from '../controllers/userControllers.js';
import multer from 'multer';
import storage from '../middlewares/fileUpload.js';

let upload=multer({storage:storage})
let router =express.Router();

//http://localhost:5000/api/v1/user/register
router.post("/register",upload.single("photo"),register);
router.post("/login",login);


export default router;