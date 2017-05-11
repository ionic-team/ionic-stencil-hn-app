Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-navbar.default",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var Navbar = (function () {
    function Navbar() {
        this._hidden = false;
        /**
         * @input {boolean} If true, the back button will be hidden.
         */
        this.hideBackButton = false;
        this._bbIcon = Ionic.config.get('backButtonIcon');
        this._sbPadding = Ionic.config.getBoolean('statusbarPadding');
        this._backText = Ionic.config.get('backButtonText', 'Back');
    }
    Navbar.prototype.backButtonClick = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // this.navCtrl && this.navCtrl.pop(null, null);
    };
    /**
     * Set the text of the Back Button in the Nav Bar. Defaults to "Back".
     */
    Navbar.prototype.setBackButtonText = function (text) {
        this._backText = text;
    };
    /**
     * @hidden
     */
    Navbar.prototype.didEnter = function () {
        // try {
        //   this._app.setTitle(this.getTitleText());
        // } catch (e) {
        //   console.error(e);
        // }
    };
    /**
     * @hidden
     */
    Navbar.prototype.setHidden = function (isHidden) {
        // used to display none/block the navbar
        this._hidden = isHidden;
    };
    return Navbar;
}());

exports['ion-navbar'] = Navbar;
},


/***************** ion-navbar.default *****************/
[
/** ion-navbar.default: [0] tagName **/
'ion-navbar',

/** ion-navbar.default: [1] methods **/
0 /* no methods */,

/** ion-navbar.default: [2] listeners **/
0 /* no listeners */,

/** ion-navbar.default: [3] watchers **/
0 /* no watchers */,

/** ion-navbar.default: [4] shadow **/
1 /* use shadow dom */,

/** ion-navbar.default: [5] modeName **/
0 /* default mode **/,

/** ion-navbar.default: [6] styles **/
0 /* no styles */

]
)