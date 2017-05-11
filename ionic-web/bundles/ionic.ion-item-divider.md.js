Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-item-divider.md",

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


/***************** ion-item-divider.md *****************/
[
/** ion-item-divider.md: [0] tagName **/
'ion-item-divider',

/** ion-item-divider.md: [1] methods **/
0 /* no methods */,

/** ion-item-divider.md: [2] listeners **/
0 /* no listeners */,

/** ion-item-divider.md: [3] watchers **/
0 /* no watchers */,

/** ion-item-divider.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-item-divider.md: [5] modeName **/
2 /* md mode **/,

/** ion-item-divider.md: [6] styles **/
'/********** item-divider.md.scss **********/\n' + 
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
'.item-divider-md {\n' + 
'  padding-left: 16px;\n' + 
'  color: #858585;\n' + 
'  background-color: #fff;\n' + 
'  border-bottom: 1px solid #dedede;\n' + 
'  font-size: 1.4rem;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-md-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)