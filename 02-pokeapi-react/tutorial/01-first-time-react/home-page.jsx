import { Header } from "./header"
import { List } from "./list/list"

export function HomePage() {
	return (
		<div className="flex flex-col gap-4">
			<Header />
			<List />
		</div>
	)
}
