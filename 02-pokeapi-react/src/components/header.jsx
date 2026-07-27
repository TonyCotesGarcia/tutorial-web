
export function Header() {
	return (
		<header className="rounded-t-[21px] border-b border-slate-800 bg-blue-600 p-6 text-blue-100 shadow-lg md:p-8">
			<div className="flex items-start justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold md:text-4xl">Pokemons</h1>
					<h3 className="mt-5 text-sm font-semibold md:text-base">
						All the Pokémon data you'll ever need in one place, easily accessible through a modern free open-source RESTful API.
					</h3>
				</div>
			</div>
		</header>
	)
}
