const { Router } = require ("express");
const typesRouter = Router();

const getTypes = require("../controllers/getTypes");

typesRouter.get("/", async (req, res) => {
    try {

        const data = await getTypes();

        res.status(200).json(data); // Envía la respuesta al cliente
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports= typesRouter;