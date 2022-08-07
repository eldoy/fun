require('./fun.js')

const hello = fun({ nisse: 'string' }, ({ nisse }) => {
  console.log({ nisse })
})

hello({ nisse: 'hello' })
