Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-modal.ios.ion-modal-portal.ios",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
/**
 * iOS Modal Enter Animation
 */
var iOSEnterAnimation = function (baseElm) {
    var baseAnimation = new Ionic.Animation();
    var backdropAnimation = new Ionic.Animation();
    backdropAnimation.addElement(baseElm.querySelector('.modal-backdrop'));
    var wrapperAnimation = new Ionic.Animation();
    wrapperAnimation.addElement(baseElm.querySelector('.modal-wrapper'));
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '100%', '0%');
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    return baseAnimation
        .addElement(baseElm)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .addChildAnimation(backdropAnimation)
        .addChildAnimation(wrapperAnimation);
};
/**
 * Animations for modals
 */
// export function modalSlideIn(rootElm: HTMLElement) {
// }
// export class ModalSlideOut {
//   constructor(ele: HTMLElement) {
//     let backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
//     let wrapperEle = <HTMLElement>ele.querySelector('.modal-wrapper');
//     let wrapperEleRect = wrapperEle.getBoundingClientRect();
//     let wrapper = new Animation(this.plt, wrapperEle);
//     // height of the screen - top of the container tells us how much to scoot it down
//     // so it's off-screen
//     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     this
//       .element(this.leavingView.pageRef())
//       .easing('ease-out')
//       .duration(250)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideIn {
//   constructor(ele: HTMLElement) {
//     const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.01, 0.4);
//     wrapper.fromTo('translateY', '40px', '0px');
//     wrapper.fromTo('opacity', 0.01, 1);
//     const DURATION = 280;
//     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
//     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideOut {
//   constructor(ele: HTMLElement) {
//     const backdrop = new Animation(this.plt, ele.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     wrapper.fromTo('translateY', '0px', '40px');
//     wrapper.fromTo('opacity', 0.99, 0);
//     this
//       .element(this.leavingView.pageRef())
//       .duration(200)
//       .easing('cubic-bezier(0.47,0,0.745,0.715)')
//       .add(wrapper)
//       .add(backdrop);
//   }
// }

/**
 * iOS Modal Leave Animation
 */
var iOSLeaveAnimation = function (baseElm) {
    var baseAnimation = new Ionic.Animation();
    var backdropAnimation = new Ionic.Animation();
    backdropAnimation.addElement(baseElm.querySelector('.modal-backdrop'));
    var wrapperAnimation = new Ionic.Animation();
    var wrapperElm = baseElm.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperElm);
    var wrapperElmRect = wrapperElm.getBoundingClientRect();
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '0%', window.innerHeight - wrapperElmRect.top + "px");
    backdropAnimation.fromTo('opacity', 0.4, 0.0);
    return baseAnimation
        .addElement(baseElm)
        .easing('ease-out')
        .duration(250)
        .addChildAnimation(backdropAnimation)
        .addChildAnimation(wrapperAnimation);
};

var Modal = (function () {
    function Modal() {
        this.enableBackdropDismiss = true;
        this.showBackdrop = true;
    }
    Modal.prototype.onDismiss = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    };
    Modal.prototype.ionViewDidLoad = function () {
        Ionic.emit(this, 'ionModalDidLoad', { detail: { modal: this } });
    };
    Modal.prototype.present = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._present(resolve);
        });
    };
    Modal.prototype._present = function (resolve) {
        var _this = this;
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        Ionic.emit(this, 'ionModalWillPresent', { detail: { modal: this } });
        // get the user's animation fn if one was provided
        var animationBuilder = this.enterAnimation;
        if (!animationBuilder) {
            // user did not provide a custom animation fn
            // decide from the config which animation to use
            // TODO!!
            animationBuilder = iOSEnterAnimation;
        }
        // build the animation and kick it off
        this.animation = animationBuilder(this.$el);
        this.animation.onFinish(function (a) {
            a.destroy();
            Ionic.emit(_this, 'ionModalDidPresent', { detail: { modal: _this } });
            resolve();
        }).play();
    };
    Modal.prototype.dismiss = function () {
        var _this = this;
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        return new Promise(function (resolve) {
            Ionic.emit(_this, 'ionModalWillDismiss', { detail: { modal: _this } });
            // get the user's animation fn if one was provided
            var animationBuilder = _this.exitAnimation;
            if (!animationBuilder) {
                // user did not provide a custom animation fn
                // decide from the config which animation to use
                // TODO!!
                animationBuilder = iOSLeaveAnimation;
            }
            // build the animation and kick it off
            _this.animation = animationBuilder(_this.$el);
            _this.animation.onFinish(function (a) {
                a.destroy();
                Ionic.emit(_this, 'ionModalDidDismiss', { detail: { modal: _this } });
                Ionic.dom.write(function () {
                    _this.$el.parentNode.removeChild(_this.$el);
                });
                resolve();
            }).play();
        });
    };
    Modal.prototype.ionViewWillUnload = function () {
        Ionic.emit(this, 'ionModalWillUnload', { detail: { modal: this } });
    };
    Modal.prototype.backdropClick = function () {
        if (this.enableBackdropDismiss) {
            // const opts: NavOptions = {
            //   minClickBlockDuration: 400
            // };
            this.dismiss();
        }
    };
    Modal.prototype.render = function () {
        var userCssClass = 'modal-content';
        if (this.cssClass) {
            userCssClass += ' ' + this.cssClass;
        }
        return h(this, [
            h('div.modal-backdrop', {
                on: {
                    'click': this.backdropClick.bind(this)
                }
            }),
            h('div', Ionic.theme(this, 'modal-wrapper'), h(this.component, Ionic.theme(this, userCssClass))),
        ]);
    };
    return Modal;
}());

