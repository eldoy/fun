require('./fun.js')

// Named function parameters, return type undefined
const function1 = fun({ nisse: 'string' }, ({ nisse }) => {
  console.log({ nisse })
})

// Named function parameters, with return type string
const function2 = fun({ nisse: 'string' }, 'string', ({ nisse }) => {
  console.log({ nisse })
  return 'hello'
})

// Named function parameters, with return type string
const function3 = fun({ nisse: 'string' }, ['string'], ({ nisse }) => {
  console.log({ nisse })
  return 'hello'
})

// Anonymous function parameters, return type undefined
const function4 = fun('string', 'number', 'date', (a, b, c) => {
  console.log(a, b, c)
})

// Anonymous function parameters, return type string
const function5 = fun(['string', 'number', 'date'], 'string', (a, b, c) => {
  console.log(a, b, c)
  return 'hello'
})

// Anonymous function parameters, return type string, alternative syntax
const function51 = fun('string, number, date', 'string, number', (a, b, c) => {
  console.log(a, b, c)
  return 'hello'
})

// Anonymous function parameters, return type [string, number]
const function6 = fun(
  ['string', 'number', 'date'],
  ['string', 'number'],
  (a, b, c) => {
    console.log(a, b, c)
    return ['hello', 1]
  }
)

// Named function parameters, return type [string, number]
const function7 = fun(
  { a: 'string', b: 'number', c: 'date' },
  ['string', 'number'],
  (a, b, c) => {
    console.log(a, b, c)
    return ['hello', 1]
  }
)

// Named function parameters, named return types
const function8 = fun(
  { a: 'string', b: 'number', c: 'date' },
  { count: 'number', results: 'Unit[]' },
  (a, b, c) => {
    console.log(a, b, c)
    const units = [{ name: 'a' }, { name: 'b' }]
    return { count: units.length, results: units }
  }
)

// Create functions that prevents runtime errors
const [result, err] = fun(['string'], 'string', (a) => {
  console.log(a)
  // This error is caught in 'fun'
  throw Error('something bad')
  return 'hello'
})

// Error object could contain the validation results:
// err.validations for use with API's
if (err) {
  return console.log('Handling error')
}

console.log('Do normal stuff with', result)

// Simplest is always name variables
// Create functions that prevents runtime errors
const [result2, err2] = fun({ a: 'string' }, 'string[]', (a) => {
  console.log(a)
  // This error is caught in 'fun'
  throw Error('something bad')
  return 'hello'
})

// or with string?
const [result3, err3] = fun('a: string, b: number -> [string, string]', (a) => {
  console.log(a)
  // This error is caught in 'fun'
  throw Error('something bad')
  return 'hello'
})
