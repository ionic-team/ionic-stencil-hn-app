Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-avatar.wp.ion-thumbnail.wp",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var Avatar = (function () {
    function Avatar() {
    }
    Avatar.prototype.render = function () {
        return h(this, Ionic.theme(this, 'avatar'), h('slot'));
    };
    return Avatar;
}());

var Thumbnail = (function () {
    function Thumbnail() {
    }
    Thumbnail.prototype.render = function () {
        return h(this, Ionic.theme(this, 'thumbnail'), h('slot'));
    };
    return Thumbnail;
}());

exports['ion-avatar'] = Avatar;
exports['ion-thumbnail'] = Thumbnail;
},


/***************** ion-avatar.wp *****************/
[
/** ion-avatar.wp: [0] tagName **/
'ion-avatar',

/** ion-avatar.wp: [1] methods **/
0 /* no methods */,

/** ion-avatar.wp: [2] listeners **/
0 /* no listeners */,

/** ion-avatar.wp: [3] watchers **/
0 /* no watchers */,

/** ion-avatar.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-avatar.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-avatar.wp: [6] styles **/
'/********** avatar.wp.scss **********/\n' + 
'\n' + 
'ion-avatar {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-thumbnail.wp *****************/
[
/** ion-thumbnail.wp: [0] tagName **/
'ion-thumbnail',

/** ion-thumbnail.wp: [1] methods **/
0 /* no methods */,

/** ion-thumbnail.wp: [2] listeners **/
0 /* no listeners */,

/** ion-thumbnail.wp: [3] watchers **/
0 /* no watchers */,

/** ion-thumbnail.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-thumbnail.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-thumbnail.wp: [6] styles **/
'/********** thumbnail.wp.scss **********/\n' + 
'\n' + 
'ion-thumbnail {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)