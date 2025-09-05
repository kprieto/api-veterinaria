const express = require("express");

const Mascota = require("../models/mascotas");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const nuevaMascota = new Mascota(req.body);
        await nuevaMascota.save();
        res.status(201).json(nuevaMascota);

    } catch (error){
        res.status(400).json({mensaje: "Error al crear la mascota.", error});
    }
});

router.get("/", async (req, res) =>{
    const mascotas = await Mascota.find();
    res.json(mascotas);
});

router.put('/:id', async (req, res) => {
    try {
        const mascota = await Mascota.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!mascota) {
            return res.status(404).json({ mensaje: 'Mascota no encontrada' });
        }
        res.json({
            mensaje: 'Mascota actualizada correctamente.',
            mascota: mascota
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar la mascota.', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await Mascota.findByIdAndDelete(req.params.id);
        res.json({
        mensaje: 'Mascota eliminada correctamente',
        mascota: resultado
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar la mascota', error });
    }
});

module.exports = router;