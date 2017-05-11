Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-toggle.md",

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


/***************** ion-toggle.md *****************/
[
/** ion-toggle.md: [0] tagName **/
'ion-toggle',

/** ion-toggle.md: [1] methods **/
['toggle'],

/** ion-toggle.md: [2] listeners **/
[
  [
    /***** ion-toggle.md listener[0]  keydown.space -> onSpace() *****/
    /* [0] methodName **/ 'onSpace',
    /* [1] eventName ***/ 'keydown.space',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ]
],

/** ion-toggle.md: [3] watchers **/
[
  [
    /*****  ion-toggle.md watch[0] checked ***** /
    /* [0] watch prop **/ 'checked',
    /* [1] call fn *****/ 'changed'
  ]
],

/** ion-toggle.md: [4] shadow **/
1 /* use shadow dom */,

/** ion-toggle.md: [5] modeName **/
2 /* md mode **/,

/** ion-toggle.md: [6] styles **/
'/********** toggle.md.scss **********/\n' + 
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
'.toggle-md {\n' + 
'  position: relative;\n' + 
'  padding: 12px;\n' + 
'  width: 36px;\n' + 
'  height: 14px;\n' + 
'  box-sizing: content-box;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.toggle-md .toggle-icon {\n' + 
'  position: relative;\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  border-radius: 14px;\n' + 
'  background-color: #dedede;\n' + 
'  transition: background-color 300ms;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.toggle-md .toggle-inner {\n' + 
'  position: absolute;\n' + 
'  top: -3px;\n' + 
'  left: 0;\n' + 
'  width: 20px;\n' + 
'  height: 20px;\n' + 
'  border-radius: 50%;\n' + 
'  background-color: #fff;\n' + 
'  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n' + 
'  transition-duration: 300ms;\n' + 
'  transition-property: transform, background-color;\n' + 
'  will-change: transform, background-color;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.toggle-md.toggle-checked .toggle-icon {\n' + 
'  background-color: #b2ceff;\n' + 
'}\n' + 
'\n' + 
'.toggle-md.toggle-checked .toggle-inner {\n' + 
'  background-color: #327eff;\n' + 
'  transform: translate3d(16px, 0, 0);\n' + 
'}\n' + 
'\n' + 
'.toggle-md.toggle-disabled,\n' + 
'.item-md.item-toggle-disabled ion-label {\n' + 
'  opacity: 0.3;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.toggle-md.toggle-disabled ion-radio {\n' + 
'  opacity: 0.3;\n' + 
'}\n' + 
'\n' + 
'.item-md .toggle-md {\n' + 
'  margin: 0;\n' + 
'  padding: 12px 8px 12px 16px;\n' + 
'  cursor: pointer;\n' + 
'}\n' + 
'\n' + 
'.item-md .toggle-md[item-left] {\n' + 
'  padding: 12px 18px 12px 2px;\n' + 
'}\n' + 
'\n' + 
'.item-md.item-toggle ion-label {\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-primary.toggle-checked .toggle-icon {\n' + 
'  background-color: #b2ceff;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-primary.toggle-checked .toggle-inner {\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-secondary.toggle-checked .toggle-icon {\n' + 
'  background-color: #9eeeb6;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-secondary.toggle-checked .toggle-inner {\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-danger.toggle-checked .toggle-icon {\n' + 
'  background-color: #fbb6b6;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-danger.toggle-checked .toggle-inner {\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-light.toggle-checked .toggle-icon {\n' + 
'  background-color: white;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-light.toggle-checked .toggle-inner {\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-dark.toggle-checked .toggle-icon {\n' + 
'  background-color: #626262;\n' + 
'}\n' + 
'\n' + 
'.toggle-md-dark.toggle-checked .toggle-inner {\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)