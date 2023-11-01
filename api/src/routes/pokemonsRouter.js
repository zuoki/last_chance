const { Router } = require("express");
const pokemonsRouter = Router()

const { getPokemon } = require("../controllers/getPokemon")
const { getPokemonId } = require("../controllers/getPokemonId")
const { createPokemon } = require("../controllers/createPokemon");


// 🆗 ruta finalizada  GET
pokemonsRouter.get("/", async (req, res) => {
    const { name } = req.query;
    try {
        const allPokemon = await getPokemon(name);
        res.status(200).json(allPokemon);
    } catch (error) {
        res.status(404).json({ error: "The Pokémon you're trying to search for doesn't exist" })
    }
}); //maneja los errores de la respuesta de la getPokemon




//middware de validacion de datos
const middlewarePostValidation = (req, res, next) => {
    const { name, img, hp, attack, defense, types } = req.body;
  
    const error = {
      "error": "Required data is incomplete",
      "details": "Make sure to provide all the necessary data in the request."
    }
  
    if (![name, img, hp, attack, defense].every(Boolean) || types.length < 2) {
      return res.status(400).json(error); //'return' aquí para detener la ejecución del middleware
    }
  
    next();
  }
  
  




// 🆗 ruta finalizada  POST 
pokemonsRouter.post("/",middlewarePostValidation, async (req, res) => {
    try {
        const data = req.body;
        const pokemonCreado = await createPokemon(data);
        res.status(201).json(pokemonCreado);
    } catch (error) {
        res.status(500).json({ message: "Error creating Pokemon", error: error.message });
    }
});

// 🆗 ruta finalizada  GET:ID
pokemonsRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await getPokemonId({ id }); // Pass the id as an object
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ error: "No existe un Pokémon con ese ID" });
    }
});



module.exports = pokemonsRouter;