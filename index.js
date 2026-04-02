const express = require("express")
const usuariosRouter = require("./src/routes/usuariosRouter")
const app = express()
const path = require('path');
const port = 3000


app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
app.use('/api/usuarios', usuariosRouter);
// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


   // Actualizar un usuario existente
   app.put('/api/usuarios/:id', (req, res) => {
     const { id } = req.params;
     const index = usuarios.findIndex(usuario => usuario.id == id);
     
     if (index !== -1) {
       usuarios[index] = { id: Number(id), ...req.body };
       res.json(usuarios[index]);
     } else {
       res.status(404).json({ message: 'Usuario no encontrado' });
     }
   });

   
   // Eliminar un usuario
   app.delete('/api/usuarios/:id', (req, res) => {
     const { id } = req.params;
     const index = usuarios.findIndex(usuario => usuario.id == id);
     
     if (index !== -1) {
       usuarios.splice(index, 1);
       res.status(204).send();
     } else {
       res.status(404).json({ message: 'Usuario no encontrado' });
     }
   });
app.listen(port, () => {
console.log(`API EN EJECUCIÓN ${port}`)

})