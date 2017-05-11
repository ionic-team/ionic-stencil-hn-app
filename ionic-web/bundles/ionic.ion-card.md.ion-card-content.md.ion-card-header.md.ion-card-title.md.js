Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-card.md.ion-card-content.md.ion-card-header.md.ion-card-title.md",

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


/***************** ion-card.md *****************/
[
/** ion-card.md: [0] tagName **/
'ion-card',

/** ion-card.md: [1] methods **/
0 /* no methods */,

/** ion-card.md: [2] listeners **/
0 /* no listeners */,

/** ion-card.md: [3] watchers **/
0 /* no watchers */,

/** ion-card.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card.md: [5] modeName **/
2 /* md mode **/,

/** ion-card.md: [6] styles **/
'/********** card.md.scss **********/\n' + 
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
'.card-md {\n' + 
'  margin: 10px 10px 10px 10px;\n' + 
'  width: calc(100% - 20px);\n' + 
'  border-radius: 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  background: #fff;\n' + 
'  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n' + 
'}\n' + 
'\n' + 
'.card-md ion-list {\n' + 
'  margin-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.card-md > .item:last-child,\n' + 
'.card-md > .item:last-child .item-inner,\n' + 
'.card-md > .item-wrapper:last-child .item {\n' + 
'  border-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.card-md .item-md.item-block .item-inner {\n' + 
'  border: 0;\n' + 
'}\n' + 
'\n' + 
'.card-header-md + .card-content-md,\n' + 
'.card-md .item + .card-content-md {\n' + 
'  padding-top: 0;\n' + 
'}\n' + 
'\n' + 
'.card .note-md {\n' + 
'  font-size: 1.3rem;\n' + 
'}\n' + 
'\n' + 
'.card-md h1 {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 2.4rem;\n' + 
'  font-weight: normal;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md h2 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.6rem;\n' + 
'  font-weight: normal;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md h3,\n' + 
'.card-md h4,\n' + 
'.card-md h5,\n' + 
'.card-md h6 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: normal;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md p {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: normal;\n' + 
'  line-height: 1.5;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md + ion-card {\n' + 
'  margin-top: 0;\n' + 
'}\n' + 
'\n' + 
'.card-md .text-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary h1,\n' + 
'.card-md-primary h2,\n' + 
'.card-md-primary h3,\n' + 
'.card-md-primary h4,\n' + 
'.card-md-primary h5,\n' + 
'.card-md-primary h6,\n' + 
'.card-md-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .text-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .text-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .text-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .text-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .text-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md .text-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary h1,\n' + 
'.card-md-secondary h2,\n' + 
'.card-md-secondary h3,\n' + 
'.card-md-secondary h4,\n' + 
'.card-md-secondary h5,\n' + 
'.card-md-secondary h6,\n' + 
'.card-md-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .text-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .text-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .text-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .text-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .text-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md .text-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger h1,\n' + 
'.card-md-danger h2,\n' + 
'.card-md-danger h3,\n' + 
'.card-md-danger h4,\n' + 
'.card-md-danger h5,\n' + 
'.card-md-danger h6,\n' + 
'.card-md-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .text-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .text-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .text-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .text-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .text-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md .text-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-light h1,\n' + 
'.card-md-light h2,\n' + 
'.card-md-light h3,\n' + 
'.card-md-light h4,\n' + 
'.card-md-light h5,\n' + 
'.card-md-light h6,\n' + 
'.card-md-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .text-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .text-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .text-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .text-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .text-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md .text-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark h1,\n' + 
'.card-md-dark h2,\n' + 
'.card-md-dark h3,\n' + 
'.card-md-dark h4,\n' + 
'.card-md-dark h5,\n' + 
'.card-md-dark h6,\n' + 
'.card-md-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .text-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .text-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .text-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .text-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .text-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-content.md *****************/
[
/** ion-card-content.md: [0] tagName **/
'ion-card-content',

/** ion-card-content.md: [1] methods **/
0 /* no methods */,

/** ion-card-content.md: [2] listeners **/
0 /* no listeners */,

/** ion-card-content.md: [3] watchers **/
0 /* no watchers */,

/** ion-card-content.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-content.md: [5] modeName **/
2 /* md mode **/,

/** ion-card-content.md: [6] styles **/
'/********** card-content.md.scss **********/\n' + 
'\n' + 
'ion-card-content {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.card-content-md {\n' + 
'  padding: 13px 16px 13px 16px;\n' + 
'  font-size: 1.4rem;\n' + 
'  line-height: 1.5;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-content-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-content-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-content-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-content-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-content-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-content-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-content-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-content-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-content-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-content-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-content-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-content-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-content-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-content-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-content-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-content-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-content-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-content-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-content-md {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-content-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-content-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-content-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-content-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-content-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-content-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-content-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-content-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-content-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-content-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-content-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-content-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-header.md *****************/
[
/** ion-card-header.md: [0] tagName **/
'ion-card-header',

/** ion-card-header.md: [1] methods **/
0 /* no methods */,

/** ion-card-header.md: [2] listeners **/
0 /* no listeners */,

/** ion-card-header.md: [3] watchers **/
0 /* no watchers */,

/** ion-card-header.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-header.md: [5] modeName **/
2 /* md mode **/,

/** ion-card-header.md: [6] styles **/
'/********** card-header.md.scss **********/\n' + 
'\n' + 
'ion-card-header {\n' + 
'  display: block;\n' + 
'  overflow: hidden;\n' + 
'  visibility: inherit !important;\n' + 
'  text-overflow: ellipsis;\n' + 
'  white-space: nowrap;\n' + 
'}\n' + 
'\n' + 
'.card-header-md {\n' + 
'  padding: 16px;\n' + 
'  font-size: 1.6rem;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-header-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-header-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-header-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-header-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-header-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-header-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-header-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-header-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-header-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-header-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-header-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-header-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-header-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-header-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-header-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-header-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-header-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-header-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-header-md {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-header-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-header-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-header-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-header-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-header-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-header-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-header-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-header-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-header-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-header-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-header-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-header-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-card-title.md *****************/
[
/** ion-card-title.md: [0] tagName **/
'ion-card-title',

/** ion-card-title.md: [1] methods **/
0 /* no methods */,

/** ion-card-title.md: [2] listeners **/
0 /* no listeners */,

/** ion-card-title.md: [3] watchers **/
0 /* no watchers */,

/** ion-card-title.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-card-title.md: [5] modeName **/
2 /* md mode **/,

/** ion-card-title.md: [6] styles **/
'/********** card-title.md.scss **********/\n' + 
'\n' + 
'ion-card-title {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.card-title-md {\n' + 
'  display: block;\n' + 
'  margin: 2px 0 2px;\n' + 
'  padding: 8px 0 8px 0;\n' + 
'  font-size: 2.4rem;\n' + 
'  line-height: 1.2;\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-title-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-title-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-title-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-title-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-title-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-primary .card-title-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-title-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-title-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-title-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-title-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-title-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-secondary .card-title-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-title-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-title-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-title-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-title-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-title-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-danger .card-title-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-title-md {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-title-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-title-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-title-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-title-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-light .card-title-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-title-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-title-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-title-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-title-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-title-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.card-md-dark .card-title-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.card-title-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)