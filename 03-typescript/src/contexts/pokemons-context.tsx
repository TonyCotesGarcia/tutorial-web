import { createContext } from "react"
import { useGetPokemons } from "../hooks/use-get-pokemons"
import type { Pokemon } from "../types"

interface PokemonsContextValue {
	pokemons: Pokemon[]
}

export const PokemonsContext = createContext<PokemonsContextValue | null>(null)

interface Props extends React.PropsWithChildren { }

export const PokemonsProvider = ({ children }: Props) => {
	const { pokemons } = useGetPokemons()

	return (
		<PokemonsContext.Provider value={{ pokemons }}>
			{children}
		</PokemonsContext.Provider>
	)
}
