Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-card.wp.ion-card-content.wp.ion-card-header.wp.ion-card-title.wp",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var Card = (function () {
    function Card() {
    }
    Card.prototype.render = function () {
        return h(this, Ionic.theme(this, 'card'));
    };
    return Card;
}());

var CardContent = (function () {
    function CardContent() {
    }
    CardContent.prototype.render = function () {
        return h(this, Ionic.theme(this, 'card-content'));
    };
    return CardContent;
}());

var CardHeader = (function () {
    function CardHeader() {
    }
    CardHeader.prototype.render = function () {
        return h(this, Ionic.theme(this, 'card-header'));
    };
    return CardHeader;
}());

var CardTitle = (function () {
    function CardTitle() {
    }
    CardTitle.prototype.render = function () {
        return h(this, Ionic.theme(this, 'card-title'));
    };
    return CardTitle;
}());

exports['ion-card'] = Card;
exports['ion-card-content'] = CardContent;
exports['ion-card-header'] = CardHeader;
exports['ion-card-title'] = CardTitle;
},


/***************** ion-card.wp *****************/
[
/** ion-card.wp: [0] tagName **/
'ion-card',

/** ion-card.wp: [1] methods **/
0 /* no methods */,

/** ion-card.wp: [2] listeners **/
0 /* no listeners */,

/** ion-card.wp: [3] watchers **/
0 /* no watchers */,

/** ion-card.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-card.wp: [6] styles **/
'/********** card.wp.scss **********/\n' + 
'\n' + 
'ion-card {\n' + 
'  display: block;\n' + 
'  overflow: hidden;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'ion-card img {\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'}\n' + 
'\n' + 
'.card-wp {\n' + 
'  margin: 8px 8px 8px 8px;\n' + 
'  width: calc(100% - 16px);\n' + 
'  border-radius: 1px;\n' + 
'  font-size: 1.4rem;\n' + 
'  background: #fff;\n' + 
'  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);\n' + 
'}\n' + 
'\n' + 
'.card-wp ion-list {\n' + 
'  margin-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.card-wp > .item:last-child,\n' + 
'.card-wp > .item:last-child .item-inner,\n' + 
'.card-wp > .item-wrapper:last-child .item {\n' + 
'  border-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.card-wp .item-wp.item-block .item-inner {\n' + 
'  border: 0;\n' + 
'}\n' + 
'\n' + 
'.card-header-wp + .card-content-wp,\n' + 
'.card-wp .item + .card-content-wp {\n' + 
'  padding-top: 0;\n' + 
'}\n' + 
'\n' + 
'.card .note-wp {\n' + 
'  font-size: 1.3rem;\n' + 
'}\n' + 
'\n' + 
'.card-wp h1 {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 2.4rem;\n' + 
'  font-weight: normal;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp h2 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.6rem;\n' + 
'  font-weight: normal;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp h3,\n' + 
'.card-wp h4,\n' + 
'.card-wp h5,\n' + 
'.card-wp h6 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: normal;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp p {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: normal;\n' + 
'  line-height: 1.5;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp + ion-card {\n' + 
'  margin-top: 0;\n' + 
'}\n' + 
'\n' + 
'.card-wp .text-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary h1,\n' + 
'.card-wp-primary h2,\n' + 
'.card-wp-primary h3,\n' + 
'.card-wp-primary h4,\n' + 
'.card-wp-primary h5,\n' + 
'.card-wp-primary h6,\n' + 
'.card-wp-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .text-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .text-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .text-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .text-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .text-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp .text-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary h1,\n' + 
'.card-wp-secondary h2,\n' + 
'.card-wp-secondary h3,\n' + 
'.card-wp-secondary h4,\n' + 
'.card-wp-secondary h5,\n' + 
'.card-wp-secondary h6,\n' + 
'.card-wp-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .text-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .text-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .text-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .text-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .text-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp .text-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger h1,\n' + 
'.card-wp-danger h2,\n' + 
'.card-wp-danger h3,\n' + 
'.card-wp-danger h4,\n' + 
'.card-wp-danger h5,\n' + 
'.card-wp-danger h6,\n' + 
'.card-wp-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .text-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .text-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .text-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .text-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .text-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp .text-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light h1,\n' + 
'.card-wp-light h2,\n' + 
'.card-wp-light h3,\n' + 
'.card-wp-light h4,\n' + 
'.card-wp-light h5,\n' + 
'.card-wp-light h6,\n' + 
'.card-wp-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .text-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .text-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .text-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .text-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .text-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp .text-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark h1,\n' + 
'.card-wp-dark h2,\n' + 
'.card-wp-dark h3,\n' + 
'.card-wp-dark h4,\n' + 
'.card-wp-dark h5,\n' + 
'.card-wp-dark h6,\n' + 
'.card-wp-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .text-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .text-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .text-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .text-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .text-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-content.wp *****************/
[
/** ion-card-content.wp: [0] tagName **/
'ion-card-content',

/** ion-card-content.wp: [1] methods **/
0 /* no methods */,

/** ion-card-content.wp: [2] listeners **/
0 /* no listeners */,

/** ion-card-content.wp: [3] watchers **/
0 /* no watchers */,

/** ion-card-content.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-content.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-card-content.wp: [6] styles **/
'/********** card-content.wp.scss **********/\n' + 
'\n' + 
'ion-card-content {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.card-content-wp {\n' + 
'  padding: 13px 16px 13px 16px;\n' + 
'  font-size: 1.4rem;\n' + 
'  line-height: 1.5;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-content-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-content-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-content-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-content-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-content-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-content-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-content-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-content-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-content-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-content-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-content-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-content-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-content-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-content-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-content-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-content-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-content-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-content-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-content-wp {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-content-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-content-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-content-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-content-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-content-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-content-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-content-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-content-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-content-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-content-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-content-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-header.wp *****************/
[
/** ion-card-header.wp: [0] tagName **/
'ion-card-header',

/** ion-card-header.wp: [1] methods **/
0 /* no methods */,

/** ion-card-header.wp: [2] listeners **/
0 /* no listeners */,

/** ion-card-header.wp: [3] watchers **/
0 /* no watchers */,

/** ion-card-header.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-header.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-card-header.wp: [6] styles **/
'/********** card-header.wp.scss **********/\n' + 
'\n' + 
'ion-card-header {\n' + 
'  display: block;\n' + 
'  overflow: hidden;\n' + 
'  visibility: inherit !important;\n' + 
'  text-overflow: ellipsis;\n' + 
'  white-space: nowrap;\n' + 
'}\n' + 
'\n' + 
'.card-header-wp {\n' + 
'  padding: 16px;\n' + 
'  font-size: 1.6rem;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-header-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-header-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-header-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-header-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-header-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-header-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-header-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-header-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-header-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-header-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-header-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-header-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-header-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-header-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-header-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-header-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-header-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-header-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-header-wp {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-header-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-header-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-header-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-header-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-header-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-header-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-header-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-header-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-header-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-header-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-header-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-title.wp *****************/
[
/** ion-card-title.wp: [0] tagName **/
'ion-card-title',

/** ion-card-title.wp: [1] methods **/
0 /* no methods */,

/** ion-card-title.wp: [2] listeners **/
0 /* no listeners */,

/** ion-card-title.wp: [3] watchers **/
0 /* no watchers */,

/** ion-card-title.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-title.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-card-title.wp: [6] styles **/
'/********** card-title.wp.scss **********/\n' + 
'\n' + 
'ion-card-title {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.card-title-wp {\n' + 
'  display: block;\n' + 
'  margin: 2px 0;\n' + 
'  padding: 8px 0 8px 0;\n' + 
'  font-size: 2.4rem;\n' + 
'  line-height: 1.2;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-title-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-title-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-title-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-title-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-title-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-primary .card-title-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-title-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-title-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-title-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-title-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-title-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-secondary .card-title-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-title-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-title-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-title-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-title-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-title-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-danger .card-title-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-title-wp {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-title-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-title-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-title-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-title-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-light .card-title-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-title-wp {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-title-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-title-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-title-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-title-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-wp-dark .card-title-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)