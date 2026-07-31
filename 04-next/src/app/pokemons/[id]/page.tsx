import { notFound } from "next/navigation"

interface Props {
	params: Promise<{ id: string }>
}

export default async function PokemonDetailsPage({ params }: Props) {
	const { id } = await params

	notFound()

	return <p>Hola Pokemon {id}</p>
}

