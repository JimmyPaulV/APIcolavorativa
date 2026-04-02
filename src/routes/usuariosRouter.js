const usuariosController = require("../controllers/usuariosController")
const express = require("express")
const router = express.Router()
const db = require('../config/db');

router.get("/", usuariosController.getusuarios)
router.get("/:id", usuariosController.getusuariosById)
router.post("/", usuariosController.postusuarios)
// PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email, sexo } = req.body;
  db.query(
    'UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, sexo = ?WHERE id = ?',
    [nombre, apellido, email, sexo, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Usuario actualizado' });
    }
  );
});
// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Usuario eliminado' });
  });
});


module.exports = router