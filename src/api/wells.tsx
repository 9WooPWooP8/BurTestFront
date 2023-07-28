import { Well } from "./types";

export const getWells = async (): Promise<Array<Well>>  => {
	const response = await fetch('http://localhost:5055/Well/detailed/active');
	let json = response.json();
	return json
}
