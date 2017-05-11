Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-button.ios",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var Button = (function () {
    function Button() {
        /**
         * @Prop {boolean} If true, activates the large button size.
         * Type: size
         */
        this.buttonType = 'button';
        /**
         * @Prop {boolean} If true, activates the large button size.
         * Type: size
         */
        this.large = false;
        /**
         * @Prop {boolean} If true, activates the small button size.
         * Type: size
         */
        this.small = false;
        /**
         * @Prop {boolean} If true, activates the default button size. Normally the default, useful for buttons in an item.
         * Type: size
         */
        this.default = false;
        /**
         * @Prop {boolean} If true, sets the button into a disabled state.
         */
        this.disabled = false;
        /**
         * @Prop {boolean} If true, activates a transparent button style with a border.
         * Type: style
         */
        this.outline = false;
        /**
         * @Prop {boolean} If true, activates a transparent button style without a border.
         * Type: style
         */
        this.clear = false;
        /**
         * @Prop {boolean} If true, activates a solid button style. Normally the default, useful for buttons in a toolbar.
         * Type: style
         */
        this.solid = false;
        /**
         * @Prop {boolean} If true, activates a button with rounded corners.
         * Type: shape
         */
        this.round = false;
        /**
         * @Prop {boolean} If true, activates a button style that fills the available width.
         * Type: display
         */
        this.block = false;
        /**
         * @Prop {boolean} If true, activates a button style that fills the available width without
         * a left and right border.
         * Type: display
         */
        this.full = false;
        /**
         * @Prop {boolean} If true, activates a button with a heavier font weight.
         * Type: decorator
         */
        this.strong = false;
    }
    /**
     * @hidden
     */
    Button.prototype.getElementClassList = function (buttonType, mode) {
        if (!buttonType) {
            return [];
        }
        return [
            buttonType,
            buttonType + "-" + mode
        ];
    };
    /**
     * @hidden
     */
    Button.prototype.getClassList = function (buttonType, type, mode) {
        if (!type) {
            return [];
        }
        type = type.toLocaleLowerCase();
        return [
            buttonType + "-" + type,
            buttonType + "-" + type + "-" + mode
        ];
    };
    /**
     * @hidden
     */
    Button.prototype.getColorClassList = function (color, buttonType, style, mode) {
        style = (buttonType !== 'bar-button' && style === 'solid') ? 'default' : style;
        var className = buttonType +
            ((style && style !== 'default') ?
                '-' + style.toLowerCase() :
                '');
        return [].concat(className + "-" + mode, color ? className + "-" + mode + "-" + color : []);
    };
    Button.prototype.getStyleClassList = function (buttonType) {
        var classList = [].concat(this.outline ? this.getColorClassList(this.color, buttonType, 'outline', this.mode) : [], this.clear ? this.getColorClassList(this.color, buttonType, 'clear', this.mode) : [], this.solid ? this.getColorClassList(this.color, buttonType, 'solid', this.mode) : []);
        if (classList.length === 0) {
            classList = [this.getColorClassList(this.color, buttonType, 'default', this.mode)];
        }
        return classList;
    };
    Button.prototype.render = function () {
        var size = (this.large ? 'large' : null) ||
            (this.small ? 'small' : null) ||
            (this.default ? 'default' : null);
        var shape = (this.round ? 'round' : null);
        var display = (this.block ? 'block' : null) ||
            (this.full ? 'full' : null);
        var decorator = (this.strong ? 'strong' : null);
        var buttonClasses = []
            .concat(this.getElementClassList(this.buttonType, this.mode), this.getClassList(this.buttonType, shape, this.mode), this.getClassList(this.buttonType, display, this.mode), this.getClassList(this.buttonType, size, this.mode), this.getClassList(this.buttonType, decorator, this.mode), this.getStyleClassList(this.buttonType))
            .reduce(function (prevValue, cssClass) {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
        return h(this, h('button', {
            class: buttonClasses,
            props: {
                disabled: this.disabled
            }
        }, [
            h('span', {
                class: {
                    'button-inner': true
                }
            }, h('slot')),
            h('div', {
                class: {
                    'button-effect': true
                }
            })
        ]));
    };
    return Button;
}());

exports['ion-button'] = Button;
},


