import express from "express";
import { auth } from "./auth.router.js";


const Router = express.Router()
const { BASE_URL } = process.env

Router.use(`${BASE_URL}/auth`, auth)


export default Router