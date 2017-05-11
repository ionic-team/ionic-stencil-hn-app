Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-badge.wp",

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


/***************** ion-badge.wp *****************/
[
/** ion-badge.wp: [0] tagName **/
'ion-badge',

/** ion-badge.wp: [1] methods **/
0 /* no methods */,

/** ion-badge.wp: [2] listeners **/
0 /* no listeners */,

/** ion-badge.wp: [3] watchers **/
0 /* no watchers */,

/** ion-badge.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-badge.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-badge.wp: [6] styles **/
'/********** badge.wp.scss **********/\n' + 
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
'.badge-wp {\n' + 
'  border-radius: 0;\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.badge-wp-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.badge-wp-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.badge-wp-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.badge-wp-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.badge-wp-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)