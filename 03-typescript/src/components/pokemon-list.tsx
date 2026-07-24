import { useGetPokemons } from "../hooks/use-get-pokemons"
import { PokemonCard } from "./pokemon-card"

export function PokemonList() {
	const { filterByType } = useGetPokemons()

	const filteredPokemons = filterByType("water")

	return (
		<div className="grid grid-cols-3">
			{filteredPokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	)
}
