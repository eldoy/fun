const types = require('./types.js')

// Use this global function to
global.fun = function (params, callback) {
  for (const name in params) {
    const type = params[name]
    if (typeof types[type] != 'function') {
      throw new Error(`'${params[name]}' is not a valid type`)
    }
  }

  return function (args) {
    for (const name in args) {
      const type = params[name]
      if (!type) {
        throw new Error(`'${name}' is not defined`)
      }

      let valid
      try {
        valid = types[type](args[name])
      } catch (e) {
        throw e
      }

      if (!valid) {
        throw new Error(
          `'${name}' with value {${args[name]}}(${typeof args[
            name
          ]}) should be ${params[name]}`
        )
      }
    }
    callback(args)
  }
}
