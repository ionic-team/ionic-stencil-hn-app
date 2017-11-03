exports.config = {
  bundles: [
    { components: ['ionic-hn', 'story-list', 'news-page', 'app-routes'] },
    { components: ['show-page'] },
    { components: ['jobs-page'] },
    { components: ['ask-page'] },
    { components: ['comments-page', 'comments-list']}
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' }
  ],
  serviceWorker: {
    globPatterns: [
      '**/*.{js,css,json,html,ico,png}'
    ]
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
