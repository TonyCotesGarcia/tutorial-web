import { useState } from "react"
import { Details } from "../details/details"
import { useGetPokemons } from "../hooks/use-get-pokemons"
import { ListItem } from "./list-item"

export function List() {
	const [selectedPokemonId, setSelectedPokemonId] = useState(null)

	const { pokemons } = useGetPokemons()

	function handlePokemonClick(pokemonId) {
		setSelectedPokemonId(pokemonId)
	}

	const filteredPokemon = pokemons?.find(pokemon => pokemon.id === selectedPokemonId)

	return (
		<>
			<div className="grid grid-cols-3 gap-4 px-4">
				{pokemons?.map((pokemon) => (
					<ListItem key={pokemon.id} pokemon={pokemon} onPokemonClick={handlePokemonClick} />
				))}
			</div>
			<Details pokemon={filteredPokemon} />
		</>
	)
}
