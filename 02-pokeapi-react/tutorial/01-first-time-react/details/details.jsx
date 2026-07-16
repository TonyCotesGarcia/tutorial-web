
export function Details({ pokemon }) {
	if (pokemon === null) {
		return <div>No pokemon selected</div>
	}
	if (!pokemon) {
		return <div>Pokemon not found</div>
	}

	return <div>Details: {pokemon?.name}</div>
}
