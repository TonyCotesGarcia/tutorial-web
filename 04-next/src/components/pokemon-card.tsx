interface Props {
	pokemon: any
}

export function PokemonCard({ pokemon }: Props) {
	console.log(pokemon, "pokemon")

	// const types = pokemon.types
	// 	.map((item: any) => item.type.name)
	// 	.join(", ")

	// const abilities = pokemon.abilities
	// 	.filter((item: any) => !item.is_hidden)
	// 	.map((item: any) => item.ability.name)
	// 	.join(", ")

	// const stats = pokemon.stats
	// 	.map((item: any) => `
	// 		<li>
	// 			<span class="capitalize">${item.stat.name}</span>:
	// 			<strong>${item.base_stat}</strong>
	// 		</li>
	// 	`)
	// 	.join("")

	// const image =
	// 	pokemon.sprites.other["official-artwork"].front_default ||
	// 	pokemon.sprites.front_default

	const pokemonId = String(pokemon.id).padStart(2, "0")

	return (
		<article className="rounded-3xl border-2 border-slate-800 bg-slate-50 p-5 shadow-md">
			{/* <img
				src={image}
				alt={pokemon.name}
				className="mx-auto h-36 w-36 object-contain"
			/> */}

			<h2 className="mt-2 text-center text-xl font-bold capitalize text-blue-900">
				#{pokemonId} {pokemon.name}
			</h2>

			{/* <div className="mt-4 space-y-2 text-sm text-slate-700">
				<p>
					<strong>Tipo:</strong> <span className="capitalize">{types}</span>
				</p>
				<p>
					<strong>Altura:</strong> {pokemon.height / 10} m
				</p>
				<p>
					<strong>Peso:</strong> {pokemon.weight / 10} kg
				</p>
				<p>
					<strong>Habilidades:</strong> <span className="capitalize">{abilities}</span>
				</p>

				<div>
					<strong>Estadísticas:</strong>
					<ul
						className="mt-1 grid grid-cols-2 gap-x-2 text-xs"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> No html injected </explanation>
						dangerouslySetInnerHTML={{ __html: stats }}
					/>
				</div> 
			</div>*/}
		</article>
	)
}
