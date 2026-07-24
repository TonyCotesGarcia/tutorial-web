import type { Pokemon } from "../types"

interface Props {
	pokemon: Pokemon
}

export function PokemonCard({ pokemon }: Props) {
	const pokemonType = pokemon.type.join(", ")

	return <div style={{
		border: "1px solid black"
	}}>
		<p>{pokemon.id}</p>
		<p>{pokemon.name}</p>
		<p>{pokemonType}</p>
	</div>
}
