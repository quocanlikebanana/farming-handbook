import { NextRequest, NextResponse } from "next/server";
import { assignPathName } from "./middlewares/assignPathName";

export function middleware(request: NextRequest) {
	const response = assignPathName(request);
	return response;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

