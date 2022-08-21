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
