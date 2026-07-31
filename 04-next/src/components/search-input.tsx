import { useState } from "react"


interface Props {
	onSearch: (query: string) => void
	isSearching: boolean
}

export function SearchInput({ onSearch, isSearching }: Props) {
	const [query, setQuery] = useState("")

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setQuery(value)
		onSearch(value)
	}

	return (
		<section className="mb-7 flex items-center justify-center">
			<div className="flex relative w-full items-center justify-center max-w-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-search-icon lucide-search absolute left-3"
				>
					<title>Icono search</title>
					<path d="m21 21-4.34-4.34" />
					<circle cx="11" cy="11" r="8" />
				</svg>
				<input
					value={query}
					onChange={handleInputChange}
					name="pokemonSearch"
					type="text"
					placeholder="Search Pokemon by name or Pokedex number"
					className="w-full max-w-lg rounded-lg border-2 border-slate-800 px-4 py-2 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 pl-10"
				/>
			</div>
		</section>
	)
}
