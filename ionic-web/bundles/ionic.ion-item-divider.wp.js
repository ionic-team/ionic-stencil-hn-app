Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-item-divider.wp",

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


/***************** ion-item-divider.wp *****************/
[
/** ion-item-divider.wp: [0] tagName **/
'ion-item-divider',

/** ion-item-divider.wp: [1] methods **/
0 /* no methods */,

/** ion-item-divider.wp: [2] listeners **/
0 /* no listeners */,

/** ion-item-divider.wp: [3] watchers **/
0 /* no watchers */,

/** ion-item-divider.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-item-divider.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-item-divider.wp: [6] styles **/
'/********** item-divider.wp.scss **********/\n' + 
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
'.item-divider-wp {\n' + 
'  padding-left: 16px;\n' + 
'  border-bottom: 1px solid transparent;\n' + 
'  font-size: 2rem;\n' + 
'  color: #000;\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-divider-wp-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)