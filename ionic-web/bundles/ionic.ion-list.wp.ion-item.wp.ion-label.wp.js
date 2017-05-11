Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-list.wp.ion-item.wp.ion-label.wp",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var List = (function () {
    function List() {
    }
    List.prototype.render = function () {
        return h(this, Ionic.theme(this, 'list'));
    };
    return List;
}());

var Item = (function () {
    function Item() {
    }
    Item.prototype.render = function () {
        return h(this, h('div.item-block', Ionic.theme(this, 'item'), [
            h('slot', { attrs: { name: 'start' } }),
            h('div.item-inner', [
                h('div.input-wrapper', h('slot')),
                h('slot', { attrs: { name: 'end' } }),
            ]),
        ]));
        // template:
        //   '<ng-content select="[slot="start"],ion-checkbox:not([slot="end"])"></ng-content>' +
        //   '<div class="item-inner">' +
        //     '<div class="input-wrapper">' +
        //       '<ng-content select="ion-label"></ng-content>' +
        //       '<ion-label *ngIf="_viewLabel">' +
        //         '<ng-content></ng-content>' +
        //       '</ion-label>' +
        //       '<ng-content select="ion-select,ion-input,ion-textarea,ion-datetime,ion-range,[item-content]"></ng-content>' +
        //     '</div>' +
        //     '<ng-content select="[slot="end"],ion-radio,ion-toggle"></ng-content>' +
        //     '<ion-reorder *ngIf="_hasReorder"></ion-reorder>' +
        //   '</div>' +
        //   '<div class="button-effect"></div>',
    };
    return Item;
}());

var Label = (function () {
    function Label() {
    }
    Label.prototype.render = function () {
        return h(this, Ionic.theme(this, 'label'), h('slot'));
    };
    return Label;
}());

exports['ion-list'] = List;
exports['ion-item'] = Item;
exports['ion-label'] = Label;
},


