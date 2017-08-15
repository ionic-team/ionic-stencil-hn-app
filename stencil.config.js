exports.config = {
  bundles: [
    { components: ['news-list', 'news-container'] },
    { components: ['comments-page', 'comments-list']}
  ],
  collections: [
    { name: '@ionic/core' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
