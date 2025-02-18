import express from "express";
import { getProducts,createProducts, updatedProduct, deleteProduct } from "../controllers/product.contoller.js";
const router = express.Router();

router.get("/",getProducts);
 
router.post("/",createProducts);

router.put("/:id", updatedProduct)
 
router.delete("/:id",deleteProduct)
 

export default router;