module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        '72': '22rem',
        '96': '24rem'
      }
    },
    screens: {
      'xs': '375px', //Phone
      'sm': '640px', //Tablet
      'md': '768px', //Tablet/Laptop
      'lg': '1024px', //Laptop
      'xl': '1280px' //Desktop
    }
  },
  variants: {},
  plugins: [],
}
