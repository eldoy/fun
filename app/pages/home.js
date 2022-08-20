const layout = require('../layouts/layout.js')

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
      h.button('Click', {
        onclick: async (btn) => {
          btn.disabled = true
          alert('what is going on?')
        }
      }),
      h.script([
        // State, automatically JSON.stringifies
        { state: { units } },

        // Page functions
        async function renderSpecialComponent() {
          console.log('Hello')
        }
      ])
    ]
  )
}
