const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  important: true,
  theme: {
    colors: {
      green: 'var(--color-green)',
      purple: 'var(--color-purple)',
      red: 'var(--color-red)',
      blue: 'var(--color-blue)',
      grey: 'var(--color-grey)',
      yellow: 'var(--color-yellow)',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      transparent: 'var(--color-transparent)',
      dark: {
        green: 'var(--color-dark-green)',
        yellow: 'var(--color-dark-yellow)',
        red: 'var(--color-dark-red)',
        blue: 'var(--color-dark-blue)'
      },
      toast: {
        success: 'var(--color-dark-green)',
        warning: 'var(--color-dark-yellow)',
        error: 'var(--color-dark-red)',
        info: 'var(--color-dark-blue)'
      }
    },
    backgroundOpacity: {
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1'
    },
    fill: (theme) => theme('colors'),
    backgroundColor: (theme) => theme('colors'),
    textColor: (theme) => theme('colors'),
    borderColor: (theme) => theme('colors')
  },
  variants: {
    borderColor: ['hover', 'disabled'],
    backgroundColor: ['hover', 'disabled'],
    opacity: ['hover', 'disabled']
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls((decl) => {
            decl.important = true
          })
        })
      })
    })
  ]
}
