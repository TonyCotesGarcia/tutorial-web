import { PokemonCard } from "./pokemon-card"

export function PokemonList({ pokemons, loading, searchResults }) {
	if (loading) {
		return (
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<p className="col-span-full text-center text-slate-500">Buscando Pokémon...</p>
			</div>
		)
	}

	if (searchResults !== null && pokemons.length === 0) {
		return (
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<p className="col-span-full rounded-lg border border-amber-400 bg-amber-100 p-4 text-center text-amber-700">
					No se encontró ningún Pokémon con ese nombre o ID
				</p>
			</div>
		)
	}

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	)
}
