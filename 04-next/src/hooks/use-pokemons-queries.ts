import { fetchPokemons } from "@/queries/pokeapi"
import { useQuery } from "@tanstack/react-query"

export const usePokemonsQueries = () => {
	const getPokemonsQuery = useQuery({
		queryKey: ["pokemons/all"],
		staleTime: 1000 * 60, // 1 minutes
		queryFn: async () => {
			return await fetchPokemons()
		},
	})

	const getPaginatinatedPokemonsQuery = useQuery({
		queryKey: ["pokemons/pagination"],
		queryFn: async () => {
			return await fetchPokemons()
		},
	})

	return {
		getPokemonsQuery,
	}
}
