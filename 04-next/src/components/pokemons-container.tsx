"use client"

import { useGetPokemons } from "@/hooks/use-get-pokemons"
import { PaginationControls } from "./pagination-controls"
import { PokemonList } from "./pokemon-list"
import { SearchInput } from "./search-input"

export function PokemonsContainer() {
	const {
		pokemons,
		onNextPage,
		onPrevPage,
		onSearch,
		searchResults,
		loading,
		canGoNext,
		canGoPrev,
		error,
		errorMessage
	} = useGetPokemons()

	return (
		<section className="mx-auto mt-8 max-w-7xl">
			<SearchInput onSearch={onSearch} isSearching={loading} />

			<section id="list-section">
				<PokemonList
					pokemons={pokemons}
					loading={loading}
					searchResults={searchResults}
					error={error}
					errorMessage={errorMessage}
				/>
			</section>

			<PaginationControls
				onPrev={onPrevPage}
				onNext={onNextPage}
				canGoPrev={canGoPrev}
				canGoNext={canGoNext}
			/>
		</section>
	)
}
