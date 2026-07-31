import { Button } from "./base-ui/button"

interface Props {
	onPrev: () => void
	onNext: () => void
	canGoPrev: boolean
	canGoNext: boolean
}

export function PaginationControls({ onPrev, onNext, canGoPrev, canGoNext }: Props) {
	return (
		<section className="mt-10 flex items-center justify-between pb-6 md:pb-10">
			<Button
				onClick={onPrev}
				disabled={!canGoPrev}
				type="button"
				className="rounded-lg border border-blue-600 bg-white text-blue-600 px-5 py-2 font-semibold shadow transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
			>
				Prev
			</Button>

			<Button
				onClick={onNext}
				disabled={!canGoNext}
				type="button"
				className="rounded-lg border bg-blue-600 px-5 py-2 font-semibold text-blue-100 shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
			>
				Next
			</Button>
		</section>
	)
}
