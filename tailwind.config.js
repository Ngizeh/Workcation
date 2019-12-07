module.exports = {
  theme: {
    extend : {
      spacing : {
       '72' : '18rem',
       '80' : '20rem',
      },
      padding : {
        '5/6' : '83.3333333%'
      }
    },    
    customForms: theme => ({
      default: {
        radio: {
          borderColor : 'transparent',
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          color: theme('colors.indigo.500'),
        },
        select: {
          borderColor : 'transparent',
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.default'),
          backgroundColor: theme('colors.gray.700'),
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
          lineHeight: theme('lineHeight.snug'),
        },
        checkbox: {
          borderColor : 'transparent',
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          size: '1.5em',
        },
      },
    })
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
