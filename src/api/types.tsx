export interface Telemetry {
  wellCompanyName: string
	wellId: number
	wellName: string
  id: number
	depth: number
	datetime: string
}

export interface Well {
  companyName: string
	id: number
	name: string
	active: 0 | 1
	telemetryDepth: number
	telemetryDateTime: string
}

