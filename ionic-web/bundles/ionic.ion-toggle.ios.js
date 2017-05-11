Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-toggle.ios",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var Toggle = (function () {
    function Toggle() {
    }
    Toggle.prototype.changed = function (val) {
        Ionic.emit(this, 'ionChange', { detail: { checked: val } });
    };
    Toggle.prototype.canStart = function () {
        return !this.disabled;
    };
    Toggle.prototype.onDragStart = function (detail) {
        this.startX = detail.startX;
        this.fireFocus();
    };
    Toggle.prototype.onDragMove = function (detail) {
        if (this.checked) {
            if (detail.currentX + 15 < this.startX) {
                this.checked = false;
                this.activated = true;
                this.startX = detail.currentX;
            }
        }
        else if (detail.currentX - 15 > this.startX) {
            this.checked = true;
            this.activated = (detail.currentX < this.startX + 5);
            this.startX = detail.currentX;
        }
    };
    Toggle.prototype.onDragEnd = function (detail) {
        if (this.checked) {
            if (detail.startX + 4 > detail.currentX) {
                this.checked = false;
            }
        }
        else if (detail.startX - 4 < detail.currentX) {
            this.checked = true;
        }
        this.activated = false;
        this.fireBlur();
        this.startX = null;
    };
    Toggle.prototype.onSpace = function (ev) {
        this.toggle();
        ev.stopPropagation();
        ev.preventDefault();
    };
    Toggle.prototype.toggle = function () {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.fireFocus();
        }
        return this.checked;
    };
    Toggle.prototype.fireFocus = function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            Ionic.emit(this, 'ionFocus');
        }
    };
    Toggle.prototype.fireBlur = function () {
        if (this.hasFocus) {
            this.hasFocus = false;
            Ionic.emit(this, 'ionBlur');
        }
    };
    Toggle.prototype.render = function () {
        return h(this, h('ion-gesture', Ionic.theme(this, 'toggle', {
            class: {
                'toggle-activated': this.activated,
                'toggle-checked': this.checked,
                'toggle-disabled': this.disabled,
            },
            props: {
                'canStart': this.canStart.bind(this),
                'onStart': this.onDragStart.bind(this),
                'onMove': this.onDragMove.bind(this),
                'onEnd': this.onDragEnd.bind(this),
                'onPress': this.toggle.bind(this),
                'gestureName': 'toggle',
                'gesturePriority': 30,
                'type': 'pan,press',
                'direction': 'x',
                'threshold': 20,
                'attachTo': 'parent'
            }
        }), [
            h('div.toggle-icon', h('div.toggle-inner')),
            h('div.toggle-cover', {
                attrs: {
                    'id': this.id,
                    'aria-checked': this.checked ? 'true' : false,
                    'aria-disabled': this.disabled ? 'true' : false,
                    'aria-labelledby': this.labelId,
                    'role': 'checkbox',
                    'tabindex': 0
                }
            })
        ]));
    };
    return Toggle;
}());

exports['ion-toggle'] = Toggle;
},


/***************** ion-toggle.ios *****************/
[
/** ion-toggle.ios: [0] tagName **/
'ion-toggle',

/** ion-toggle.ios: [1] methods **/
['toggle'],

/** ion-toggle.ios: [2] listeners **/
[
  [
    /***** ion-toggle.ios listener[0]  keydown.space -> onSpace() *****/
    /* [0] methodName **/ 'onSpace',
    /* [1] eventName ***/ 'keydown.space',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ]
],

/** ion-toggle.ios: [3] watchers **/
[
  [
    /*****  ion-toggle.ios watch[0] checked ***** /
    /* [0] watch prop **/ 'checked',
    /* [1] call fn *****/ 'changed'
  ]
],

/** ion-toggle.ios: [4] shadow **/
1 /* use shadow dom */,

/** ion-toggle.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-toggle.ios: [6] styles **/
'/********** toggle.ios.scss **********/\n' + 
'\n' + 
'ion-toggle,\n' + 
':host {\n' + 
'  display: inline-block;\n' + 
'  visibility: inherit !important;\n' + 
'  contain: content;\n' + 
'}\n' + 
'\n' + 
'ion-gesture {\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.toggle-cover {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  border: 0;\n' + 
'  background: transparent;\n' + 
'  font-family: inherit;\n' + 
'  font-style: inherit;\n' + 
'  font-variant: inherit;\n' + 
'  line-height: 1;\n' + 
'  text-transform: none;\n' + 
'  cursor: pointer;\n' + 
'  outline: none;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios {\n' + 
'  position: relative;\n' + 
'  width: 51px;\n' + 
'  height: 32px;\n' + 
'  box-sizing: content-box;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios .toggle-icon {\n' + 
'  position: relative;\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  border-radius: 16px;\n' + 
'  background-color: #e6e6e6;\n' + 
'  transition: background-color 300ms;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios .toggle-icon::before {\n' + 
'  position: absolute;\n' + 
'  top: 2px;\n' + 
'  right: 2px;\n' + 
'  bottom: 2px;\n' + 
'  left: 2px;\n' + 
'  border-radius: 16px;\n' + 
'  background-color: #fff;\n' + 
'  content: "";\n' + 
'  transform: scale3d(1, 1, 1);\n' + 
'  transition: transform 300ms;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios .toggle-inner {\n' + 
'  position: absolute;\n' + 
'  top: 2px;\n' + 
'  left: 2px;\n' + 
'  width: 28px;\n' + 
'  height: 28px;\n' + 
'  border-radius: 14px;\n' + 
'  background-color: #fff;\n' + 
'  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n' + 
'  transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms;\n' + 
'  will-change: transform;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios.toggle-checked .toggle-icon {\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios.toggle-activated .toggle-icon::before,\n' + 
'.toggle-ios.toggle-checked .toggle-icon::before {\n' + 
'  transform: scale3d(0, 0, 0);\n' + 
'}\n' + 
'\n' + 
'.toggle-ios.toggle-checked .toggle-inner {\n' + 
'  transform: translate3d(19px, 0, 0);\n' + 
'}\n' + 
'\n' + 
'.toggle-ios.toggle-activated.toggle-checked .toggle-inner::before {\n' + 
'  transform: scale3d(0, 0, 0);\n' + 
'}\n' + 
'\n' + 
'.toggle-ios.toggle-activated .toggle-inner {\n' + 
'  width: 34px;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios.toggle-activated.toggle-checked .toggle-inner {\n' + 
'  left: -4px;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios.toggle-disabled,\n' + 
'.item-ios.item-toggle-disabled ion-label {\n' + 
'  opacity: 0.3;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.item-ios .toggle-ios {\n' + 
'  margin: 0;\n' + 
'  padding: 6px 8px 5px 16px;\n' + 
'}\n' + 
'\n' + 
'.item-ios .toggle-ios[item-left] {\n' + 
'  padding: 6px 16px 5px 0;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios-primary.toggle-checked .toggle-icon {\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios-secondary.toggle-checked .toggle-icon {\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios-danger.toggle-checked .toggle-icon {\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios-light.toggle-checked .toggle-icon {\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toggle-ios-dark.toggle-checked .toggle-icon {\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)