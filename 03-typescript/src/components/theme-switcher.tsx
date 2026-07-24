import { useTheme } from "../hooks/use-theme"

export function ThemeSwitcher() {
	const { theme, handleSwitchTheme } = useTheme()

	return <button type="button" onClick={handleSwitchTheme}>
		Switch to {theme === "light" ? "dark" : "light"} theme
	</button>
}
