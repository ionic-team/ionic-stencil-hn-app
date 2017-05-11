Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-button.md",

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


/***************** ion-button.md *****************/
[
/** ion-button.md: [0] tagName **/
'ion-button',

/** ion-button.md: [1] methods **/
0 /* no methods */,

/** ion-button.md: [2] listeners **/
0 /* no listeners */,

/** ion-button.md: [3] watchers **/
0 /* no watchers */,

/** ion-button.md: [4] shadow **/
1 /* use shadow dom */,

/** ion-button.md: [5] modeName **/
2 /* md mode **/,

/** ion-button.md: [6] styles **/
'/********** button.md.scss **********/\n' + 
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
'.button-md {\n' + 
'  overflow: hidden;\n' + 
'  margin: 0.4rem 0.2rem;\n' + 
'  padding: 0 1.1em;\n' + 
'  height: 3.6rem;\n' + 
'  border-radius: 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: 500;\n' + 
'  text-transform: uppercase;\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n' + 
'  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n' + 
'}\n' + 
'\n' + 
'.button-md:hover:not(.disable-hover) {\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-md.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14), 0 3px 5px rgba(0, 0, 0, 0.21);\n' + 
'}\n' + 
'\n' + 
'.button-md .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.button-large-md {\n' + 
'  padding: 0 1em;\n' + 
'  height: 2.8em;\n' + 
'  font-size: 2rem;\n' + 
'}\n' + 
'\n' + 
'.button-small-md {\n' + 
'  padding: 0 0.9em;\n' + 
'  height: 2.1em;\n' + 
'  font-size: 1.3rem;\n' + 
'}\n' + 
'\n' + 
'.button-small-md[icon-only] ion-icon {\n' + 
'  font-size: 1.4em;\n' + 
'}\n' + 
'\n' + 
'.button-block-md {\n' + 
'  margin-right: 0;\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.button-full-md {\n' + 
'  margin-right: 0;\n' + 
'  margin-left: 0;\n' + 
'  border-right-width: 0;\n' + 
'  border-left-width: 0;\n' + 
'  border-radius: 0;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md {\n' + 
'  border-width: 1px;\n' + 
'  border-style: solid;\n' + 
'  border-color: #327eff;\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-md.activated {\n' + 
'  background-color: transparent;\n' + 
'  box-shadow: none;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md .button-effect {\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md {\n' + 
'  border-color: transparent;\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'  box-shadow: none;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-clear-md .button-effect {\n' + 
'  background-color: #999;\n' + 
'}\n' + 
'\n' + 
'.button-round-md {\n' + 
'  padding: 0 2.6rem;\n' + 
'  border-radius: 64px;\n' + 
'}\n' + 
'\n' + 
'.button-md [icon-only] {\n' + 
'  padding: 0;\n' + 
'}\n' + 
'\n' + 
'.button-effect {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  z-index: 0;\n' + 
'  display: none;\n' + 
'  border-radius: 50%;\n' + 
'  background-color: #555;\n' + 
'  opacity: .2;\n' + 
'  transform-origin: center center;\n' + 
'  transition-timing-function: ease-in-out;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.md .button-effect {\n' + 
'  display: block;\n' + 
'}\n' + 
'\n' + 
'.button-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-md-primary:hover:not(.disable-hover) {\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-md-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-md-primary .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-primary {\n' + 
'  border-color: #3078f2;\n' + 
'  color: #3078f2;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-primary:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-primary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-primary .button-effect {\n' + 
'  background-color: #3078f2;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-primary {\n' + 
'  border-color: transparent;\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-primary.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-md-secondary:hover:not(.disable-hover) {\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-md-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-md-secondary .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-secondary {\n' + 
'  border-color: #30d05f;\n' + 
'  color: #30d05f;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-secondary:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-secondary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-secondary .button-effect {\n' + 
'  background-color: #30d05f;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-secondary {\n' + 
'  border-color: transparent;\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-secondary.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-md-danger:hover:not(.disable-hover) {\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-md-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-md-danger .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-danger {\n' + 
'  border-color: #e93a3a;\n' + 
'  color: #e93a3a;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-danger:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-danger.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-danger .button-effect {\n' + 
'  background-color: #e93a3a;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-danger {\n' + 
'  border-color: transparent;\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-danger.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-md-light:hover:not(.disable-hover) {\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-md-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-md-light .button-effect {\n' + 
'  background-color: #000;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-light {\n' + 
'  border-color: #e8e8e8;\n' + 
'  color: #e8e8e8;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-light:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-light.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-light .button-effect {\n' + 
'  background-color: #e8e8e8;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-light {\n' + 
'  border-color: transparent;\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-light.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-md-dark:hover:not(.disable-hover) {\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-md-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.button-md-dark .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-dark {\n' + 
'  border-color: #2d2d2d;\n' + 
'  color: #2d2d2d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-dark:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-dark.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-md-dark .button-effect {\n' + 
'  background-color: #2d2d2d;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-dark {\n' + 
'  border-color: transparent;\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-dark.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.button-clear-md-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-strong-md {\n' + 
'  font-weight: bold;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)