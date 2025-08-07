import { NextRequest, NextResponse } from "next/server";

export function assignPathName(request: NextRequest) {
	const headers = new Headers(request.headers);
	headers.set("x-next-pathname", request.nextUrl.pathname);
	return NextResponse.next({ headers });
}

