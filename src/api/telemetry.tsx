export const getTelemetry = async () => {
	const response = await fetch('http://localhost:5055/Telemetry');
	let json = await response.json()
	return json
}
