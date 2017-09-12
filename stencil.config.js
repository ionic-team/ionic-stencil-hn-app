exports.config = {
  bundles: [
    { components: ['ionic-hn', 'story-list', 'news-page'] },
    { components: ['show-page'] },
    { components: ['jobs-page'] },
    { components: ['ask-page'] },
    { components: ['comments-page', 'comments-list']}
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
