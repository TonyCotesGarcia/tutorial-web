import { useGetPokemons } from "../hooks/use-get-pokemons"
import { useTheme } from "../hooks/use-theme"

export function PokemonType() {
	const { theme } = useTheme()
	const { pokemons } = useGetPokemons()

	const types = Array.from(new Set(pokemons.flatMap((pokemon) => pokemon.type)))

	const typeColors: Record<string, string> = {
		normal: theme === "light" ? "#A8A77A" : "#6D6D4E",
		fire: theme === "light" ? "#EE8130" : "#9C531F",
		water: theme === "light" ? "#6390F0" : "#445E9C",
		electric: theme === "light" ? "#F7D02C" : "#A1871F",
		grass: theme === "light" ? "#7AC74C" : "#4E8234",
		ice: theme === "light" ? "#96D9D6" : "#638D8D",
		fighting: theme === "light" ? "#C22E28" : "#7D1F1A",
		poison: theme === "light" ? "#A33EA1" : "#682A68",
		ground: theme === "light" ? "#E2BF65" : "#927D44",
		flying: theme === "light" ? "#A98FF0" : "#6D5E9C",
		psychic: theme === "light" ? "#F95587" : "#A13959",
		bug: theme === "light" ? "#A6B91A" : "#6D7815"
	}

	return (
		<div className="flex gap-2">
			{types.map((type) => (
				<span
					key={type}
					style={{ backgroundColor: typeColors[type] }}
					className="px-2 py-1 rounded text-white"
				>
					{type}
				</span>
			))}
		</div>
	)
}
