const component = require('./component')
const componentTypes = require('./component.types')
const componentStories = require('./component.stories')
const componentTests = require('./component.test')
const index = require('./_index')

module.exports = [
  index,
  component,
  componentTypes,
  componentStories,
  componentTests,
]
