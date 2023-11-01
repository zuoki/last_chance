const { Pokemon, Type } = require('../db.js')


const dbInfo = async () => {
	const data = (await Pokemon.findAll({
		include: {
			model: Type,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		}
	})).map(e => {
		const json = e.toJSON();
		return {
			...json,
			types: json.types.map(type => type.name)
		}
	})
	return data;
};

module.exports(dbInfo)
