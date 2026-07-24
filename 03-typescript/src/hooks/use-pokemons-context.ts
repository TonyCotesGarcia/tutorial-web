import { useContext } from "react"
import { PokemonsContext } from "../contexts/pokemons-context"

export const usePokemonsContext = () => {
	const context = useContext(PokemonsContext)
	if (!context) {
		throw new Error("usePokemonsContext must be used within a PokemonsProvider")
	}

	return context
}
