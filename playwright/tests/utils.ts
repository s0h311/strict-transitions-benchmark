export function getReportPath(environment: string): string {
  return `./chrome-tracing-report/${environment}/${getId()}-${environment}.json`
}

function getId(): string {
  const now = new Date()

  const array = new Uint32Array(1)
  crypto.getRandomValues(array)

  return `${now.toISOString()}-${array[0]}`
}
