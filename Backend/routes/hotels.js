import express  from "express";
import { countByCity, countByType, createHotel, deleteHotel, getallHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyTokens.js";

const router = express.Router();
// Create 
router.post("/" ,verifyAdmin,createHotel);

// UPDATE
router.put("/:id",verifyAdmin ,updateHotel);

// Delete

router.delete("/:id",verifyAdmin,deleteHotel);

// GET  HOTEL by id

router.get("/find/:id",getHotel );

// GET ALL HOTELS

router.get("/",getallHotel);

router.get("/countByCity",countByCity);
router.get("countByType",countByType);
router.get("/room/:id", getHotelRooms);





export default router