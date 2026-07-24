import { useGetPokemons } from "../hooks/use-get-pokemons"
import { PokemonType } from "./pokemon-type"

export function PokemonDetails() {
	const { length } = useGetPokemons()

	return <div>Length: {length}<PokemonType /></div>
}
