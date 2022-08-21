const layout = require('../layouts/layout.js')
const button = require('../components/button.js')

module.exports = async function ({ db }) {
  var units = db('units').find()

  return layout(
    {
      title: `hello`,
      description: `What is going on?`
    },
    [
      h.h1(`What is going on?`),
      h.p(`I don't know, what's up with you?`),
      button({ text: 'Save' }),
      h.script([
        // State, automatically JSON.stringifies
        // How to make it local to the page? Wrap in function?
        // Make it reactive?
        { state: { units } },

        // Page functions
        async function renderSpecialComponent() {
          console.log('Hello')
        }
      ])
    ]
  )
}

/* Concept:
4 (or maybe just 3) layers:
0. $ - Haka or similar
  - functions for manipulation of DOM and elements
1. app functions and state, exists through all pages
  - must be persisted through localStorage, sessionStorage or cookie
2. page functions and state
  - exists only on the current page, is not persisted
  - uses sessionStorage
3. layout functions and state (how is this different from app?)
  - may not be necessary, but can have functions for the current layout only
    - dialog close and open
    - store paths
    - things to register for every page

so we call functions like this:

app.someFunction()
page.somePageFunction()

use state like this:
page.state.units
page.state.units = units

app.state.email
*/
