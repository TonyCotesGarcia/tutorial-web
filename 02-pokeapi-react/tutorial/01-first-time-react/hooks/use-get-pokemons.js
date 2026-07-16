import { useEffect, useState } from "react"

const POKEMONS = [{
	id: 1,
	name: "Bulbasaur"
}, {
	id: 2,
	name: "Charizard"
}, {
	id: 3,
	name: "Pikachu"
}]

export function useGetPokemons() {
	const [pokemons, setPokemons] = useState([]) // [0, 1]

	function fetchPokemonsFromApi() {
		// crida a la api
		const pokemons = POKEMONS
		setPokemons(pokemons)
	}

	useEffect(fetchPokemonsFromApi, [])

	return {
		pokemons
	}
}
