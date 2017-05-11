Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-button.wp",

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


/***************** ion-button.wp *****************/
[
/** ion-button.wp: [0] tagName **/
'ion-button',

/** ion-button.wp: [1] methods **/
0 /* no methods */,

/** ion-button.wp: [2] listeners **/
0 /* no listeners */,

/** ion-button.wp: [3] watchers **/
0 /* no watchers */,

/** ion-button.wp: [4] shadow **/
1 /* use shadow dom */,

/** ion-button.wp: [5] modeName **/
3 /* wp mode **/,

/** ion-button.wp: [6] styles **/
'/********** button.wp.scss **********/\n' + 
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
'.button-wp {\n' + 
'  margin: 0.4rem 0.2rem;\n' + 
'  padding: 0 1.1em;\n' + 
'  height: 3.6rem;\n' + 
'  border: 3px solid transparent;\n' + 
'  border-radius: 0;\n' + 
'  font-size: 1.4rem;\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-wp:hover:not(.disable-hover) {\n' + 
'  border-color: #2e74eb;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-wp.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.button-large-wp {\n' + 
'  padding: 0 1em;\n' + 
'  height: 2.8em;\n' + 
'  font-size: 2rem;\n' + 
'}\n' + 
'\n' + 
'.button-small-wp {\n' + 
'  padding: 0 0.9em;\n' + 
'  height: 2.1em;\n' + 
'  font-size: 1.3rem;\n' + 
'}\n' + 
'\n' + 
'.button-small-wp[icon-only] ion-icon {\n' + 
'  font-size: 1.4em;\n' + 
'}\n' + 
'\n' + 
'.button-block-wp {\n' + 
'  margin-right: 0;\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.button-full-wp {\n' + 
'  margin-right: 0;\n' + 
'  margin-left: 0;\n' + 
'  border-right-width: 0;\n' + 
'  border-left-width: 0;\n' + 
'  border-radius: 0;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp {\n' + 
'  border-width: 1px;\n' + 
'  border-style: solid;\n' + 
'  border-color: #327eff;\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp.activated {\n' + 
'  background-color: rgba(50, 126, 255, 0.16);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp {\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp:hover:not(.disable-hover) {\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-round-wp {\n' + 
'  padding: 0 2.6rem;\n' + 
'  border-radius: 64px;\n' + 
'}\n' + 
'\n' + 
'.button-wp [icon-only] {\n' + 
'  padding: 0;\n' + 
'}\n' + 
'\n' + 
'.button-wp-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-wp-primary:hover:not(.disable-hover) {\n' + 
'  border-color: #2e74eb;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-wp-primary.activated {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-primary {\n' + 
'  border-color: #3078f2;\n' + 
'  color: #3078f2;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-primary:hover:not(.disable-hover) {\n' + 
'  border-color: #3078f2;\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-primary.activated {\n' + 
'  background-color: rgba(48, 120, 242, 0.16);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-primary {\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-primary.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.button-wp-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-wp-secondary:hover:not(.disable-hover) {\n' + 
'  border-color: #2ec95c;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-wp-secondary.activated {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-secondary {\n' + 
'  border-color: #30d05f;\n' + 
'  color: #30d05f;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-secondary:hover:not(.disable-hover) {\n' + 
'  border-color: #30d05f;\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-secondary.activated {\n' + 
'  background-color: rgba(48, 208, 95, 0.16);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-secondary {\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-secondary.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.button-wp-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-wp-danger:hover:not(.disable-hover) {\n' + 
'  border-color: #e13838;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-wp-danger.activated {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-danger {\n' + 
'  border-color: #e93a3a;\n' + 
'  color: #e93a3a;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-danger:hover:not(.disable-hover) {\n' + 
'  border-color: #e93a3a;\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-danger.activated {\n' + 
'  background-color: rgba(233, 58, 58, 0.16);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-danger {\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-danger.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.button-wp-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-wp-light:hover:not(.disable-hover) {\n' + 
'  border-color: #e0e0e0;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-wp-light.activated {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-light {\n' + 
'  border-color: #e8e8e8;\n' + 
'  color: #e8e8e8;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-light:hover:not(.disable-hover) {\n' + 
'  border-color: #e8e8e8;\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-light.activated {\n' + 
'  background-color: rgba(232, 232, 232, 0.16);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-light {\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-light.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.button-wp-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-wp-dark:hover:not(.disable-hover) {\n' + 
'  border-color: #343434;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-wp-dark.activated {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-dark {\n' + 
'  border-color: #2d2d2d;\n' + 
'  color: #2d2d2d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-dark:hover:not(.disable-hover) {\n' + 
'  border-color: #2d2d2d;\n' + 
'  background-color: rgba(158, 158, 158, 0.1);\n' + 
'}\n' + 
'\n' + 
'.button-outline-wp-dark.activated {\n' + 
'  background-color: rgba(45, 45, 45, 0.16);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-dark {\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-dark.activated {\n' + 
'  background-color: rgba(158, 158, 158, 0.2);\n' + 
'}\n' + 
'\n' + 
'.button-clear-wp-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.button-strong-wp {\n' + 
'  font-weight: bold;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)