const { Router } = require ("express");
const PoTRouter = Router();

const getTypes = require("../controllers/getTypes");

PoTRouter.get("/", async (req, res) => {

    try {

        const data = await getTypes();

        res.status(200).json(data); // Envía la respuesta al cliente
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports= PoTRouter;