/***************** ion-list.wp *****************/
[
/** ion-list.wp: [0] tagName **/
'ion-list',

/** ion-list.wp: [1] methods **/
0 /* no methods */,

/** ion-list.wp: [2] listeners **/
0 /* no listeners */,

/** ion-list.wp: [3] watchers **/
0 /* no watchers */,

/** ion-list.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-list.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-list.wp: [6] styles **/
'/********** list.wp.scss **********/\n' + 
'\n' + 
'ion-list {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'  contain: content;\n' + 
'}\n' + 
'\n' + 
'.list-wp {\n' + 
'  margin: 0 0 16px 0;\n' + 
'}\n' + 
'\n' + 
'.list-wp .item-block .item-inner {\n' + 
'  border-bottom: 1px solid transparent;\n' + 
'}\n' + 
'\n' + 
'.list-wp > .item-block:first-child,\n' + 
'.list-wp > .item-wrapper:first-child .item-block {\n' + 
'  border-top: 1px solid transparent;\n' + 
'}\n' + 
'\n' + 
'.list-wp > .item-block:last-child,\n' + 
'.list-wp > .item-wrapper:last-child .item-block {\n' + 
'  border-bottom: 1px solid transparent;\n' + 
'}\n' + 
'\n' + 
'.list-wp > .item-block:last-child ion-label,\n' + 
'.list-wp > .item-block:last-child .item-inner,\n' + 
'.list-wp > .item-wrapper:last-child ion-label,\n' + 
'.list-wp > .item-wrapper:last-child .item-inner {\n' + 
'  border-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.list-wp > ion-input:last-child::after {\n' + 
'  left: 0;\n' + 
'}\n' + 
'\n' + 
'.list-wp ion-item-options .button {\n' + 
'  display: inline-flex;\n' + 
'  align-items: center;\n' + 
'  margin: 1px 0;\n' + 
'  height: calc(100% - 2px);\n' + 
'  border: 0;\n' + 
'  border-radius: 0;\n' + 
'  box-shadow: none;\n' + 
'  box-sizing: border-box;\n' + 
'}\n' + 
'\n' + 
'.list-wp ion-item-options .button::before {\n' + 
'  margin: 0 auto;\n' + 
'}\n' + 
'\n' + 
'.list-wp .item[no-lines],\n' + 
'.list-wp .item[no-lines] .item-inner {\n' + 
'  border-width: 0;\n' + 
'}\n' + 
'\n' + 
'.list-wp + ion-list ion-list-header {\n' + 
'  margin-top: -16px;\n' + 
'  padding-top: 0;\n' + 
'}\n' + 
'\n' + 
'.list-wp[inset] {\n' + 
'  margin: 16px 16px 16px 16px;\n' + 
'  border-radius: 2px;\n' + 
'}\n' + 
'\n' + 
'.list-wp[inset] .item:first-child {\n' + 
'  border-top-width: 0;\n' + 
'  border-top-left-radius: 2px;\n' + 
'  border-top-right-radius: 2px;\n' + 
'}\n' + 
'\n' + 
'.list-wp[inset] .item:last-child {\n' + 
'  border-bottom-width: 0;\n' + 
'  border-bottom-left-radius: 2px;\n' + 
'  border-bottom-right-radius: 2px;\n' + 
'}\n' + 
'\n' + 
'.list-wp[inset] .item-input {\n' + 
'  padding-right: 0;\n' + 
'  padding-left: 0;\n' + 
'}\n' + 
'\n' + 
'.list-wp[inset] + ion-list[inset] {\n' + 
'  margin-top: 0;\n' + 
'}\n' + 
'\n' + 
'.list-wp[inset] ion-list-header {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.list-wp[no-lines] .item,\n' + 
'.list-wp[no-lines] .item .item-inner {\n' + 
'  border-width: 0;\n' + 
'}\n' + 
'\n' + 
'.list-header-wp {\n' + 
'  padding-left: 16px;\n' + 
'  border-bottom: 1px solid transparent;\n' + 
'  font-size: 2rem;\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'[dir="rtl"] .list-header-wp {\n' + 
'  padding-right: 16px;\n' + 
'  padding-left: 0;\n' + 
'}\n' + 
'\n' + 
'.list-header-wp-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.list-header-wp-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.list-header-wp-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.list-header-wp-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.list-header-wp-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-item.wp *****************/
[
/** ion-item.wp: [0] tagName **/
'ion-item',

/** ion-item.wp: [1] methods **/
0 /* no methods */,

/** ion-item.wp: [2] listeners **/
0 /* no listeners */,

/** ion-item.wp: [3] watchers **/
0 /* no watchers */,

/** ion-item.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-item.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-item.wp: [6] styles **/
'/********** item.wp.scss **********/\n' + 
'\n' + 
'ion-item {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'  contain: content;\n' + 
'}\n' + 
'\n' + 
'.item-block {\n' + 
'  display: flex;\n' + 
'  overflow: hidden;\n' + 
'  align-items: center;\n' + 
'  justify-content: space-between;\n' + 
'  margin: 0;\n' + 
'  padding: 0;\n' + 
'  width: 100%;\n' + 
'  min-height: 4.4rem;\n' + 
'  border: 0;\n' + 
'  font-weight: normal;\n' + 
'  line-height: normal;\n' + 
'  text-align: initial;\n' + 
'  text-decoration: none;\n' + 
'  color: inherit;\n' + 
'}\n' + 
'\n' + 
'.item-inner {\n' + 
'  display: flex;\n' + 
'  overflow: hidden;\n' + 
'  flex: 1;\n' + 
'  flex-direction: inherit;\n' + 
'  align-items: inherit;\n' + 
'  align-self: stretch;\n' + 
'  margin: 0;\n' + 
'  padding: 0;\n' + 
'  min-height: inherit;\n' + 
'  border: 0;\n' + 
'}\n' + 
'\n' + 
'.input-wrapper {\n' + 
'  display: flex;\n' + 
'  overflow: hidden;\n' + 
'  flex: 1;\n' + 
'  flex-direction: inherit;\n' + 
'  align-items: inherit;\n' + 
'  align-self: stretch;\n' + 
'  text-overflow: ellipsis;\n' + 
'}\n' + 
'\n' + 
'.item[no-lines],\n' + 
'.item.item[no-lines] .item-inner {\n' + 
'  border: 0;\n' + 
'}\n' + 
'\n' + 
'ion-item-group {\n' + 
'  display: block;\n' + 
'}\n' + 
'\n' + 
'ion-item-divider {\n' + 
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
'[vertical-align-top],\n' + 
'ion-input.item {\n' + 
'  align-items: flex-start;\n' + 
'}\n' + 
'\n' + 
'.item-wp {\n' + 
'  position: relative;\n' + 
'  padding-right: 0;\n' + 
'  padding-left: 16px;\n' + 
'  font-size: 1.6rem;\n' + 
'  font-weight: normal;\n' + 
'  text-transform: none;\n' + 
'  color: #000;\n' + 
'  background-color: #fff;\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.item-wp.activated {\n' + 
'  background-color: #aaa;\n' + 
'}\n' + 
'\n' + 
'.item-wp[no-lines] {\n' + 
'  border-width: 0;\n' + 
'}\n' + 
'\n' + 
'.item-wp h1 {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 2.4rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.item-wp h2 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.6rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.item-wp h3,\n' + 
'.item-wp h4,\n' + 
'.item-wp h5,\n' + 
'.item-wp h6 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: normal;\n' + 
'  line-height: normal;\n' + 
'}\n' + 
'\n' + 
'.item-wp p {\n' + 
'  overflow: inherit;\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  line-height: normal;\n' + 
'  text-overflow: inherit;\n' + 
'  color: #666;\n' + 
'}\n' + 
'\n' + 
'.item-wp.item-block .item-inner {\n' + 
'  padding-right: 8px;\n' + 
'  border-bottom: 1px solid transparent;\n' + 
'}\n' + 
'\n' + 
'.item-wp [slot="start"],\n' + 
'.item-wp [slot="end"] {\n' + 
'  margin: 9px 8px 9px 0;\n' + 
'}\n' + 
'\n' + 
'.item-wp ion-icon[slot="start"],\n' + 
'.item-wp ion-icon[slot="end"] {\n' + 
'  margin-top: 11px;\n' + 
'  margin-bottom: 10px;\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.item-wp .item-button {\n' + 
'  padding: 0 .6em;\n' + 
'  height: 25px;\n' + 
'  font-size: 1.2rem;\n' + 
'}\n' + 
'\n' + 
'.item-wp .item-button[icon-only] ion-icon,\n' + 
'.item-wp .item-button[icon-only] {\n' + 
'  padding: 0 1px;\n' + 
'}\n' + 
'\n' + 
'.item-wp[text-wrap] ion-label {\n' + 
'  font-size: 1.4rem;\n' + 
'  line-height: 1.5;\n' + 
'}\n' + 
'\n' + 
'.item-wp ion-icon[slot="start"] + .item-inner,\n' + 
'.item-wp ion-icon[slot="start"] + .item-input {\n' + 
'  margin-left: 8px;\n' + 
'}\n' + 
'\n' + 
'.item-wp ion-avatar[slot="start"],\n' + 
'.item-wp ion-thumbnail[slot="start"] {\n' + 
'  margin: 8px 16px 8px 0;\n' + 
'}\n' + 
'\n' + 
'.item-wp ion-avatar[slot="end"],\n' + 
'.item-wp ion-thumbnail[slot="end"] {\n' + 
'  margin: 8px;\n' + 
'}\n' + 
'\n' + 
'.item-wp ion-avatar {\n' + 
'  min-width: 40px;\n' + 
'  min-height: 40px;\n' + 
'}\n' + 
'\n' + 
'.item-wp ion-avatar ion-img,\n' + 
'.item-wp ion-avatar img {\n' + 
'  overflow: hidden;\n' + 
'  width: 40px;\n' + 
'  height: 40px;\n' + 
'  border-radius: 50%;\n' + 
'}\n' + 
'\n' + 
'.item-wp ion-thumbnail {\n' + 
'  min-width: 80px;\n' + 
'  min-height: 80px;\n' + 
'}\n' + 
'\n' + 
'.item-wp ion-thumbnail ion-img,\n' + 
'.item-wp ion-thumbnail img {\n' + 
'  width: 80px;\n' + 
'  height: 80px;\n' + 
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
'.item-wp .text-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-wp-primary,\n' + 
'.item-divider-wp-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-wp-primary p,\n' + 
'.item-divider-wp-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-wp-primary.activated,\n' + 
'.item-divider-wp-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.item-wp .text-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-wp-secondary,\n' + 
'.item-divider-wp-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-wp-secondary p,\n' + 
'.item-divider-wp-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-wp-secondary.activated,\n' + 
'.item-divider-wp-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.item-wp .text-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-wp-danger,\n' + 
'.item-divider-wp-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-wp-danger p,\n' + 
'.item-divider-wp-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-wp-danger.activated,\n' + 
'.item-divider-wp-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.item-wp .text-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-wp-light,\n' + 
'.item-divider-wp-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-wp-light p,\n' + 
'.item-divider-wp-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.item-wp-light.activated,\n' + 
'.item-divider-wp-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.item-wp .text-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-wp-dark,\n' + 
'.item-divider-wp-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-wp-dark p,\n' + 
'.item-divider-wp-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-wp-dark.activated,\n' + 
'.item-divider-wp-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.list-wp ion-item-sliding {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-label.wp *****************/
[
/** ion-label.wp: [0] tagName **/
'ion-label',

/** ion-label.wp: [1] methods **/
0 /* no methods */,

/** ion-label.wp: [2] listeners **/
0 /* no listeners */,

/** ion-label.wp: [3] watchers **/
0 /* no watchers */,

/** ion-label.wp: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-label.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-label.wp: [6] styles **/
'/********** label.wp.scss **********/\n' + 
'\n' + 
'ion-label {\n' + 
'  display: block;\n' + 
'  overflow: hidden;\n' + 
'  visibility: inherit !important;\n' + 
'  flex: 1;\n' + 
'  margin: 0;\n' + 
'  font-size: inherit;\n' + 
'  text-overflow: ellipsis;\n' + 
'  white-space: nowrap;\n' + 
'}\n' + 
'\n' + 
'.item-input ion-label {\n' + 
'  flex: initial;\n' + 
'  max-width: 200px;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'[text-wrap] ion-label {\n' + 
'  white-space: normal;\n' + 
'}\n' + 
'\n' + 
'ion-label[fixed] {\n' + 
'  flex: 0 0 100px;\n' + 
'  width: 100px;\n' + 
'  min-width: 100px;\n' + 
'  max-width: 200px;\n' + 
'}\n' + 
'\n' + 
'.item-label-stacked ion-label,\n' + 
'.item-label-floating ion-label {\n' + 
'  align-self: stretch;\n' + 
'  width: auto;\n' + 
'  max-width: 100%;\n' + 
'}\n' + 
'\n' + 
'ion-label[stacked],\n' + 
'ion-label[floating] {\n' + 
'  margin-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.item-label-stacked .input-wrapper,\n' + 
'.item-label-floating .input-wrapper {\n' + 
'  flex: 1;\n' + 
'  flex-direction: column;\n' + 
'}\n' + 
'\n' + 
'.item-label-stacked ion-select,\n' + 
'.item-label-floating ion-select {\n' + 
'  align-self: stretch;\n' + 
'  max-width: 100%;\n' + 
'}\n' + 
'\n' + 
'.label-wp {\n' + 
'  margin: 13px 8px 13px 0;\n' + 
'}\n' + 
'\n' + 
'.item-input .label-wp,\n' + 
'.item-select .label-wp,\n' + 
'.item-datetime .label-wp {\n' + 
'  color: #999;\n' + 
'}\n' + 
'\n' + 
'.label-wp[stacked] {\n' + 
'  font-size: 1.2rem;\n' + 
'}\n' + 
'\n' + 
'.label-wp[floating] {\n' + 
'  transform: translate3d(8px, 34px, 0);\n' + 
'  transform-origin: left top;\n' + 
'}\n' + 
'\n' + 
'[dir="rtl"] .label-wp[floating] {\n' + 
'  transform: translate3d(-8px, 34px, 0);\n' + 
'  transform-origin: right top;\n' + 
'}\n' + 
'\n' + 
'.label-wp[stacked],\n' + 
'.label-wp[floating] {\n' + 
'  margin-bottom: 0;\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.input-has-focus .label-wp[stacked],\n' + 
'.input-has-focus .label-wp[floating] {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.input-has-focus .label-wp[floating],\n' + 
'.input-has-value .label-wp[floating] {\n' + 
'  transform: translate3d(0, 0, 0) scale(0.8);\n' + 
'}\n' + 
'\n' + 
'.item-wp.item-label-stacked [slot="end"],\n' + 
'.item-wp.item-label-floating [slot="end"] {\n' + 
'  margin-top: 13px;\n' + 
'  margin-bottom: 13px;\n' + 
'}\n' + 
'\n' + 
'.label-wp-primary,\n' + 
'.item-input .label-wp-primary,\n' + 
'.item-select .label-wp-primary,\n' + 
'.item-datetime .label-wp-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.label-wp-secondary,\n' + 
'.item-input .label-wp-secondary,\n' + 
'.item-select .label-wp-secondary,\n' + 
'.item-datetime .label-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.label-wp-danger,\n' + 
'.item-input .label-wp-danger,\n' + 
'.item-select .label-wp-danger,\n' + 
'.item-datetime .label-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.label-wp-light,\n' + 
'.item-input .label-wp-light,\n' + 
'.item-select .label-wp-light,\n' + 
'.item-datetime .label-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.label-wp-dark,\n' + 
'.item-input .label-wp-dark,\n' + 
'.item-select .label-wp-dark,\n' + 
'.item-datetime .label-wp-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)