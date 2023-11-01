const express = require("express");
const router = express.Router();

const pokemonsRouter = require("./pokemonsRouter");

const typesRouter = require("./typesRouter");

router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
