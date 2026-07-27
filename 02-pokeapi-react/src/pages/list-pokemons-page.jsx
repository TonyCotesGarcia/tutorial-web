import { Header } from "../components/header"
import { PaginationControls } from "../components/pagination-controls"
import { PokemonList } from "../components/pokemon-list"
import { SearchInput } from "../components/search-input"
import { useGetPokemons } from "../hooks/use-get-pokemons"

export function ListPokemonsPage() {
	const { pokemons, onNextPage, onPrevPage, onSearch, searchResults, loading, canGoNext, canGoPrev } = useGetPokemons()

	return (
		<div className="min-h-screen bg-slate-100 p-4 md:p-8">
			<div className="min-h-[calc(100vh-4rem)] rounded-3xl border-2 border-slate-800 bg-white">
				<Header />

				<main className="mx-auto mt-8 max-w-7xl">
					<SearchInput onSearch={onSearch} isSearching={loading} />

					<section id="list-section">
						<PokemonList pokemons={pokemons} loading={loading} searchResults={searchResults} />
					</section>

					<PaginationControls onPrev={onPrevPage} onNext={onNextPage} canGoPrev={canGoPrev} canGoNext={canGoNext} />
				</main>
			</div>
		</div>
	)
}
