require('@google-cloud/debug-agent').start({ allowExpressions: true });

const functions = require('firebase-functions');
const fetch = require('node-fetch');

exports.hn = functions.https.onRequest((request, response) => {
  const path = request.path.slice(4);
  // TODO(dfreedm): is there some static prop we can use?
  let query = '';
  for (let p in request.query) {
    query = query || '?';
    query += `${p}=${request.query[p]}`;
  }
  const url = `https://node-hnapi.herokuapp.com/${path}${query}`;
  fetch(url).then(resp => {
    resp.json().then(json => {
      response.set('Cache-Control', 'public, max-age=300, s-maxage=300, stale-while-revalidate=6000');
      response.send(json);
    });
  });
});
