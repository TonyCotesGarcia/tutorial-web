import { useEffect } from "react"
import { fetchPokemons } from "../queries/pokeapi"
import { usePokemonsStore } from "../stores/pokemons-store"

export const useGetPokemons = () => {
	const { pokemons, setPokemons } = usePokemonsStore()

	useEffect(() => {
		if (pokemons.length) return

		async function getData() {
			const result = await fetchPokemons()
			setPokemons(result)
		}

		getData()
	}, [pokemons.length, setPokemons])

	function filterByType(type: string) {
		return pokemons.filter((pokemon) => pokemon.type.includes(type))
	}

	const length = pokemons.length

	return { pokemons, length, filterByType }
}
