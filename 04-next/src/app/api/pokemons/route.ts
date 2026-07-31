export function GET() {
	return new Response(JSON.stringify([
		{
			id: 1,
			name: "Bulbasaur",
			type: ["Grass", "Poison"]
		}]))
}
