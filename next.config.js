const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    latex: true
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withNextra({
    images: {
        unoptimized: true,
    }
})