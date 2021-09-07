
const {Router} = require('express');
const router = Router();
const Persona = require('../model/persona');
const APIURL = "/api/v0/personas/"

router.get(APIURL, async (req, res) => {
    try {
        const personas = await Persona.find();
        res.status(200).json(personas);
    } catch (error) {
        res.status(501).json({error: error.message});
    }
});

router.get(APIURL + ':id', async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);
        if (persona)
            res.status(200).json(persona);
        rest.status(404).json({notFound: "Not found person"});

    } catch (error) {
        res.status(501).json({error: error.message});
    }
})


router.post(APIURL, async (req, res) => {
    try {
        console.log("creando persona")
        const personajson = req.body;
        const guardado = await Persona.create(personajson);
        console.log("esquema creado")
        res.status(201).send(guardado);

    } catch (error) {
        res.status(501).json({error: error.message});
    }
})
router.delete(APIURL + ':id', async (req, res) => {
    try {
        const persona = await Persona.findByIdAndDelete(req.params.id);
        if (persona)
            res.status(200).json(persona);
        rest.status(404).json({notFound: "Not found person"});

    } catch (error) {
        res.status(501).json({error: error.message});
    }
})

module.exports = router;
