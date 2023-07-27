export const getWells = async () => {
	const response = await fetch('http://localhost:5055/Well/detailed/active');
	let json = response.json();
	return json
}
