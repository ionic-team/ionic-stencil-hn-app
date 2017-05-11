Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-item-divider.ios",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var ItemDivider = (function () {
    function ItemDivider() {
    }
    ItemDivider.prototype.render = function () {
        return h(this, Ionic.theme(this, 'item item-divider'), [
            h('slot', { attrs: { name: 'start' } }),
            h('div.item-inner', [
                h('div.input-wrapper', h('slot')),
                h('slot', { attrs: { name: 'end' } }),
            ]),
        ]);
    };
    return ItemDivider;
}());

exports['ion-item-divider'] = ItemDivider;
},


/***************** ion-item-divider.ios *****************/
[
/** ion-item-divider.ios: [0] tagName **/
'ion-item-divider',

/** ion-item-divider.ios: [1] methods **/
0 /* no methods */,

/** ion-item-divider.ios: [2] listeners **/
0 /* no listeners */,

/** ion-item-divider.ios: [3] watchers **/
0 /* no watchers */,

/** ion-item-divider.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-item-divider.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-item-divider.ios: [6] styles **/
'/********** item-divider.ios.scss **********/\n' + 
'\n' + 
'ion-item-divider {\n' + 
'  visibility: inherit !important;\n' + 
'  z-index: 100;\n' + 
'  display: flex;\n' + 
'  overflow: hidden;\n' + 
'  align-items: center;\n' + 
'  justify-content: space-between;\n' + 
'  margin: 0;\n' + 
'  padding: 0;\n' + 
'  width: 100%;\n' + 
'  min-height: 30px;\n' + 
'}\n' + 
'\n' + 
'ion-item-divider[sticky] {\n' + 
'  position: sticky;\n' + 
'  top: 0;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios {\n' + 
'  padding-left: 16px;\n' + 
'  color: #222;\n' + 
'  background-color: #f7f7f7;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)