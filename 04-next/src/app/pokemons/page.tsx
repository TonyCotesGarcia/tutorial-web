import { Header } from "@/components/header"
import { PokemonsContainer } from "@/components/pokemons-container"

export default async function PokemonListPage() {
	return (
		<div className="min-h-screen bg-slate-100 p-4 md:p-8">
			<div className="min-h-[calc(100vh-4rem)] rounded-3xl border-2 border-slate-800 bg-white">
				<Header />
				<PokemonsContainer />
			</div>
		</div>
	)
}
