const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.hn = functions.https.onRequest((request, response) => {
  response.send([{"id":14931004,"title":"Martin Shkreli is found guilty of securities fraud","points":380,"user":"fmihaila","time":1501872803,"time_ago":"3 hours ago","comments_count":359,"type":"link","url":"https://www.washingtonpost.com/news/business/wp/2017/08/04/martin-shkreli-jury-enters-fifth-day-of-deliberations/","domain":"washingtonpost.com"},{"id":14930895,"title":"Arrest of WannaCry researcher sends chill through security community","points":183,"user":"rbanffy","time":1501872051,"time_ago":"3 hours ago","comments_count":132,"type":"link","url":"http://thehill.com/policy/cybersecurity/345337-wannacry-hero-chills-security-community","domain":"thehill.com"},{"id":14930825,"title":"Airport lounges will let anyone in, provided you can fake a QR code","points":92,"user":"rbanffy","time":1501871597,"time_ago":"3 hours ago","comments_count":67,"type":"link","url":"https://boingboing.net/2016/08/05/airport-lounges-will-let-anyon.html","domain":"boingboing.net"},{"id":14932046,"title":"Apple Plans to Release a Cellular-Capable Watch to Break iPhone Ties","points":18,"user":"calvin_c","time":1501879125,"time_ago":"an hour ago","comments_count":9,"type":"link","url":"https://www.bloomberg.com/news/articles/2017-08-04/apple-said-to-ready-cellular-capable-watch-to-break-iphone-ties","domain":"bloomberg.com"},{"id":14929988,"title":"US Supreme Court will require electronic filings and post them free online","points":102,"user":"scott00","time":1501865394,"time_ago":"5 hours ago","comments_count":19,"type":"link","url":"https://www.washingtonpost.com/news/the-switch/wp/2017/08/03/the-supreme-court-has-finally-embraced-the-21st-century/","domain":"washingtonpost.com"},{"id":14931466,"title":"Data Driven Weight Loss: Losing 66 pounds and gaining a six pack in 8 months","points":38,"user":"dd367","time":1501875770,"time_ago":"2 hours ago","comments_count":31,"type":"link","url":"http://debarghyadas.com/writes/transformation/","domain":"debarghyadas.com"},{"id":14929220,"title":"Roman Ruins Found in France Are Called ‘Exceptional’","points":179,"user":"whocansay","time":1501859250,"time_ago":"7 hours ago","comments_count":108,"type":"link","url":"https://www.nytimes.com/2017/08/02/world/europe/france-roman-neighborhood-sainte-colombe-vienne.html","domain":"nytimes.com"},{"id":14931990,"title":"Roman Britain in Black and White","points":11,"user":"DanBC","time":1501878708,"time_ago":"an hour ago","comments_count":6,"type":"link","url":"https://www.the-tls.co.uk/roman-britain-black-white/","domain":"the-tls.co.uk"},{"id":14929223,"title":"Prodigy: A new tool for radically efficient machine teaching","points":181,"user":"Young_God","time":1501859267,"time_ago":"7 hours ago","comments_count":49,"type":"link","url":"https://explosion.ai/blog/prodigy-annotation-tool-active-learning","domain":"explosion.ai"},{"id":14932341,"title":"Hazel: Lighweight update server for Electron apps","points":7,"user":"nozzlegear","time":1501881337,"time_ago":"24 minutes ago","comments_count":0,"type":"link","url":"https://github.com/zeit/hazel","domain":"github.com"},{"id":14926141,"title":"The Man Who Picked Victorian London's Unpickable Lock","points":40,"user":"benbreen","time":1501817787,"time_ago":"18 hours ago","comments_count":8,"type":"link","url":"http://mentalfloss.com/article/501820/man-who-picked-victorian-londons-unpickable-lock","domain":"mentalfloss.com"},{"id":14930017,"title":"Grasping Robots Compete to Rule Amazon’s Warehouses","points":57,"user":"rmason","time":1501865645,"time_ago":"5 hours ago","comments_count":28,"type":"link","url":"https://www.wired.com/story/grasping-robots-compete-to-rule-amazons-warehouses/","domain":"wired.com"},{"id":14932069,"title":"Triplebyte (YC S15) Is Hiring an Account Manager","points":null,"user":null,"time":1501879340,"time_ago":"an hour ago","comments_count":0,"type":"job","url":"https://jobs.lever.co/triplebyte/a8647ccf-83e3-4f48-b9be-d396323926e2","domain":"jobs.lever.co"},{"id":14927837,"title":"The slow currentTimeMillis()","points":257,"user":"jsnell","time":1501845311,"time_ago":"10 hours ago","comments_count":45,"type":"link","url":"http://pzemtsov.github.io/2017/07/23/the-slow-currenttimemillis.html","domain":"pzemtsov.github.io"},{"id":14928573,"title":"Building account systems","points":30,"user":"jsnell","time":1501854282,"time_ago":"8 hours ago","comments_count":3,"type":"link","url":"https://blog.plan99.net/building-account-systems-f790bf5fdbe0","domain":"blog.plan99.net"},{"id":14929406,"title":"Learn GraphQL with GitHub","points":99,"user":"happy-go-lucky","time":1501860548,"time_ago":"6 hours ago","comments_count":15,"type":"link","url":"https://github.com/blog/2412-learn-graphql-with-github","domain":"github.com"},{"id":14929955,"title":"Launch HN: AssemblyAI (YC S17) – API for customizable speech recognition","points":20,"user":"dylanbfox","time":1501865115,"time_ago":"5 hours ago","comments_count":10,"type":"link","url":"item?id=14929955"},{"id":14930317,"title":"Ask HN: What tech that's right around the corner are you most excited about?","points":66,"user":"Kevin_S","time":1501867829,"time_ago":"4 hours ago","comments_count":92,"type":"ask","url":"item?id=14930317"}]);
})