const sass = require('@stencil/sass');

exports.config = {
  serviceWorker: {
    globPatterns: [
      '**/*.{js,css,json,html,ico,png}'
    ],
    globIgnores: [
      'build/app/svg/*.js'
    ]
  },
  plugins: [
    sass()
  ],
  globalStyle: 'src/global/variables.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
