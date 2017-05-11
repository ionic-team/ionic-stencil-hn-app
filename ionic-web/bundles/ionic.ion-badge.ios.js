Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-badge.ios",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var Badge = (function () {
    function Badge() {
    }
    Badge.prototype.render = function () {
        return h(this, Ionic.theme(this, 'badge'));
    };
    return Badge;
}());

exports['ion-badge'] = Badge;
},


/***************** ion-badge.ios *****************/
[
/** ion-badge.ios: [0] tagName **/
'ion-badge',

/** ion-badge.ios: [1] methods **/
0 /* no methods */,

/** ion-badge.ios: [2] listeners **/
0 /* no listeners */,

/** ion-badge.ios: [3] watchers **/
0 /* no watchers */,

/** ion-badge.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-badge.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-badge.ios: [6] styles **/
'/********** badge.ios.scss **********/\n' + 
'\n' + 
'ion-badge {\n' + 
'  display: inline-block;\n' + 
'  visibility: inherit !important;\n' + 
'  contain: content;\n' + 
'}\n' + 
'\n' + 
'.badge {\n' + 
'  padding: 3px 8px;\n' + 
'  min-width: 10px;\n' + 
'  font-size: 1.3rem;\n' + 
'  font-weight: bold;\n' + 
'  line-height: 1;\n' + 
'  text-align: center;\n' + 
'  white-space: nowrap;\n' + 
'  vertical-align: baseline;\n' + 
'}\n' + 
'\n' + 
'ion-badge:empty {\n' + 
'  display: none;\n' + 
'}\n' + 
'\n' + 
'.badge-ios {\n' + 
'  border-radius: 10px;\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.badge-ios-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.badge-ios-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.badge-ios-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.badge-ios-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.badge-ios-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)