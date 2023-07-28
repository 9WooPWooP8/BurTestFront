import { Telemetry } from "./types";

export const getTelemetry = async (): Promise<Array<Telemetry>> => {
	const response = await fetch('http://localhost:5055/Telemetry');
	let json = await response.json()
	return json
}
