import { headers } from "next/headers";

export default async function getPathname(): Promise<string> {
	const pathname = await new Promise<string>(async (resolve) => {
		const headersList = await headers();
		// Retrieve the pathname from the headers
		// The header 'x-next-pathname' is set in the middleware
		// and contains the current pathname.
		resolve(headersList.get("x-next-pathname") || '');
	});
	return pathname;
}
