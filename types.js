const types = {}

types.string = function (value) {
  return typeof value == 'string'
}

types.number = function (value) {
  return typeof value == 'number'
}

module.exports = types
