export function getReportPath(environment: string, testCase: string): string {
  return `./chrome-tracing-report/${environment}/${testCase}/${crypto.randomUUID()}.json`
}
