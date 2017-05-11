Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-toggle.wp",

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


/***************** ion-toggle.wp *****************/
[
/** ion-toggle.wp: [0] tagName **/
'ion-toggle',

/** ion-toggle.wp: [1] methods **/
['toggle'],

/** ion-toggle.wp: [2] listeners **/
[
  [
    /***** ion-toggle.wp listener[0]  keydown.space -> onSpace() *****/
    /* [0] methodName **/ 'onSpace',
    /* [1] eventName ***/ 'keydown.space',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ]
],

/** ion-toggle.wp: [3] watchers **/
[
  [
    /*****  ion-toggle.wp watch[0] checked ***** /
    /* [0] watch prop **/ 'checked',
    /* [1] call fn *****/ 'changed'
  ]
],

/** ion-toggle.wp: [4] shadow **/
1 /* use shadow dom */,

/** ion-toggle.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-toggle.wp: [6] styles **/
'/********** toggle.wp.scss **********/\n' + 
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
'.toggle-wp {\n' + 
'  position: relative;\n' + 
'  width: 40px;\n' + 
'  height: 18px;\n' + 
'  box-sizing: content-box;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp .toggle-icon {\n' + 
'  position: relative;\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  border: 2px solid #323232;\n' + 
'  border-radius: 18px;\n' + 
'  background-color: transparent;\n' + 
'  pointer-events: none;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp .toggle-inner {\n' + 
'  position: absolute;\n' + 
'  top: 2px;\n' + 
'  left: 2px;\n' + 
'  width: 10px;\n' + 
'  height: 10px;\n' + 
'  border-radius: 50%;\n' + 
'  background-color: #323232;\n' + 
'  transition-duration: 300ms;\n' + 
'  transition-property: transform, background-color;\n' + 
'  will-change: transform, background-color;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp.toggle-checked .toggle-icon {\n' + 
'  border-color: #327eff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp.toggle-checked .toggle-inner {\n' + 
'  background-color: #fff;\n' + 
'  transform: translate3d(22px, 0, 0);\n' + 
'}\n' + 
'\n' + 
'.toggle-wp.toggle-disabled,\n' + 
'.item-wp.item-toggle-disabled ion-label {\n' + 
'  opacity: 0.3;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp.toggle-disabled ion-radio {\n' + 
'  opacity: 0.3;\n' + 
'}\n' + 
'\n' + 
'.item-wp .toggle-wp {\n' + 
'  margin: 0;\n' + 
'  padding: 12px 8px 12px 16px;\n' + 
'  cursor: pointer;\n' + 
'}\n' + 
'\n' + 
'.item-wp .toggle-wp[item-left] {\n' + 
'  padding: 12px 18px 12px 2px;\n' + 
'}\n' + 
'\n' + 
'.item-wp.item-toggle ion-label {\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-primary.toggle-checked .toggle-icon {\n' + 
'  border-color: #327eff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-primary.toggle-checked .toggle-inner {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-secondary.toggle-checked .toggle-icon {\n' + 
'  border-color: #32db64;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-secondary.toggle-checked .toggle-inner {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-danger.toggle-checked .toggle-icon {\n' + 
'  border-color: #f53d3d;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-danger.toggle-checked .toggle-inner {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-light.toggle-checked .toggle-icon {\n' + 
'  border-color: #f4f4f4;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-light.toggle-checked .toggle-inner {\n' + 
'  background-color: #000;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-dark.toggle-checked .toggle-icon {\n' + 
'  border-color: #222;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.toggle-wp-dark.toggle-checked .toggle-inner {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)