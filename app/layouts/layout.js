module.exports = function layout({ title, description }, content) {
  return h.html({ lang: 'en' }, [
    h.head([
      h.title(title),
      h.meta({ description }),
      h.script({ src: '/js/bundle.js' }),
      h.link({ href: '/js/bundle.css' })
    ]),
    h.body([
      h.main(content),
      h.footer([
        h.a(`Home`, { href: '/home' }),
        h.a(`About`, { href: '/about' })
      ]),
      h.script([
        // Layout functions, available in pages
        async function doSomethingGlobal() {
          console.log('Hello')
        }
      ])
    ])
  ])
}
