import type { Pokemon } from "../types"

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon"

interface GetPokemonsResponse {
	count: number
	next: string
	previous: null
	results: {
		name: string
		url: string
	}[]
}

interface GetPokemonResponse {
	id: number
	name: string
	types: [{
		type: {
			name: string
		}
	}]
}


export async function fetchPokemons(): Promise<Pokemon[]> {
	const response = await fetch(POKEAPI_URL)
	const data = await response.json() as GetPokemonsResponse

	const pokemons: Pokemon[] = []
	for (const pokemon of data.results) {
		const pokemonResponse = await fetch(pokemon.url)
		const pokemonData = await pokemonResponse.json() as GetPokemonResponse

		pokemons.push({
			id: pokemonData.id,
			name: pokemonData.name,
			type: pokemonData.types.map((t) => t.type.name)
		})
	}

	return pokemons
}
