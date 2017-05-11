Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-list-header.default",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var ListHeader = (function () {
    function ListHeader() {
    }
    ListHeader.prototype.render = function () {
        return h(this, Ionic.theme(this, 'list-header'), h('slot'));
    };
    return ListHeader;
}());

exports['ion-list-header'] = ListHeader;
},


/***************** ion-list-header.default *****************/
[
/** ion-list-header.default: [0] tagName **/
'ion-list-header',

/** ion-list-header.default: [1] methods **/
0 /* no methods */,

/** ion-list-header.default: [2] listeners **/
0 /* no listeners */,

/** ion-list-header.default: [3] watchers **/
0 /* no watchers */,

/** ion-list-header.default: [4] shadow **/
1 /* use shadow dom */,

/** ion-list-header.default: [5] modeName **/
0 /* default mode **/,

/** ion-list-header.default: [6] styles **/
0 /* no styles */

]
)