var ModalPortal = (function () {
    function ModalPortal() {
        this.ids = 0;
        this.modalResolves = {};
        this.modals = [];
    }
    ModalPortal.prototype.ionViewDidLoad = function () {
        var modalCtrl = Ionic.modal;
        var createQueue = modalCtrl._create;
        if (createQueue) {
            var modalElm;
            // tag/*0*/, data/*1*/, opts/*2*/, resolve/*3:create.resolve*/
            for (var i = 0; i < createQueue.length; i += 4) {
                modalElm = this.generate(createQueue[i], createQueue[i + 1], createQueue[i + 2]);
                this.modalResolves[modalElm.id] = createQueue[i + 3];
                document.body.appendChild(modalElm);
            }
            delete modalCtrl._create;
        }
        // replace the stubbed modal#create with the actual one
        Ionic.modal.create = this.create.bind(this);
    };
    ModalPortal.prototype.create = function (component, params, opts) {
        var _this = this;
        var modalElm = this.generate(component, params, opts);
        // append the modal element to the document body
        document.body.appendChild(modalElm);
        // store the resolve function to be called later up when the modal loads
        return new Promise(function (resolve) {
            _this.modalResolves[modalElm.id] = resolve;
        });
    };
    ModalPortal.prototype.generate = function (userComponent, params, opts) {
        // create ionic's wrapping ion-modal component
        var modal = document.createElement('ion-modal');
        var id = this.ids++;
        // give this modal a unique id
        modal.id = "modal-" + id;
        modal.style.zIndex = (10000 + id);
        modal.component = userComponent;
        modal.params = params;
        // convert the passed in modal options into props
        // that get passed down into the new modal
        if (opts) {
            Object.assign(modal, opts);
        }
        return modal;
    };
    ModalPortal.prototype.viewDidLoad = function (ev) {
        var modal = ev.detail.modal;
        var modalResolve = this.modalResolves[modal.id];
        if (modalResolve) {
            modalResolve(modal);
            delete this.modalResolves[modal.id];
        }
    };
    ModalPortal.prototype.willPresent = function (ev) {
        this.modals.push(ev.detail.modal);
    };
    ModalPortal.prototype.willDismiss = function (ev) {
        var index = this.modals.indexOf(ev.detail.modal);
        if (index > -1) {
            this.modals.splice(index, 1);
        }
    };
    ModalPortal.prototype.escapeKeyUp = function () {
        var lastModal = this.modals[this.modals.length - 1];
        if (lastModal) {
            lastModal.dismiss();
        }
    };
    return ModalPortal;
}());

exports['ion-modal'] = Modal;
exports['ion-modal-portal'] = ModalPortal;
},


