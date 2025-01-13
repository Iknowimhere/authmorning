import express from 'express'

let router =express.Router();

//http://localhost:5000/api/v1/user/register
router.post("/register",registerUser);


export default router;