import express  from "express";
import { createRoom, deleteRoom, getallRoom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyTokens.js";

const router = express.Router();
//Create  

router.post("/:hotelid" ,verifyAdmin , createRoom)

// UPDATE
router.put("/:id",verifyAdmin,updateRoom);
router.put("/availability/:id", updateRoomAvailability);


// Delete

router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

// GET  Room by id

router.get("/:id",getRoom );

// GET ALL RoomS

router.get("/",getallRoom);


export default router