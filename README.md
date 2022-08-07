# Fun.js

Functional typed Javascript experiment that shows how you could write total pure functions with runtime type checking against self defined types.

Self defined types using Javascript functions are extremely versatile and powerful as they can literally be anything you want, and is not limited to your language.

### Usage

Define your types in `./types.js`
```js
const types = {}

types.string = function (value) {
  return typeof value == 'string'
}

types.number = function (value) {
  return typeof value == 'number'
}

module.exports = types
```

Include `fun.js` and run the app:

```js
require('./fun.js')

const hello = fun({ nisse: 'string' }, ({ nisse }) => {
  console.log({ nisse })
})

hello({ nisse: 'hello' })
```

The function `hello` will crash if the passed arguments are of the wrong type, or if they aren't defined.

Now could we add editor support for this to check the type before we save the file?

ISC Licensed. Enjoy!
