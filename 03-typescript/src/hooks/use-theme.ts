import { useAppStore } from "../stores/app-store"

export const useTheme = () => {
	const { theme, setTheme } = useAppStore()

	function handleSwitchTheme() {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return { theme, handleSwitchTheme }
}
