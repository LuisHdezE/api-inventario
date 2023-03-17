import express from "express";

import verifyToken from "../middlewares/authentication.js";
import Category from "../../domain/models/category.js";

const router = express.Router();

// Ruta para obtener todas las categorías
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Ruta para crear una nueva categoría
/*router.post("/categories", verifyToken, async (req, res) => {
  try {
    const { description } = req.body;
    const category = await Category.create({ description });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});*/

// Ruta para actualizar una categoría existente
/*router.put("/categories/:id", verifyToken, async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    const [numRows, [category]] = await Category.update(
      { description },
      { where: { id }, returning: true }
    );
    if (numRows === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.json(category);
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Ruta para eliminar una categoría existente
router.delete("/categories/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const numRows = await Category.destroy({ where: { id } });
    if (numRows === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.json({ message: "Category deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
*/
export default router;
