import express from "express";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/user.js"; // Importando as funções corretas

const router = express.Router();

// Rota para obter todos os produtos
router.get("/", getProducts);

// Rota para adicionar um novo produto
router.post("/", addProduct);

// Rota para atualizar um produto pelo ID
router.put("/:id", updateProduct);

// Rota para deletar um produto pelo ID
router.delete("/:id", deleteProduct);

export default router; // Exportando as rotas
