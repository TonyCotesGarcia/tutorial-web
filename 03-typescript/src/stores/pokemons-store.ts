import { create } from 'zustand'
import type { Pokemon } from '../types'

interface PokemonsStore {
	pokemons: Pokemon[]

	setPokemons: (pokemons: Pokemon[]) => void
}

export const usePokemonsStore = create<PokemonsStore>((set) => ({
	pokemons: [],

	setPokemons: (pokemons: Pokemon[]) => set({ pokemons }),
}))
