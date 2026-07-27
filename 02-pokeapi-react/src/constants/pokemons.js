export const POKEMON_RESPONSE = [
	{
		id: 1,
		name: "bulbasaur",
		height: 7,
		weight: 69,
		types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
		abilities: [{ ability: { name: "overgrow" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 45 },
			{ stat: { name: "attack" }, base_stat: 49 },
			{ stat: { name: "defense" }, base_stat: 49 },
			{ stat: { name: "sp. atk" }, base_stat: 65 },
			{ stat: { name: "sp. def" }, base_stat: 65 },
			{ stat: { name: "speed" }, base_stat: 45 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" } }
		}
	},
	{
		id: 2,
		name: "ivysaur",
		height: 10,
		weight: 130,
		types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
		abilities: [{ ability: { name: "overgrow" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 60 },
			{ stat: { name: "attack" }, base_stat: 62 },
			{ stat: { name: "defense" }, base_stat: 63 },
			{ stat: { name: "sp. atk" }, base_stat: 80 },
			{ stat: { name: "sp. def" }, base_stat: 80 },
			{ stat: { name: "speed" }, base_stat: 60 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" } }
		}
	},
	{
		id: 3,
		name: "venusaur",
		height: 20,
		weight: 1000,
		types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
		abilities: [{ ability: { name: "overgrow" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 80 },
			{ stat: { name: "attack" }, base_stat: 82 },
			{ stat: { name: "defense" }, base_stat: 83 },
			{ stat: { name: "sp. atk" }, base_stat: 100 },
			{ stat: { name: "sp. def" }, base_stat: 100 },
			{ stat: { name: "speed" }, base_stat: 80 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" } }
		}
	},
	{
		id: 4,
		name: "charmander",
		height: 6,
		weight: 85,
		types: [{ type: { name: "fire" } }],
		abilities: [{ ability: { name: "blaze" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 39 },
			{ stat: { name: "attack" }, base_stat: 52 },
			{ stat: { name: "defense" }, base_stat: 43 },
			{ stat: { name: "sp. atk" }, base_stat: 60 },
			{ stat: { name: "sp. def" }, base_stat: 50 },
			{ stat: { name: "speed" }, base_stat: 65 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" } }
		}
	},
	{
		id: 5,
		name: "charmeleon",
		height: 11,
		weight: 190,
		types: [{ type: { name: "fire" } }],
		abilities: [{ ability: { name: "blaze" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 58 },
			{ stat: { name: "attack" }, base_stat: 64 },
			{ stat: { name: "defense" }, base_stat: 58 },
			{ stat: { name: "sp. atk" }, base_stat: 80 },
			{ stat: { name: "sp. def" }, base_stat: 65 },
			{ stat: { name: "speed" }, base_stat: 80 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" } }
		}
	},
	{
		id: 6,
		name: "charizard",
		height: 17,
		weight: 905,
		types: [{ type: { name: "fire" } }, { type: { name: "flying" } }],
		abilities: [{ ability: { name: "blaze" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 78 },
			{ stat: { name: "attack" }, base_stat: 84 },
			{ stat: { name: "defense" }, base_stat: 78 },
			{ stat: { name: "sp. atk" }, base_stat: 109 },
			{ stat: { name: "sp. def" }, base_stat: 85 },
			{ stat: { name: "speed" }, base_stat: 100 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" } }
		}
	},
	{
		id: 7,
		name: "squirtle",
		height: 5,
		weight: 90,
		types: [{ type: { name: "water" } }],
		abilities: [{ ability: { name: "torrent" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 44 },
			{ stat: { name: "attack" }, base_stat: 48 },
			{ stat: { name: "defense" }, base_stat: 65 },
			{ stat: { name: "sp. atk" }, base_stat: 50 },
			{ stat: { name: "sp. def" }, base_stat: 64 },
			{ stat: { name: "speed" }, base_stat: 43 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" } }
		}
	},
	{
		id: 8,
		name: "wartortle",
		height: 10,
		weight: 225,
		types: [{ type: { name: "water" } }],
		abilities: [{ ability: { name: "torrent" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 59 },
			{ stat: { name: "attack" }, base_stat: 63 },
			{ stat: { name: "defense" }, base_stat: 80 },
			{ stat: { name: "sp. atk" }, base_stat: 65 },
			{ stat: { name: "sp. def" }, base_stat: 80 },
			{ stat: { name: "speed" }, base_stat: 58 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" } }
		}
	},
	{
		id: 9,
		name: "blastoise",
		height: 16,
		weight: 855,
		types: [{ type: { name: "water" } }],
		abilities: [{ ability: { name: "torrent" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 79 },
			{ stat: { name: "attack" }, base_stat: 83 },
			{ stat: { name: "defense" }, base_stat: 100 },
			{ stat: { name: "sp. atk" }, base_stat: 85 },
			{ stat: { name: "sp. def" }, base_stat: 105 },
			{ stat: { name: "speed" }, base_stat: 78 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" } }
		}
	},
	{
		id: 10,
		name: "caterpie",
		height: 3,
		weight: 29,
		types: [{ type: { name: "bug" } }],
		abilities: [{ ability: { name: "shield-dust" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 45 },
			{ stat: { name: "attack" }, base_stat: 52 },
			{ stat: { name: "defense" }, base_stat: 43 },
			{ stat: { name: "sp. atk" }, base_stat: 60 },
			{ stat: { name: "sp. def" }, base_stat: 55 },
			{ stat: { name: "speed" }, base_stat: 35 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" } }
		}
	},
	{
		id: 11,
		name: "metapod",
		height: 7,
		weight: 99,
		types: [{ type: { name: "bug" } }],
		abilities: [{ ability: { name: "shed-skin" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 50 },
			{ stat: { name: "attack" }, base_stat: 20 },
			{ stat: { name: "defense" }, base_stat: 55 },
			{ stat: { name: "sp. atk" }, base_stat: 25 },
			{ stat: { name: "sp. def" }, base_stat: 25 },
			{ stat: { name: "speed" }, base_stat: 30 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png" } }
		}
	},
	{
		id: 12,
		name: "butterfree",
		height: 11,
		weight: 320,
		types: [{ type: { name: "bug" } }, { type: { name: "flying" } }],
		abilities: [{ ability: { name: "compound-eyes" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 60 },
			{ stat: { name: "attack" }, base_stat: 45 },
			{ stat: { name: "defense" }, base_stat: 50 },
			{ stat: { name: "sp. atk" }, base_stat: 90 },
			{ stat: { name: "sp. def" }, base_stat: 80 },
			{ stat: { name: "speed" }, base_stat: 70 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" } }
		}
	},
	{
		id: 13,
		name: "weedle",
		height: 3,
		weight: 32,
		types: [{ type: { name: "bug" } }, { type: { name: "poison" } }],
		abilities: [{ ability: { name: "shield-dust" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 40 },
			{ stat: { name: "attack" }, base_stat: 35 },
			{ stat: { name: "defense" }, base_stat: 30 },
			{ stat: { name: "sp. atk" }, base_stat: 20 },
			{ stat: { name: "sp. def" }, base_stat: 20 },
			{ stat: { name: "speed" }, base_stat: 25 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png" } }
		}
	},
	{
		id: 14,
		name: "kakuna",
		height: 6,
		weight: 100,
		types: [{ type: { name: "bug" } }, { type: { name: "poison" } }],
		abilities: [{ ability: { name: "shed-skin" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 45 },
			{ stat: { name: "attack" }, base_stat: 25 },
			{ stat: { name: "defense" }, base_stat: 50 },
			{ stat: { name: "sp. atk" }, base_stat: 25 },
			{ stat: { name: "sp. def" }, base_stat: 25 },
			{ stat: { name: "speed" }, base_stat: 35 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png" } }
		}
	},
	{
		id: 15,
		name: "beedrill",
		height: 10,
		weight: 295,
		types: [{ type: { name: "bug" } }, { type: { name: "poison" } }],
		abilities: [{ ability: { name: "swarm" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 65 },
			{ stat: { name: "attack" }, base_stat: 90 },
			{ stat: { name: "defense" }, base_stat: 40 },
			{ stat: { name: "sp. atk" }, base_stat: 45 },
			{ stat: { name: "sp. def" }, base_stat: 80 },
			{ stat: { name: "speed" }, base_stat: 75 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png" } }
		}
	},
	{
		id: 16,
		name: "pidgey",
		height: 3,
		weight: 18,
		types: [{ type: { name: "normal" } }, { type: { name: "flying" } }],
		abilities: [{ ability: { name: "keen-eye" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 40 },
			{ stat: { name: "attack" }, base_stat: 45 },
			{ stat: { name: "defense" }, base_stat: 40 },
			{ stat: { name: "sp. atk" }, base_stat: 35 },
			{ stat: { name: "sp. def" }, base_stat: 35 },
			{ stat: { name: "speed" }, base_stat: 56 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png" } }
		}
	},
	{
		id: 17,
		name: "pidgeotto",
		height: 11,
		weight: 300,
		types: [{ type: { name: "normal" } }, { type: { name: "flying" } }],
		abilities: [{ ability: { name: "keen-eye" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 63 },
			{ stat: { name: "attack" }, base_stat: 60 },
			{ stat: { name: "defense" }, base_stat: 55 },
			{ stat: { name: "sp. atk" }, base_stat: 50 },
			{ stat: { name: "sp. def" }, base_stat: 50 },
			{ stat: { name: "speed" }, base_stat: 71 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png" } }
		}
	},
	{
		id: 18,
		name: "pidgeot",
		height: 15,
		weight: 395,
		types: [{ type: { name: "normal" } }, { type: { name: "flying" } }],
		abilities: [{ ability: { name: "keen-eye" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 83 },
			{ stat: { name: "attack" }, base_stat: 80 },
			{ stat: { name: "defense" }, base_stat: 75 },
			{ stat: { name: "sp. atk" }, base_stat: 70 },
			{ stat: { name: "sp. def" }, base_stat: 70 },
			{ stat: { name: "speed" }, base_stat: 91 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png" } }
		}
	},
	{
		id: 19,
		name: "rattata",
		height: 3,
		weight: 35,
		types: [{ type: { name: "normal" } }],
		abilities: [{ ability: { name: "run-away" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 30 },
			{ stat: { name: "attack" }, base_stat: 56 },
			{ stat: { name: "defense" }, base_stat: 35 },
			{ stat: { name: "sp. atk" }, base_stat: 25 },
			{ stat: { name: "sp. def" }, base_stat: 35 },
			{ stat: { name: "speed" }, base_stat: 72 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png" } }
		}
	},
	{
		id: 20,
		name: "raticate",
		height: 7,
		weight: 185,
		types: [{ type: { name: "normal" } }],
		abilities: [{ ability: { name: "run-away" }, is_hidden: false }],
		stats: [
			{ stat: { name: "hp" }, base_stat: 55 },
			{ stat: { name: "attack" }, base_stat: 81 },
			{ stat: { name: "defense" }, base_stat: 60 },
			{ stat: { name: "sp. atk" }, base_stat: 50 },
			{ stat: { name: "sp. def" }, base_stat: 70 },
			{ stat: { name: "speed" }, base_stat: 97 }
		],
		sprites: {
			front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
			other: { "official-artwork": { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png" } }
		}
	}
]
