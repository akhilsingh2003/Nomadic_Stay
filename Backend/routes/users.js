import express  from "express";
import { deleteUser, getallUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTokens.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req, res)=>{
//     res.send("hello your logged in")
// })


// router.get("/checkuser/:id",verifyUser,(req, res)=>{
//     res.send("hello your logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req, res)=>{
//     res.send("hello admin ,you are logged in and you can delete all your account")
// })

// UPDATE
router.put("/:id",verifyUser,updateUser);

// Delete

router.delete("/:id",verifyUser,deleteUser);

// GET  User by id

router.get("/:id", verifyUser, getUser);

// GET ALL UserS

router.get("/",verifyAdmin,getallUser);

export default router