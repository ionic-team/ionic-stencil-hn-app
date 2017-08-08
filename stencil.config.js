exports.config = {
  bundles: [
    { components: ['news-list', 'news-container', 'comments-page', 'comments-list', 'fake-fetch'] }
  ],
  collections: [
    { name: '@ionic/core' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
