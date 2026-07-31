import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
	// validate session
	const isValid = true
	if (!isValid) {
		return NextResponse.redirect(new URL("/auth/login", request.url))
	}




	return NextResponse.next()
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|.*\\.png$).*)',
	]
}
