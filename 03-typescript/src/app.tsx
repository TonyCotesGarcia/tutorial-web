import { PokemonDetails } from "./components/pokemon-details"
import { PokemonList } from "./components/pokemon-list"
import { ThemeSwitcher } from "./components/theme-switcher"
import { useGetPokemons } from "./hooks/use-get-pokemons"

export default function App() {
	const { pokemons } = useGetPokemons()
	if (!pokemons.length) return <div style={{ marginLeft: "auto" }}>Loading...</div>

	return (
		<>
			<ThemeSwitcher />
			<PokemonList />
			<PokemonDetails />
		</>
	)
}
