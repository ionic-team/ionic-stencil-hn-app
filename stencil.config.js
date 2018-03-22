const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass()
  ],
  globalStyle: 'src/global/variables.css',
  outputTargets: [
    {
      type: "www",
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}'
        ],
        globIgnores: [
          'build/app/svg/*.js'
        ]
      }
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
