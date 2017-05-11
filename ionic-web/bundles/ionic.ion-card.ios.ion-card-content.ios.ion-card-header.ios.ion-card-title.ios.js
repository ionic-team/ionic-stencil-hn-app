Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-card.ios.ion-card-content.ios.ion-card-header.ios.ion-card-title.ios",

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


/***************** ion-card.ios *****************/
[
/** ion-card.ios: [0] tagName **/
'ion-card',

/** ion-card.ios: [1] methods **/
0 /* no methods */,

/** ion-card.ios: [2] listeners **/
0 /* no listeners */,

/** ion-card.ios: [3] watchers **/
0 /* no watchers */,

/** ion-card.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-card.ios: [6] styles **/
'/********** card.ios.scss **********/\n' + 
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
'.card-ios {\n' + 
'  margin: 12px 12px 12px 12px;\n' + 
'  width: calc(100% - 24px);\n' + 
'  border-radius: 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  background: #fff;\n' + 
'  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n' + 
'}\n' + 
'\n' + 
'.card-ios ion-list {\n' + 
'  margin-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.card-ios > .item:last-child,\n' + 
'.card-ios > .item:last-child .item-inner,\n' + 
'.card-ios > .item-wrapper:last-child .item {\n' + 
'  border-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.card-ios .item-ios.item-block .item-inner {\n' + 
'  border: 0;\n' + 
'}\n' + 
'\n' + 
'.card-header-ios + .card-content-ios,\n' + 
'.card-ios .item + .card-content-ios {\n' + 
'  padding-top: 0;\n' + 
'}\n' + 
'\n' + 
'.card .note-ios {\n' + 
'  font-size: 1.3rem;\n' + 
'}\n' + 
'\n' + 
'.card-ios h1 {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 2.4rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.card-ios h2 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.6rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.card-ios h3,\n' + 
'.card-ios h4,\n' + 
'.card-ios h5,\n' + 
'.card-ios h6 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.card-ios p {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  color: #666;\n' + 
'}\n' + 
'\n' + 
'.card-ios + ion-card {\n' + 
'  margin-top: 0;\n' + 
'}\n' + 
'\n' + 
'.card-ios .text-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .text-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .text-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .text-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .text-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .text-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-ios .text-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .text-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .text-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .text-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .text-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .text-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-ios .text-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .text-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .text-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .text-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .text-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .text-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-ios .text-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .text-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .text-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .text-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .text-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .text-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-ios .text-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .text-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .text-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .text-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .text-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .text-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-content.ios *****************/
[
/** ion-card-content.ios: [0] tagName **/
'ion-card-content',

/** ion-card-content.ios: [1] methods **/
0 /* no methods */,

/** ion-card-content.ios: [2] listeners **/
0 /* no listeners */,

/** ion-card-content.ios: [3] watchers **/
0 /* no watchers */,

/** ion-card-content.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-content.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-card-content.ios: [6] styles **/
'/********** card-content.ios.scss **********/\n' + 
'\n' + 
'ion-card-content {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.card-content-ios {\n' + 
'  padding: 13px 16px 14px 16px;\n' + 
'  font-size: 1.4rem;\n' + 
'  line-height: 1.4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-content-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-content-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-content-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-content-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-content-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-content-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-content-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-content-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-content-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-content-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-content-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-content-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-content-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-content-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-content-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-content-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-content-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-content-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-content-ios {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-content-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-content-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-content-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-content-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-content-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-content-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-content-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-content-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-content-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-content-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-content-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-header.ios *****************/
[
/** ion-card-header.ios: [0] tagName **/
'ion-card-header',

/** ion-card-header.ios: [1] methods **/
0 /* no methods */,

/** ion-card-header.ios: [2] listeners **/
0 /* no listeners */,

/** ion-card-header.ios: [3] watchers **/
0 /* no watchers */,

/** ion-card-header.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-header.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-card-header.ios: [6] styles **/
'/********** card-header.ios.scss **********/\n' + 
'\n' + 
'ion-card-header {\n' + 
'  display: block;\n' + 
'  overflow: hidden;\n' + 
'  visibility: inherit !important;\n' + 
'  text-overflow: ellipsis;\n' + 
'  white-space: nowrap;\n' + 
'}\n' + 
'\n' + 
'.card-header-ios {\n' + 
'  padding: 16px;\n' + 
'  font-size: 1.6rem;\n' + 
'  font-weight: 500;\n' + 
'  color: #333;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-header-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-header-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-header-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-header-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-header-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-header-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-header-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-header-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-header-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-header-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-header-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-header-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-header-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-header-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-header-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-header-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-header-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-header-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-header-ios {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-header-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-header-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-header-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-header-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-header-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-header-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-header-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-header-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-header-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-header-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-header-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-title.ios *****************/
[
/** ion-card-title.ios: [0] tagName **/
'ion-card-title',

/** ion-card-title.ios: [1] methods **/
0 /* no methods */,

/** ion-card-title.ios: [2] listeners **/
0 /* no listeners */,

/** ion-card-title.ios: [3] watchers **/
0 /* no watchers */,

/** ion-card-title.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-title.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-card-title.ios: [6] styles **/
'/********** card-title.ios.scss **********/\n' + 
'\n' + 
'ion-card-title {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.card-title-ios {\n' + 
'  display: block;\n' + 
'  margin: 2px 0 2px;\n' + 
'  padding: 8px 0 8px 0;\n' + 
'  font-size: 1.8rem;\n' + 
'  line-height: 1.2;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-title-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-title-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-title-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-title-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-title-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-primary .card-title-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-title-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-title-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-title-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-title-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-title-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-secondary .card-title-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-title-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-title-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-title-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-title-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-title-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-danger .card-title-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-title-ios {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-title-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-title-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-title-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-title-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-light .card-title-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-title-ios {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-title-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-title-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-title-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-title-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-ios-dark .card-title-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)