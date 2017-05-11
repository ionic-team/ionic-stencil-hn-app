Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-avatar.md.ion-thumbnail.md",

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


/***************** ion-avatar.md *****************/
[
/** ion-avatar.md: [0] tagName **/
'ion-avatar',

/** ion-avatar.md: [1] methods **/
0 /* no methods */,

/** ion-avatar.md: [2] listeners **/
0 /* no listeners */,

/** ion-avatar.md: [3] watchers **/
0 /* no watchers */,

/** ion-avatar.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-avatar.md: [5] modeName **/
2 /* md mode **/,

/** ion-avatar.md: [6] styles **/
'/********** avatar.md.scss **********/\n' + 
'\n' + 
'ion-avatar {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-thumbnail.md *****************/
[
/** ion-thumbnail.md: [0] tagName **/
'ion-thumbnail',

/** ion-thumbnail.md: [1] methods **/
0 /* no methods */,

/** ion-thumbnail.md: [2] listeners **/
0 /* no listeners */,

/** ion-thumbnail.md: [3] watchers **/
0 /* no watchers */,

/** ion-thumbnail.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-thumbnail.md: [5] modeName **/
2 /* md mode **/,

/** ion-thumbnail.md: [6] styles **/
'/********** thumbnail.md.scss **********/\n' + 
'\n' + 
'ion-thumbnail {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)