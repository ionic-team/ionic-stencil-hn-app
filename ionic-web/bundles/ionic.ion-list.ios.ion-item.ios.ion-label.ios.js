Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-list.ios.ion-item.ios.ion-label.ios",

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


/***************** ion-list.ios *****************/
[
/** ion-list.ios: [0] tagName **/
'ion-list',

/** ion-list.ios: [1] methods **/
0 /* no methods */,

/** ion-list.ios: [2] listeners **/
0 /* no listeners */,

/** ion-list.ios: [3] watchers **/
0 /* no watchers */,

/** ion-list.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-list.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-list.ios: [6] styles **/
'/********** list.ios.scss **********/\n' + 
'\n' + 
'ion-list {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'  contain: content;\n' + 
'}\n' + 
'\n' + 
'.list-ios {\n' + 
'  margin: -1px 0 32px 0;\n' + 
'}\n' + 
'\n' + 
'.list-ios > .item-block:first-child {\n' + 
'  border-top: 0.55px solid #c8c7cc;\n' + 
'}\n' + 
'\n' + 
'.list-ios > .item-block:last-child,\n' + 
'.list-ios > .item-wrapper:last-child .item-block {\n' + 
'  border-bottom: 0.55px solid #c8c7cc;\n' + 
'}\n' + 
'\n' + 
'.list-ios > .item-block:last-child .item-inner,\n' + 
'.list-ios > .item-wrapper:last-child .item-block .item-inner {\n' + 
'  border-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.list-ios .item-block .item-inner {\n' + 
'  border-bottom: 0.55px solid #c8c7cc;\n' + 
'}\n' + 
'\n' + 
'.list-ios .item[no-lines],\n' + 
'.list-ios .item[no-lines] .item-inner {\n' + 
'  border-width: 0;\n' + 
'}\n' + 
'\n' + 
'.list-ios ion-item-options {\n' + 
'  border-bottom: 0.55px solid #c8c7cc;\n' + 
'}\n' + 
'\n' + 
'.list-ios ion-item-options .button {\n' + 
'  display: inline-flex;\n' + 
'  align-items: center;\n' + 
'  margin: 0;\n' + 
'  height: 100%;\n' + 
'  min-height: 100%;\n' + 
'  border: 0;\n' + 
'  border-radius: 0;\n' + 
'  box-sizing: border-box;\n' + 
'}\n' + 
'\n' + 
'.list-ios ion-item-options .button::before {\n' + 
'  margin: 0 auto;\n' + 
'}\n' + 
'\n' + 
'.list-ios:not([inset]) + .list-ios:not([inset]) ion-list-header {\n' + 
'  margin-top: -10px;\n' + 
'  padding-top: 0;\n' + 
'}\n' + 
'\n' + 
'.list-ios[inset] {\n' + 
'  margin: 16px 16px 16px 16px;\n' + 
'  border-radius: 4px;\n' + 
'}\n' + 
'\n' + 
'.list-ios[inset] ion-list-header {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.list-ios[inset] .item {\n' + 
'  border-bottom: 1px solid #c8c7cc;\n' + 
'}\n' + 
'\n' + 
'.list-ios[inset] .item-inner {\n' + 
'  border-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.list-ios[inset] > .item:first-child,\n' + 
'.list-ios[inset] > .item-wrapper:first-child .item {\n' + 
'  border-top: 0;\n' + 
'}\n' + 
'\n' + 
'.list-ios[inset] > .item:last-child,\n' + 
'.list-ios[inset] > .item-wrapper:last-child .item {\n' + 
'  border-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.list-ios[inset] + ion-list[inset] {\n' + 
'  margin-top: 0;\n' + 
'}\n' + 
'\n' + 
'.list-ios[no-lines] ion-list-header,\n' + 
'.list-ios[no-lines] ion-item-options,\n' + 
'.list-ios[no-lines] .item,\n' + 
'.list-ios[no-lines] .item .item-inner {\n' + 
'  border-width: 0;\n' + 
'}\n' + 
'\n' + 
'.list-header-ios {\n' + 
'  position: relative;\n' + 
'  padding-left: 16px;\n' + 
'  border-bottom: 0.55px solid #c8c7cc;\n' + 
'  font-size: 1.2rem;\n' + 
'  font-weight: 500;\n' + 
'  letter-spacing: 0.1rem;\n' + 
'  text-transform: uppercase;\n' + 
'  color: #333;\n' + 
'  background: transparent;\n' + 
'}\n' + 
'\n' + 
'[dir="rtl"] .list-header-ios {\n' + 
'  padding-right: 16px;\n' + 
'  padding-left: 0;\n' + 
'}\n' + 
'\n' + 
'.list-header-ios-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.list-header-ios-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.list-header-ios-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.list-header-ios-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.list-header-ios-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-item.ios *****************/
[
/** ion-item.ios: [0] tagName **/
'ion-item',

/** ion-item.ios: [1] methods **/
0 /* no methods */,

/** ion-item.ios: [2] listeners **/
0 /* no listeners */,

/** ion-item.ios: [3] watchers **/
0 /* no watchers */,

/** ion-item.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-item.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-item.ios: [6] styles **/
'/********** item.ios.scss **********/\n' + 
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
'.item-ios {\n' + 
'  position: relative;\n' + 
'  padding-left: 16px;\n' + 
'  border-radius: 0;\n' + 
'  font-size: 1.7rem;\n' + 
'  color: #000;\n' + 
'  background-color: #fff;\n' + 
'  transition: background-color 200ms linear;\n' + 
'}\n' + 
'\n' + 
'.item-ios.activated {\n' + 
'  background-color: #d9d9d9;\n' + 
'  transition-duration: 0ms;\n' + 
'}\n' + 
'\n' + 
'.item-ios h1 {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 2.4rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.item-ios h2 {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 1.7rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.item-ios h3,\n' + 
'.item-ios h4,\n' + 
'.item-ios h5,\n' + 
'.item-ios h6 {\n' + 
'  margin: 0 0 3px;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: normal;\n' + 
'  line-height: normal;\n' + 
'}\n' + 
'\n' + 
'.item-ios p {\n' + 
'  overflow: inherit;\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  line-height: normal;\n' + 
'  text-overflow: inherit;\n' + 
'  color: #8e9093;\n' + 
'}\n' + 
'\n' + 
'.item-ios h2:last-child,\n' + 
'.item-ios h3:last-child,\n' + 
'.item-ios h4:last-child,\n' + 
'.item-ios h5:last-child,\n' + 
'.item-ios h6:last-child,\n' + 
'.item-ios p:last-child {\n' + 
'  margin-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.item-ios.item-block .item-inner {\n' + 
'  padding-right: 8px;\n' + 
'  border-bottom: 0.55px solid #c8c7cc;\n' + 
'}\n' + 
'\n' + 
'.item-ios [slot="start"] {\n' + 
'  margin: 8px 16px 8px 0;\n' + 
'}\n' + 
'\n' + 
'.item-ios [slot="end"] {\n' + 
'  margin: 8px 8px 8px 8px;\n' + 
'}\n' + 
'\n' + 
'.item-ios ion-icon[slot="start"],\n' + 
'.item-ios ion-icon[slot="end"] {\n' + 
'  margin-top: 9px;\n' + 
'  margin-bottom: 8px;\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.item-ios .item-button {\n' + 
'  padding: 0 .5em;\n' + 
'  height: 24px;\n' + 
'  font-size: 1.3rem;\n' + 
'}\n' + 
'\n' + 
'.item-ios .item-button[icon-only] ion-icon,\n' + 
'.item-ios .item-button[icon-only] {\n' + 
'  padding: 0 1px;\n' + 
'}\n' + 
'\n' + 
'.item-ios ion-avatar[slot="start"],\n' + 
'.item-ios ion-thumbnail[slot="start"] {\n' + 
'  margin: 8px 16px 8px 0;\n' + 
'}\n' + 
'\n' + 
'.item-ios ion-avatar[slot="end"],\n' + 
'.item-ios ion-thumbnail[slot="end"] {\n' + 
'  margin: 8px;\n' + 
'}\n' + 
'\n' + 
'.item-ios ion-avatar {\n' + 
'  min-width: 36px;\n' + 
'  min-height: 36px;\n' + 
'}\n' + 
'\n' + 
'.item-ios ion-avatar ion-img,\n' + 
'.item-ios ion-avatar img {\n' + 
'  width: 36px;\n' + 
'  height: 36px;\n' + 
'  border-radius: 50%;\n' + 
'  overflow: hidden;\n' + 
'}\n' + 
'\n' + 
'.item-ios ion-thumbnail {\n' + 
'  min-width: 56px;\n' + 
'  min-height: 56px;\n' + 
'}\n' + 
'\n' + 
'.item-ios ion-thumbnail ion-img,\n' + 
'.item-ios ion-thumbnail img {\n' + 
'  width: 56px;\n' + 
'  height: 56px;\n' + 
'}\n' + 
'\n' + 
'.item-ios[detail-push] .item-inner,\n' + 
'button.item-ios:not([detail-none]) .item-inner,\n' + 
'a.item-ios:not([detail-none]) .item-inner {\n' + 
'  background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns="http://www.w3.org/2000/svg"%20viewBox="0%200%2012%2020"><path%20d="M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z"%20fill="%23c8c7cc"/></svg>");\n' + 
'  padding-right: 32px;\n' + 
'  background-repeat: no-repeat;\n' + 
'  background-position: right 14px center;\n' + 
'  background-size: 14px 14px;\n' + 
'}\n' + 
'\n' + 
'ion-item-group .item-ios:first-child .item-inner {\n' + 
'  border-top-width: 0;\n' + 
'}\n' + 
'\n' + 
'ion-item-group .item-ios:last-child .item-inner,\n' + 
'ion-item-group .item-wrapper:last-child .item-ios .item-inner {\n' + 
'  border: 0;\n' + 
'}\n' + 
'\n' + 
'.item-divider-ios {\n' + 
'  padding-left: 16px;\n' + 
'  color: #222;\n' + 
'  background-color: #f7f7f7;\n' + 
'}\n' + 
'\n' + 
'.item-ios .text-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-ios-primary,\n' + 
'.item-divider-ios-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-ios-primary p,\n' + 
'.item-divider-ios-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-ios-primary.activated,\n' + 
'.item-divider-ios-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.item-ios .text-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-ios-secondary,\n' + 
'.item-divider-ios-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-ios-secondary p,\n' + 
'.item-divider-ios-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-ios-secondary.activated,\n' + 
'.item-divider-ios-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.item-ios .text-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-ios-danger,\n' + 
'.item-divider-ios-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-ios-danger p,\n' + 
'.item-divider-ios-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-ios-danger.activated,\n' + 
'.item-divider-ios-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.item-ios .text-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-ios-light,\n' + 
'.item-divider-ios-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-ios-light p,\n' + 
'.item-divider-ios-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.item-ios-light.activated,\n' + 
'.item-divider-ios-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.item-ios .text-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-ios-dark,\n' + 
'.item-divider-ios-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-ios-dark p,\n' + 
'.item-divider-ios-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-ios-dark.activated,\n' + 
'.item-divider-ios-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.list-ios ion-item-sliding {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-label.ios *****************/
[
/** ion-label.ios: [0] tagName **/
'ion-label',

/** ion-label.ios: [1] methods **/
0 /* no methods */,

/** ion-label.ios: [2] listeners **/
0 /* no listeners */,

/** ion-label.ios: [3] watchers **/
0 /* no watchers */,

/** ion-label.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-label.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-label.ios: [6] styles **/
'/********** label.ios.scss **********/\n' + 
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
'.label-ios {\n' + 
'  margin: 11px 8px 11px 0;\n' + 
'}\n' + 
'\n' + 
'.label-ios + ion-input .text-input,\n' + 
'.label-ios + ion-textarea .text-input,\n' + 
'.label-ios + .input + .cloned-input {\n' + 
'  margin-left: 16px;\n' + 
'  width: calc(100% - (16px / 2) - 16px);\n' + 
'}\n' + 
'\n' + 
'.label-ios[stacked] {\n' + 
'  margin-bottom: 4px;\n' + 
'  font-size: 1.2rem;\n' + 
'}\n' + 
'\n' + 
'.label-ios[floating] {\n' + 
'  margin-bottom: 0;\n' + 
'  transform: translate3d(0, 27px, 0);\n' + 
'  transform-origin: left top;\n' + 
'  transition: transform 150ms ease-in-out;\n' + 
'}\n' + 
'\n' + 
'[dir="rtl"] .label-ios[floating] {\n' + 
'  transform-origin: right top;\n' + 
'}\n' + 
'\n' + 
'.input-has-focus .label-ios[floating],\n' + 
'.input-has-value .label-ios[floating] {\n' + 
'  transform: translate3d(0, 0, 0) scale(0.8);\n' + 
'}\n' + 
'\n' + 
'.item-ios.item-label-stacked [slot="end"],\n' + 
'.item-ios.item-label-floating [slot="end"] {\n' + 
'  margin-top: 6px;\n' + 
'  margin-bottom: 6px;\n' + 
'}\n' + 
'\n' + 
'.label-ios-primary,\n' + 
'.item-input .label-ios-primary,\n' + 
'.item-select .label-ios-primary,\n' + 
'.item-datetime .label-ios-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.label-ios-secondary,\n' + 
'.item-input .label-ios-secondary,\n' + 
'.item-select .label-ios-secondary,\n' + 
'.item-datetime .label-ios-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.label-ios-danger,\n' + 
'.item-input .label-ios-danger,\n' + 
'.item-select .label-ios-danger,\n' + 
'.item-datetime .label-ios-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.label-ios-light,\n' + 
'.item-input .label-ios-light,\n' + 
'.item-select .label-ios-light,\n' + 
'.item-datetime .label-ios-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.label-ios-dark,\n' + 
'.item-input .label-ios-dark,\n' + 
'.item-select .label-ios-dark,\n' + 
'.item-datetime .label-ios-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)