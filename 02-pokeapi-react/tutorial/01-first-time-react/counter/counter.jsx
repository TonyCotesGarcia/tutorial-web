import { useState } from "react"
import { CounterView } from "./counter-view"

export function Counter() {
	const [counter, setCounter] = useState(0)

	function handleClick(number) {
		// setCounter(counter + number)
		setCounter(prevState => prevState + number)
	}

	return (
		<div className="p-4 flex gap-4 flex-col">
			<div className="flex gap-2 flex-col items-center justify-center">
				<CounterView counter={counter} />
				<div className="flex gap-2">
					<button type="button" className="size-12" onClick={() => handleClick(-1)}>-</button>
					<button type="button" className="size-12" onClick={() => handleClick(1)}>+</button>
				</div>
			</div>
		</div>
	)
}
