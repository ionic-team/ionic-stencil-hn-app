Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-avatar.ios.ion-thumbnail.ios",

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


/***************** ion-avatar.ios *****************/
[
/** ion-avatar.ios: [0] tagName **/
'ion-avatar',

/** ion-avatar.ios: [1] methods **/
0 /* no methods */,

/** ion-avatar.ios: [2] listeners **/
0 /* no listeners */,

/** ion-avatar.ios: [3] watchers **/
0 /* no watchers */,

/** ion-avatar.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-avatar.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-avatar.ios: [6] styles **/
'/********** avatar.ios.scss **********/\n' + 
'\n' + 
'ion-avatar {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-thumbnail.ios *****************/
[
/** ion-thumbnail.ios: [0] tagName **/
'ion-thumbnail',

/** ion-thumbnail.ios: [1] methods **/
0 /* no methods */,

/** ion-thumbnail.ios: [2] listeners **/
0 /* no listeners */,

/** ion-thumbnail.ios: [3] watchers **/
0 /* no watchers */,

/** ion-thumbnail.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-thumbnail.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-thumbnail.ios: [6] styles **/
'/********** thumbnail.ios.scss **********/\n' + 
'\n' + 
'ion-thumbnail {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)