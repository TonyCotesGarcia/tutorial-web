import { useState } from "react"

export function Header() {
	const [searching, setSearching] = useState(false)

	function handleInput() {
		setSearching(true)
	}

	return <div>Header
		{searching && <p>Searching for: {searching}</p>}
		<input type="text" placeholder="Search Pokemon" onInput={handleInput} />
	</div>
}
