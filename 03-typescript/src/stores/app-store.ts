import { create } from 'zustand'
import type { Theme } from '../types'

interface AppStore {
	theme: Theme

	setTheme: (theme: Theme) => void
}

export const useAppStore = create<AppStore>((set) => ({
	theme: "light",

	setTheme: (theme: Theme) => set({ theme }),
}))
