import { usePokemonsQueries } from "./use-pokemons-queries"

export const useGetPokemons = () => {
	const { getPokemonsQuery } = usePokemonsQueries()

	console.log("data", getPokemonsQuery.data)

	const pokemons = getPokemonsQuery.data || []


	function filterByType(type: string) {
		return pokemons.filter((pokemon) => pokemon.type.includes(type))
	}

	const length = pokemons.length

	return {
		pokemons,
		length,
		filterByType,
		onNextPage: () => { },
		onPrevPage: () => { },
		onSearch: () => { },
		searchResults: [],
		loading: getPokemonsQuery.isLoading,
		error: Boolean(getPokemonsQuery.error),
		errorMessage: getPokemonsQuery.error?.message || "",
		canGoNext: false,
		canGoPrev: false,
	}
}
