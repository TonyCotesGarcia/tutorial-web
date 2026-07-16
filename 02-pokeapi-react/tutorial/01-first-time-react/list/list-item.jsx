export function ListItem({ pokemon, onPokemonClick }) {
	function handleClick() {
		onPokemonClick(pokemon.id)
	}

	// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>Avoid this<explanation/>
	// biome-ignore lint/a11y/noStaticElementInteractions: <explanation>Avoid this<explanation/>
	return <div className="border rounded-xl px-2 text-sm shadow-sm h-20 flex items-center justify-center" onClick={handleClick}>{pokemon.id} - {pokemon.name}</div>
}