/***************** ion-modal.ios *****************/
[
/** ion-modal.ios: [0] tagName **/
'ion-modal',

/** ion-modal.ios: [1] methods **/
0 /* no methods */,

/** ion-modal.ios: [2] listeners **/
[
  [
    /***** ion-modal.ios listener[0]  ionModalDismiss -> onDismiss() *****/
    /* [0] methodName **/ 'onDismiss',
    /* [1] eventName ***/ 'ionModalDismiss',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ]
],

/** ion-modal.ios: [3] watchers **/
0 /* no watchers */,

/** ion-modal.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-modal.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-modal.ios: [6] styles **/
'/********** modal.ios.scss **********/\n' + 
'\n' + 
'ion-modal {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'@media not all and (min-width: 768px) and (min-height: 600px) {\n' + 
'  .modal-backdrop {\n' + 
'    visibility: hidden;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'.modal-wrapper {\n' + 
'  z-index: 10;\n' + 
'  height: 100%;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'@media only screen and (min-width: 768px) and (min-height: 600px) {\n' + 
'  .modal-wrapper {\n' + 
'    position: absolute;\n' + 
'    top: calc(50% - (500px/2));\n' + 
'    left: calc(50% - (600px/2));\n' + 
'    width: 600px;\n' + 
'    height: 500px;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media only screen and (min-width: 768px) and (min-height: 768px) {\n' + 
'  .modal-wrapper {\n' + 
'    position: absolute;\n' + 
'    top: calc(50% - (600px/2));\n' + 
'    left: calc(50% - (600px/2));\n' + 
'    width: 600px;\n' + 
'    height: 600px;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'.modal-content {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  opacity: 0;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.show-modal .modal-content {\n' + 
'  opacity: 1;\n' + 
'}\n' + 
'\n' + 
'.ios .modal-wrapper {\n' + 
'  transform: translate3d(0, 100%, 0);\n' + 
'}\n' + 
'\n' + 
'@media only screen and (min-width: 768px) and (min-height: 600px) {\n' + 
'  .ios .modal-wrapper {\n' + 
'    overflow: hidden;\n' + 
'    border-radius: 10px;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-modal-portal.ios *****************/
[
/** ion-modal-portal.ios: [0] tagName **/
'ion-modal-portal',

/** ion-modal-portal.ios: [1] methods **/
0 /* no methods */,

/** ion-modal-portal.ios: [2] listeners **/
[
  [
    /***** ion-modal-portal.ios listener[0]  body:ionModalDidLoad -> viewDidLoad() *****/
    /* [0] methodName **/ 'viewDidLoad',
    /* [1] eventName ***/ 'body:ionModalDidLoad',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ],
  [
    /***** ion-modal-portal.ios listener[1]  body:ionModalWillDismiss -> willDismiss() *****/
    /* [0] methodName **/ 'willDismiss',
    /* [1] eventName ***/ 'body:ionModalWillDismiss',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ],
  [
    /***** ion-modal-portal.ios listener[2]  body:ionModalWillPresent -> willPresent() *****/
    /* [0] methodName **/ 'willPresent',
    /* [1] eventName ***/ 'body:ionModalWillPresent',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ],
  [
    /***** ion-modal-portal.ios listener[3]  body:ionModalWillUnload -> willDismiss() *****/
    /* [0] methodName **/ 'willDismiss',
    /* [1] eventName ***/ 'body:ionModalWillUnload',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ],
  [
    /***** ion-modal-portal.ios listener[4]  body:keyup.escape -> escapeKeyUp() *****/
    /* [0] methodName **/ 'escapeKeyUp',
    /* [1] eventName ***/ 'body:keyup.escape',
    /* [2] capture *****/ 0 /* false */,
    /* [3] passive *****/ 0 /* false */,
    /* [4] enabled *****/ 1 /* true **/
  ]
],

/** ion-modal-portal.ios: [3] watchers **/
0 /* no watchers */,

/** ion-modal-portal.ios: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-modal-portal.ios: [5] modeName **/
1 /* ios mode **/,

/** ion-modal-portal.ios: [6] styles **/
'/********** modal-portal.scss **********/\n' + 
'\n' + 
'ion-modal-portal {\n' + 
'  display: none;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.modal-backdrop {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  z-index: 2;\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  background-color: #000;\n' + 
'  opacity: .01;\n' + 
'  transform: translateZ(0);\n' + 
'}\n' + 
'\n' + 
'.modal-backdrop.backdrop-no-tappable {\n' + 
'  cursor: auto;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)