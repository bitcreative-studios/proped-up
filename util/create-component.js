require('colors')
const fs = require('fs')
const path = require('path')
const templates = require('./templates')

const componentName = process.argv[2]

if (!componentName) {
  console.error('Please supply a valid component name'.red)
  process.exit(1)
}

console.log('Creating Component Templates with name: ' + componentName)

const componentDirectory = `./src/${componentName}`

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red)
  process.exit(1)
}

fs.mkdirSync(componentDirectory)

const generatedTemplates = templates.map(template => template(componentName))

generatedTemplates.forEach(template => {
  fs.writeFileSync(
    `${componentDirectory}/${template.filename}${template.extension}`,
    template.content
  )
})
console.log('Successfully created component under: '.green + componentDirectory)

const newComponentExportString = `export { default as ${componentName} } from './${componentName}';`
const libraryEntryFile = path.resolve(__dirname, '..', 'src', 'index.ts')

fs.appendFile(libraryEntryFile, newComponentExportString, err => {
  if (err) throw err
  console.log('Added component to entry file'.green)
})
