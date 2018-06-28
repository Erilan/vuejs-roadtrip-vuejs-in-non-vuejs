let Encore = require('@symfony/webpack-encore');

Encore
  // the project directory where all compiled assets will be stored
  .setOutputPath('public/build/')

  // the public path used by the web server to access the previous directory
  .setPublicPath('/build')

  // will create public/build/app.js and public/build/app.css
  .addEntry('app', './assets/js/app.js')
  .addStyleEntry('main', './assets/css/main.scss')

  // enable source maps during development
  .enableSourceMaps(!Encore.isProduction())

  // empty the outputPath dir before each build
  .cleanupOutputBeforeBuild()

  // allow sass/scss files to be processed
  .enableSassLoader()

  // enable .vue files processing
  .enableVueLoader()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();