/***************** ion-button.ios *****************/
[
/** ion-button.ios: [0] tagName **/
'ion-button',

/** ion-button.ios: [1] methods **/
0 /* no methods */,

/** ion-button.ios: [2] listeners **/
0 /* no listeners */,

/** ion-button.ios: [3] watchers **/
0 /* no watchers */,

/** ion-button.ios: [4] shadow **/
1 /* use shadow dom */,

/** ion-button.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-button.ios: [6] styles **/
'/********** button.ios.scss **********/\n' + 
'\n' + 
':host {\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.button {\n' + 
'  text-align: center;\n' + 
'  -moz-appearance: none;\n' + 
'  -ms-appearance: none;\n' + 
'  -webkit-appearance: none;\n' + 
'  appearance: none;\n' + 
'  border: 0;\n' + 
'  position: relative;\n' + 
'  z-index: 0;\n' + 
'  display: inline-block;\n' + 
'  text-overflow: ellipsis;\n' + 
'  text-transform: none;\n' + 
'  white-space: nowrap;\n' + 
'  cursor: pointer;\n' + 
'  vertical-align: top;\n' + 
'  vertical-align: -webkit-baseline-middle;\n' + 
'  transition: background-color, opacity 100ms linear;\n' + 
'  font-kerning: none;\n' + 
'  user-select: none;\n' + 
'  contain: content;\n' + 
'}\n' + 
'\n' + 
'.button-inner {\n' + 
'  display: flex;\n' + 
'  flex-flow: row nowrap;\n' + 
'  flex-shrink: 0;\n' + 
'  align-items: center;\n' + 
'  justify-content: center;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'}\n' + 
'\n' + 
'[ion-button] {\n' + 
'  text-decoration: none;\n' + 
'}\n' + 
'\n' + 
'a[disabled],\n' + 
'button[disabled],\n' + 
'[ion-button][disabled] {\n' + 
'  cursor: default;\n' + 
'  opacity: .4;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.button-block {\n' + 
'  display: block;\n' + 
'  clear: both;\n' + 
'  width: 100%;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.button-block::after {\n' + 
'  clear: both;\n' + 
'}\n' + 
'\n' + 
'.button-full {\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.button-full.button-outline {\n' + 
'  border-right-width: 0;\n' + 
'  border-left-width: 0;\n' + 
'  border-radius: 0;\n' + 
'}\n' + 
'\n' + 
'.bar-button {\n' + 
'  text-align: center;\n' + 
'  -moz-appearance: none;\n' + 
'  -ms-appearance: none;\n' + 
'  -webkit-appearance: none;\n' + 
'  appearance: none;\n' + 
'  border: 0;\n' + 
'  position: relative;\n' + 
'  display: inline-block;\n' + 
'  margin: 0;\n' + 
'  padding: 0;\n' + 
'  line-height: 1;\n' + 
'  text-overflow: ellipsis;\n' + 
'  text-transform: none;\n' + 
'  white-space: nowrap;\n' + 
'  cursor: pointer;\n' + 
'  vertical-align: top;\n' + 
'  vertical-align: -webkit-baseline-middle;\n' + 
'  user-select: none;\n' + 
'}\n' + 
'\n' + 
'.bar-button::after {\n' + 
'  position: absolute;\n' + 
'  top: -7px;\n' + 
'  right: -2px;\n' + 
'  bottom: -6px;\n' + 
'  left: -2px;\n' + 
'  content: "";\n' + 
'}\n' + 
'\n' + 
'.bar-button-menutoggle {\n' + 
'  display: flex;\n' + 
'  align-items: center;\n' + 
'}\n' + 
'\n' + 
'.back-button {\n' + 
'  display: none;\n' + 
'}\n' + 
'\n' + 
'.back-button.show-back-button {\n' + 
'  display: inline-block;\n' + 
'}\n' + 
'\n' + 
'.back-button-text {\n' + 
'  display: flex;\n' + 
'  align-items: center;\n' + 
'}\n' + 
'\n' + 
'.button-ios {\n' + 
'  margin: 0.4rem 0.2rem;\n' + 
'  padding: 0 1em;\n' + 
'  height: 2.8em;\n' + 
'  border-radius: 4px;\n' + 
'  font-size: 1.6rem;\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-ios.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-ios:hover:not(.disable-hover) {\n' + 
'  opacity: 0.8;\n' + 
'}\n' + 
'\n' + 
'.button-large-ios {\n' + 
'  padding: 0 1em;\n' + 
'  height: 2.8em;\n' + 
'  font-size: 2rem;\n' + 
'}\n' + 
'\n' + 
'.button-small-ios {\n' + 
'  padding: 0 0.9em;\n' + 
'  height: 2.1em;\n' + 
'  font-size: 1.3rem;\n' + 
'}\n' + 
'\n' + 
'.button-small-ios[icon-only] ion-icon {\n' + 
'  font-size: 1.3em;\n' + 
'}\n' + 
'\n' + 
'.button-block-ios {\n' + 
'  margin-right: 0;\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.button-full-ios {\n' + 
'  margin-right: 0;\n' + 
'  margin-left: 0;\n' + 
'  border-right-width: 0;\n' + 
'  border-left-width: 0;\n' + 
'  border-radius: 0;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios {\n' + 
'  border-width: 1px;\n' + 
'  border-style: solid;\n' + 
'  border-radius: 4px;\n' + 
'  border-color: #327eff;\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios {\n' + 
'  border-color: transparent;\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios.activated {\n' + 
'  background-color: transparent;\n' + 
'  opacity: 0.4;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'  opacity: 0.6;\n' + 
'}\n' + 
'\n' + 
'.button-round-ios {\n' + 
'  padding: 0 2.6rem;\n' + 
'  border-radius: 64px;\n' + 
'}\n' + 
'\n' + 
'.button-ios-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-ios-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-primary {\n' + 
'  border-color: #327eff;\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-primary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-primary {\n' + 
'  border-color: transparent;\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-primary.activated {\n' + 
'  opacity: 0.4;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-ios-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-ios-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-secondary {\n' + 
'  border-color: #32db64;\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-secondary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-secondary {\n' + 
'  border-color: transparent;\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-secondary.activated {\n' + 
'  opacity: 0.4;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-ios-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-ios-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-danger {\n' + 
'  border-color: #f53d3d;\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-danger.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-danger {\n' + 
'  border-color: transparent;\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-danger.activated {\n' + 
'  opacity: 0.4;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-ios-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-ios-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-light {\n' + 
'  border-color: #f4f4f4;\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-light.activated {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-light {\n' + 
'  border-color: transparent;\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-light.activated {\n' + 
'  opacity: 0.4;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-ios-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-ios-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-dark {\n' + 
'  border-color: #222;\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-ios-dark.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-dark {\n' + 
'  border-color: transparent;\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-dark.activated {\n' + 
'  opacity: 0.4;\n' + 
'}\n' + 
'\n' + 
'.button-clear-ios-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-strong-ios {\n' + 
'  font-weight: 600;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)