Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-list.md.ion-item.md.ion-label.md",

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


/***************** ion-list.md *****************/
[
/** ion-list.md: [0] tagName **/
'ion-list',

/** ion-list.md: [1] methods **/
0 /* no methods */,

/** ion-list.md: [2] listeners **/
0 /* no listeners */,

/** ion-list.md: [3] watchers **/
0 /* no watchers */,

/** ion-list.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-list.md: [5] modeName **/
2 /* md mode **/,

/** ion-list.md: [6] styles **/
'/********** list.md.scss **********/\n' + 
'\n' + 
'ion-list {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'  contain: content;\n' + 
'}\n' + 
'\n' + 
'.list-md {\n' + 
'  margin: -1px 0 16px 0;\n' + 
'}\n' + 
'\n' + 
'.list-md .item-block .item-inner {\n' + 
'  border-bottom: 1px solid #dedede;\n' + 
'}\n' + 
'\n' + 
'.list-md > .item-block:last-child ion-label,\n' + 
'.list-md > .item-block:last-child .item-inner,\n' + 
'.list-md > .item-wrapper:last-child ion-label,\n' + 
'.list-md > .item-wrapper:last-child .item-inner {\n' + 
'  border-bottom: 0;\n' + 
'}\n' + 
'\n' + 
'.list-md > ion-input:last-child::after {\n' + 
'  left: 0;\n' + 
'}\n' + 
'\n' + 
'.list-md ion-item-options {\n' + 
'  border-bottom: 1px solid #dedede;\n' + 
'}\n' + 
'\n' + 
'.list-md ion-item-options .button {\n' + 
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
'.list-md ion-item-options .button::before {\n' + 
'  margin: 0 auto;\n' + 
'}\n' + 
'\n' + 
'.list-md .item[no-lines],\n' + 
'.list-md .item[no-lines] .item-inner {\n' + 
'  border-width: 0;\n' + 
'}\n' + 
'\n' + 
'.list-md + ion-list ion-list-header {\n' + 
'  margin-top: -16px;\n' + 
'}\n' + 
'\n' + 
'.list-md[inset] {\n' + 
'  margin: 16px 16px 16px 16px;\n' + 
'  border-radius: 2px;\n' + 
'}\n' + 
'\n' + 
'.list-md[inset] .item:first-child {\n' + 
'  border-top-width: 0;\n' + 
'  border-top-left-radius: 2px;\n' + 
'  border-top-right-radius: 2px;\n' + 
'}\n' + 
'\n' + 
'.list-md[inset] .item:last-child {\n' + 
'  border-bottom-width: 0;\n' + 
'  border-bottom-left-radius: 2px;\n' + 
'  border-bottom-right-radius: 2px;\n' + 
'}\n' + 
'\n' + 
'.list-md[inset] .item-input {\n' + 
'  padding-right: 0;\n' + 
'  padding-left: 0;\n' + 
'}\n' + 
'\n' + 
'.list-md[inset] + ion-list[inset] {\n' + 
'  margin-top: 0;\n' + 
'}\n' + 
'\n' + 
'.list-md[inset] ion-list-header {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.list-md[no-lines] .item-block,\n' + 
'.list-md[no-lines] ion-item-options,\n' + 
'.list-md[no-lines] .item .item-inner {\n' + 
'  border-width: 0;\n' + 
'}\n' + 
'\n' + 
'.list-header-md {\n' + 
'  margin-bottom: 13px;\n' + 
'  padding-left: 16px;\n' + 
'  min-height: 4.5rem;\n' + 
'  border-top: 1px solid #dedede;\n' + 
'  font-size: 1.4rem;\n' + 
'  color: #757575;\n' + 
'}\n' + 
'\n' + 
'[dir="rtl"] .list-header-md {\n' + 
'  padding-right: 16px;\n' + 
'  padding-left: 0;\n' + 
'}\n' + 
'\n' + 
'.list-header-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.list-header-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.list-header-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.list-header-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.list-header-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.list-md .item-input:last-child {\n' + 
'  border-bottom: 1px solid #dedede;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-item.md *****************/
[
/** ion-item.md: [0] tagName **/
'ion-item',

/** ion-item.md: [1] methods **/
0 /* no methods */,

/** ion-item.md: [2] listeners **/
0 /* no listeners */,

/** ion-item.md: [3] watchers **/
0 /* no watchers */,

/** ion-item.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-item.md: [5] modeName **/
2 /* md mode **/,

/** ion-item.md: [6] styles **/
'/********** item.md.scss **********/\n' + 
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
'.item-md {\n' + 
'  position: relative;\n' + 
'  padding-right: 0;\n' + 
'  padding-left: 16px;\n' + 
'  font-size: 1.6rem;\n' + 
'  font-weight: normal;\n' + 
'  text-transform: none;\n' + 
'  color: #000;\n' + 
'  background-color: #fff;\n' + 
'  box-shadow: none;\n' + 
'  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n' + 
'}\n' + 
'\n' + 
'.item-md.activated {\n' + 
'  background-color: #f1f1f1;\n' + 
'}\n' + 
'\n' + 
'.item-md[no-lines] {\n' + 
'  border-width: 0;\n' + 
'}\n' + 
'\n' + 
'.item-md h1 {\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 2.4rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.item-md h2 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.6rem;\n' + 
'  font-weight: normal;\n' + 
'}\n' + 
'\n' + 
'.item-md h3,\n' + 
'.item-md h4,\n' + 
'.item-md h5,\n' + 
'.item-md h6 {\n' + 
'  margin: 2px 0;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: normal;\n' + 
'  line-height: normal;\n' + 
'}\n' + 
'\n' + 
'.item-md p {\n' + 
'  overflow: inherit;\n' + 
'  margin: 0 0 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  line-height: normal;\n' + 
'  text-overflow: inherit;\n' + 
'  color: #666;\n' + 
'}\n' + 
'\n' + 
'.item-md.item-block .item-inner {\n' + 
'  padding-right: 8px;\n' + 
'  border-bottom: 1px solid #dedede;\n' + 
'}\n' + 
'\n' + 
'.item-md [slot="start"],\n' + 
'.item-md [slot="end"] {\n' + 
'  margin: 9px 8px 9px 0;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-icon[slot="start"],\n' + 
'.item-md ion-icon[slot="end"] {\n' + 
'  margin-top: 11px;\n' + 
'  margin-bottom: 10px;\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.item-md .item-button {\n' + 
'  padding: 0 .6em;\n' + 
'  height: 25px;\n' + 
'  font-size: 1.2rem;\n' + 
'}\n' + 
'\n' + 
'.item-md .item-button[icon-only] ion-icon,\n' + 
'.item-md .item-button[icon-only] {\n' + 
'  padding: 0 1px;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-icon[slot="start"] + .item-inner,\n' + 
'.item-md ion-icon[slot="start"] + .item-input {\n' + 
'  margin-left: 24px;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-avatar[slot="start"],\n' + 
'.item-md ion-thumbnail[slot="start"] {\n' + 
'  margin: 8px 16px 8px 0;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-avatar[slot="end"],\n' + 
'.item-md ion-thumbnail[slot="end"] {\n' + 
'  margin: 8px;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-avatar {\n' + 
'  min-width: 40px;\n' + 
'  min-height: 40px;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-avatar ion-img,\n' + 
'.item-md ion-avatar img {\n' + 
'  width: 40px;\n' + 
'  height: 40px;\n' + 
'  border-radius: 50%;\n' + 
'  overflow: hidden;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-thumbnail {\n' + 
'  min-width: 80px;\n' + 
'  min-height: 80px;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-thumbnail ion-img,\n' + 
'.item-md ion-thumbnail img {\n' + 
'  width: 80px;\n' + 
'  height: 80px;\n' + 
'}\n' + 
'\n' + 
'ion-item-group .item-md:first-child .item-inner {\n' + 
'  border-top-width: 0;\n' + 
'}\n' + 
'\n' + 
'ion-item-group .item-md:last-child .item-inner,\n' + 
'ion-item-group .item-md .item-wrapper:last-child .item-inner {\n' + 
'  border: 0;\n' + 
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
'.item-md .text-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-md-primary,\n' + 
'.item-divider-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.item-md-primary p,\n' + 
'.item-divider-md-primary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-md-primary.activated,\n' + 
'.item-divider-md-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.item-md .text-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-md-secondary,\n' + 
'.item-divider-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.item-md-secondary p,\n' + 
'.item-divider-md-secondary p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-md-secondary.activated,\n' + 
'.item-divider-md-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.item-md .text-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-md-danger,\n' + 
'.item-divider-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.item-md-danger p,\n' + 
'.item-divider-md-danger p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-md-danger.activated,\n' + 
'.item-divider-md-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.item-md .text-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-md-light,\n' + 
'.item-divider-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.item-md-light p,\n' + 
'.item-divider-md-light p {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.item-md-light.activated,\n' + 
'.item-divider-md-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.item-md .text-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-md-dark,\n' + 
'.item-divider-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.item-md-dark p,\n' + 
'.item-divider-md-dark p {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-md-dark.activated,\n' + 
'.item-divider-md-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.list-md ion-item-sliding {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.item-md ion-reorder {\n' + 
'  font-size: 1.5em;\n' + 
'  opacity: .3;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-label.md *****************/
[
/** ion-label.md: [0] tagName **/
'ion-label',

/** ion-label.md: [1] methods **/
0 /* no methods */,

/** ion-label.md: [2] listeners **/
0 /* no listeners */,

/** ion-label.md: [3] watchers **/
0 /* no watchers */,

/** ion-label.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-label.md: [5] modeName **/
2 /* md mode **/,

/** ion-label.md: [6] styles **/
'/********** label.md.scss **********/\n' + 
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
'.label-md {\n' + 
'  margin: 13px 8px 13px 0;\n' + 
'}\n' + 
'\n' + 
'.item-input .label-md,\n' + 
'.item-select .label-md,\n' + 
'.item-datetime .label-md {\n' + 
'  color: #999;\n' + 
'}\n' + 
'\n' + 
'.label-md[stacked] {\n' + 
'  font-size: 1.2rem;\n' + 
'}\n' + 
'\n' + 
'.label-md[floating] {\n' + 
'  transform: translate3d(0, 27px, 0);\n' + 
'  transform-origin: left top;\n' + 
'  transition: transform 150ms ease-in-out;\n' + 
'}\n' + 
'\n' + 
'[dir="rtl"] .label-md[floating] {\n' + 
'  transform-origin: right top;\n' + 
'}\n' + 
'\n' + 
'.label-md[stacked],\n' + 
'.label-md[floating] {\n' + 
'  margin-bottom: 0;\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.input-has-focus .label-md[stacked],\n' + 
'.input-has-focus .label-md[floating] {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.input-has-focus .label-md[floating],\n' + 
'.input-has-value .label-md[floating] {\n' + 
'  transform: translate3d(0, 0, 0) scale(0.8);\n' + 
'}\n' + 
'\n' + 
'.item-md.item-label-stacked [slot="end"],\n' + 
'.item-md.item-label-floating [slot="end"] {\n' + 
'  margin-top: 7px;\n' + 
'  margin-bottom: 7px;\n' + 
'}\n' + 
'\n' + 
'.label-md-primary,\n' + 
'.item-input .label-md-primary,\n' + 
'.item-select .label-md-primary,\n' + 
'.item-datetime .label-md-primary {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.label-md-secondary,\n' + 
'.item-input .label-md-secondary,\n' + 
'.item-select .label-md-secondary,\n' + 
'.item-datetime .label-md-secondary {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.label-md-danger,\n' + 
'.item-input .label-md-danger,\n' + 
'.item-select .label-md-danger,\n' + 
'.item-datetime .label-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.label-md-light,\n' + 
'.item-input .label-md-light,\n' + 
'.item-select .label-md-light,\n' + 
'.item-datetime .label-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.label-md-dark,\n' + 
'.item-input .label-md-dark,\n' + 
'.item-select .label-md-dark,\n' + 
'.item-datetime .label-md-dark {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)