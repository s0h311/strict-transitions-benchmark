// @ts-check

import { existsSync, globSync, readFileSync, writeFileSync } from 'fs'

const outputPath = process.argv[2]
const note = process.argv[3]

const ignorePatterns = ['node_modules/', '.vscode/', '.idea/', 'out/', 'dist/', '.out/', '.dist']

function getStatsAsCsvRow(fileType) {
  const files = globSync(`**/*.${fileType}`)
	.filter((file) => {
	  return ignorePatterns.every((pattern) => !file.includes(pattern))
	})

  const loc = files
    .map((file) => {
      const content = readFileSync(file, { encoding: 'utf-8' })

      return content.search('\n')
    })
    .reduce((a, b) => a + b, 0)

  return `${fileType},${files.length},${loc}`
}

const timestamp = new Date()

for (const fileType of ['js', 'ts', 'jsx', 'tsx', 'vue', 'json']) {
  updateCsvReport(getStatsAsCsvRow(fileType), timestamp.toISOString())
}

function updateCsvReport(line, timestamp) {
  if (!outputPath) {
    return
  }

  const headRow = 'type,count,loc,timestamp,note\n'

  if (!existsSync(outputPath)) {
    writeFileSync(outputPath, headRow, { encoding: 'utf-8' })
  }

  let content = readFileSync(outputPath, { encoding: 'utf-8' })

  if (!content) {
    content += headRow
  }

  content += `${line},${timestamp},${note ?? ''}\n`

  writeFileSync(outputPath, content, { encoding: 'utf-8' })
}
