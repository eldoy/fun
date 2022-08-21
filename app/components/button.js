module.exports = function button({ text = 'Click' }) {
  return h.button(text, {
    class: 'hello',
    onclick: async (btn) => {
      btn.disabled = true
      alert('what is going on?')
    }
  })
}
