import { useCallback, useRef, useState } from "react"
import { POKEMON_RESPONSE } from "../constants/pokemons"

const ITEMS_PER_PAGE = 20

export function usePaginatedGetPokemons() {
	const [currentPage, setCurrentPage] = useState(0)
	const [searchQuery, setSearchQuery] = useState("")
	const [searchResults, setSearchResults] = useState<any[] | null>(null)
	const [loading, setLoading] = useState(false)

	const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

	const totalPages = Math.ceil(POKEMON_RESPONSE.length / ITEMS_PER_PAGE)

	const handleSearch = useCallback((query: string) => {
		if (debounceTimer.current) {
			clearTimeout(debounceTimer.current)
		}

		setSearchQuery(query)

		if (query.trim() === "") {
			setSearchResults(null)
			setCurrentPage(0)
			setLoading(false)
			return
		}

		setLoading(true)

		debounceTimer.current = setTimeout(() => {
			const queryLower = query.toLowerCase().trim()
			const isNumeric = /^\d+$/.test(queryLower)

			const results = POKEMON_RESPONSE.filter((pokemon) => {
				if (isNumeric) {
					// Búsqueda exacta por número de Pokédex
					return pokemon.id === parseInt(queryLower)
				} else {
					// Búsqueda por nombre (parcial)
					return pokemon.name.toLowerCase().includes(queryLower)
				}
			})
			setSearchResults(results)
			setLoading(false)
		}, 300)
	}, [])

	const getCurrentPokemons = () => {
		if (searchResults !== null) {
			return searchResults
		}

		const startIndex = currentPage * ITEMS_PER_PAGE
		const endIndex = startIndex + ITEMS_PER_PAGE
		return POKEMON_RESPONSE.slice(startIndex, endIndex)
	}

	const handleNextPage = useCallback(() => {
		setCurrentPage((prev) => {
			if (prev < totalPages - 1) {
				return prev + 1
			}
			return prev
		})
	}, [totalPages])

	const handlePrevPage = useCallback(() => {
		setCurrentPage((prev) => {
			if (prev > 0) {
				return prev - 1
			}
			return prev
		})
	}, [])

	return {
		pokemons: getCurrentPokemons(),
		currentPage,
		totalPages,
		onNextPage: handleNextPage,
		onPrevPage: handlePrevPage,
		onSearch: handleSearch,
		searchQuery,
		searchResults,
		loading,
		canGoNext: searchResults !== null ? false : currentPage < totalPages - 1,
		canGoPrev: searchResults !== null ? false : currentPage > 0,
	}
}
