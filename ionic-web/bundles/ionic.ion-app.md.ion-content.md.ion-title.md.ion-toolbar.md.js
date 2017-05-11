Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"ion-app.md.ion-content.md.ion-title.md.ion-toolbar.md",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var App = (function () {
    function App() {
    }
    App.prototype.ionViewDidLoad = function () {
        this.$el.classList.add(Ionic.config.get('mode'));
    };
    return App;
}());

var Content = (function () {
    function Content() {
        this.$scrollDetail = {};
        /** @internal */
        this._scrollPadding = 0;
        /** @internal */
        this._inputPolling = false;
        /** @internal */
        this._scrollDownOnLoad = false;
        /**
         * @input {boolean} If true, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
        this.statusbarPadding = Ionic.config.getBoolean('statusbarPadding', false);
    }
    Object.defineProperty(Content.prototype, "contentHeight", {
        /**
         * Content height of the viewable area. This does not include content
         * which is outside the overflow area, or content area which is under
         * headers and footers. Read-only.
         *
         * @return {number}
         */
        get: function () {
            return this.$scrollDetail.contentHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "contentWidth", {
        /**
         * Content width including content which is not visible on the screen
         * due to overflow. Read-only.
         *
         * @return {number}
         */
        get: function () {
            return this.$scrollDetail.contentWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "scrollHeight", {
        /**
         * Content height including content which is not visible on the screen
         * due to overflow. Read-only.
         *
         * @return {number}
         */
        get: function () {
            return this.$scrollDetail.scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "scrollWidth", {
        /**
         * Content width including content which is not visible due to
         * overflow. Read-only.
         *
         * @return {number}
         */
        get: function () {
            return this.$scrollDetail.scrollWidth;
        },
        enumerable: true,
        configurable: true
    });
    Content.prototype.ionViewDidLoad = function () {
        this.$scroll = this.$el.shadowRoot.querySelector('ion-scroll');
        this.$fixed = this.$el.querySelector('ion-fixed');
        this.resize();
    };
    Content.prototype.ionViewWillUnload = function () {
        this.$fixed = this.$scroll = this.$siblingFooter = this.$siblingHeader = this.$scrollDetail = null;
    };
    /**
     * Tell the content to recalculate its dimensions. This should be called
     * after dynamically adding/removing headers, footers, or tabs.
     */
    Content.prototype.resize = function () {
        Ionic.dom.read(this.readDimensions.bind(this));
        Ionic.dom.write(this.writeDimensions.bind(this));
    };
    Content.prototype.enableJsScroll = function () {
        this.$scroll.jsScroll = true;
    };
    // /**
    //  * Scroll to the specified position.
    //  *
    //  * @param {number} x  The x-value to scroll to.
    //  * @param {number} y  The y-value to scroll to.
    //  * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
    //  * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
    //  */
    // scrollTo(x: number, y: number, duration: number = 300, done?: Function): Promise<any> {
    //   console.debug(`content, scrollTo started, y: ${y}, duration: ${duration}`);
    //   return this._scroll.scrollTo(x, y, duration, done);
    // }
    /**
     * Scroll to the top of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    Content.prototype.scrollToTop = function (duration) {
        if (duration === void 0) { duration = 300; }
        return this.$scroll.scrollToTop(duration);
    };
    /**
     * Scroll to the bottom of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    Content.prototype.scrollToBottom = function (duration) {
        if (duration === void 0) { duration = 300; }
        return this.$scroll.scrollToBottom(duration);
    };
    // /**
    //  * @input {boolean} If true, the content will scroll down on load.
    //  */
    // @Input()
    // get scrollDownOnLoad(): boolean {
    //   return this._scrollDownOnLoad;
    // }
    // set scrollDownOnLoad(val: boolean) {
    //   this._scrollDownOnLoad = isTrueProperty(val);
    // }
    // /**
    //  * @hidden
    //  * DOM WRITE
    //  */
    // setScrollElementStyle(prop: string, val: any) {
    //   const scrollEle = this.getScrollElement();
    //   if (scrollEle) {
    //     this._dom.write(() => {
    //       (<any>scrollEle.style)[prop] = val;
    //     });
    //   }
    // }
    // /**
    //  * Returns the content and scroll elements' dimensions.
    //  * @returns {object} dimensions  The content and scroll elements' dimensions
    //  * {number} dimensions.contentHeight  content offsetHeight
    //  * {number} dimensions.contentTop  content offsetTop
    //  * {number} dimensions.contentBottom  content offsetTop+offsetHeight
    //  * {number} dimensions.contentWidth  content offsetWidth
    //  * {number} dimensions.contentLeft  content offsetLeft
    //  * {number} dimensions.contentRight  content offsetLeft + offsetWidth
    //  * {number} dimensions.scrollHeight  scroll scrollHeight
    //  * {number} dimensions.scrollTop  scroll scrollTop
    //  * {number} dimensions.scrollBottom  scroll scrollTop + scrollHeight
    //  * {number} dimensions.scrollWidth  scroll scrollWidth
    //  * {number} dimensions.scrollLeft  scroll scrollLeft
    //  * {number} dimensions.scrollRight  scroll scrollLeft + scrollWidth
    //  */
    // getContentDimensions(): ContentDimensions {
    //   const scrollEle = this.getScrollElement();
    //   const parentElement = scrollEle.parentElement;
    //   return {
    //     contentHeight: parentElement.offsetHeight - this._cTop - this._cBottom,
    //     contentTop: this._cTop,
    //     contentBottom: this._cBottom,
    //     contentWidth: parentElement.offsetWidth,
    //     contentLeft: parentElement.offsetLeft,
    //     scrollHeight: scrollEle.scrollHeight,
    //     scrollTop: scrollEle.scrollTop,
    //     scrollWidth: scrollEle.scrollWidth,
    //     scrollLeft: scrollEle.scrollLeft,
    //   };
    // }
    // /**
    //  * @hidden
    //  * DOM WRITE
    //  * Adds padding to the bottom of the scroll element when the keyboard is open
    //  * so content below the keyboard can be scrolled into view.
    //  */
    // addScrollPadding(newPadding: number) {
    //   if (newPadding > this._scrollPadding) {
    //     console.debug(`content, addScrollPadding, newPadding: ${newPadding}, this._scrollPadding: ${this._scrollPadding}`);
    //     this._scrollPadding = newPadding;
    //     var scrollEle = this.getScrollElement();
    //     if (scrollEle) {
    //       this._dom.write(() => {
    //         scrollEle.style.paddingBottom = (newPadding > 0) ? newPadding + 'px' : '';
    //       });
    //     }
    //   }
    // }
    // /**
    //  * @hidden
    //  * DOM WRITE
    //  */
    // clearScrollPaddingFocusOut() {
    //   if (!this._inputPolling) {
    //     console.debug(`content, clearScrollPaddingFocusOut begin`);
    //     this._inputPolling = true;
    //     this._keyboard.onClose(() => {
    //       console.debug(`content, clearScrollPaddingFocusOut _keyboard.onClose`);
    //       this._inputPolling = false;
    //       this._scrollPadding = -1;
    //       this.addScrollPadding(0);
    //     }, 200, 3000);
    //   }
    // }
    /**
     * @hidden
     * DOM READ
     */
    Content.prototype.readDimensions = function () {
        var cachePaddingTop = this._pTop;
        var cachePaddingRight = this._pRight;
        var cachePaddingBottom = this._pBottom;
        var cachePaddingLeft = this._pLeft;
        var cacheHeaderHeight = this._hdrHeight;
        var cacheFooterHeight = this._ftrHeight;
        var cacheTabsPlacement = this._tabsPlacement;
        var tabsTop = 0;
        this._pTop = 0;
        this._pRight = 0;
        this._pBottom = 0;
        this._pLeft = 0;
        this._hdrHeight = 0;
        this._ftrHeight = 0;
        this._tabsPlacement = null;
        this._tTop = 0;
        this._fTop = 0;
        this._fBottom = 0;
        var scrollDetail = this.$scrollDetail;
        var ele = this.$el;
        var computedStyle;
        var tagName;
        var parentEle = ele.parentElement;
        var children = parentEle.children;
        for (var i = children.length - 1; i >= 0; i--) {
            ele = children[i];
            tagName = ele.tagName;
            if (tagName === 'ION-CONTENT') {
                scrollDetail.contentElement = ele;
                if (this.fullscreen) {
                    // ******** DOM READ ****************
                    computedStyle = getComputedStyle(ele);
                    this._pTop = parsePxUnit(computedStyle.paddingTop);
                    this._pBottom = parsePxUnit(computedStyle.paddingBottom);
                    this._pRight = parsePxUnit(computedStyle.paddingRight);
                    this._pLeft = parsePxUnit(computedStyle.paddingLeft);
                }
            }
            else if (tagName === 'ION-HEADER') {
                scrollDetail.headerElement = ele;
                // ******** DOM READ ****************
                this._hdrHeight = ele.clientHeight;
            }
            else if (tagName === 'ION-FOOTER') {
                scrollDetail.footerElement = ele;
                // ******** DOM READ ****************
                this._ftrHeight = ele.clientHeight;
                this.$siblingFooter = ele;
            }
        }
        ele = parentEle;
        var tabbarEle;
        while (ele && ele.tagName !== 'ION-MODAL' && !ele.classList.contains('tab-subpage')) {
            if (ele.tagName === 'ION-TABS') {
                tabbarEle = ele.firstElementChild;
                // ******** DOM READ ****************
                this._tabbarHeight = tabbarEle.clientHeight;
                if (this._tabsPlacement === null) {
                    // this is the first tabbar found, remember it's position
                    this._tabsPlacement = ele.getAttribute('tabsplacement');
                }
            }
            ele = ele.parentElement;
        }
        // Tabs top
        if (this._tabs && this._tabsPlacement === 'top') {
            this._tTop = this._hdrHeight;
            tabsTop = this._tabs._top;
        }
        // Toolbar height
        this._cTop = this._hdrHeight;
        this._cBottom = this._ftrHeight;
        // Tabs height
        if (this._tabsPlacement === 'top') {
            this._cTop += this._tabbarHeight;
        }
        else if (this._tabsPlacement === 'bottom') {
            this._cBottom += this._tabbarHeight;
        }
        // Fixed content shouldn't include content padding
        this._fTop = this._cTop;
        this._fBottom = this._cBottom;
        // Handle fullscreen viewport (padding vs margin)
        if (this.fullscreen) {
            this._cTop += this._pTop;
            this._cBottom += this._pBottom;
        }
        // ******** DOM READ ****************
        var contentDimensions = this.getContentDimensions();
        scrollDetail.scrollHeight = contentDimensions.scrollHeight;
        scrollDetail.scrollWidth = contentDimensions.scrollWidth;
        scrollDetail.contentHeight = contentDimensions.contentHeight;
        scrollDetail.contentWidth = contentDimensions.contentWidth;
        scrollDetail.contentTop = contentDimensions.contentTop;
        scrollDetail.contentBottom = contentDimensions.contentBottom;
        this._dirty = (cachePaddingTop !== this._pTop ||
            cachePaddingBottom !== this._pBottom ||
            cachePaddingLeft !== this._pLeft ||
            cachePaddingRight !== this._pRight ||
            cacheHeaderHeight !== this._hdrHeight ||
            cacheFooterHeight !== this._ftrHeight ||
            cacheTabsPlacement !== this._tabsPlacement ||
            tabsTop !== this._tTop ||
            this._cTop !== this.contentTop ||
            this._cBottom !== this.contentBottom);
    };
    /**
     * @hidden
     * DOM WRITE
     */
    Content.prototype.writeDimensions = function () {
        if (!this._dirty) {
            return;
        }
        // Tabs height
        if (this._tabsPlacement === 'bottom' && this._cBottom > 0 && this.$siblingFooter) {
            var footerPos = this._cBottom - this._ftrHeight;
            // ******** DOM WRITE ****************
            this.$siblingFooter.style.bottom = cssFormat(footerPos);
        }
        // Handle fullscreen viewport (padding vs margin)
        var topProperty = 'marginTop';
        var bottomProperty = 'marginBottom';
        // let fixedTop: number = this._fTop;
        // let fixedBottom: number = this._fBottom;
        if (this.fullscreen) {
            // adjust the content with padding, allowing content to scroll under headers/footers
            // however, on iOS you cannot control the margins of the scrollbar (last tested iOS9.2)
            // only add inline padding styles if the computed padding value, which would
            // have come from the app's css, is different than the new padding value
            topProperty = 'paddingTop';
            bottomProperty = 'paddingBottom';
        }
        // Only update top margin if value changed
        if (this._cTop !== this.contentTop) {
            // ******** DOM WRITE ****************
            this.$scroll.style[topProperty] = cssFormat(this._cTop);
            // ******** DOM WRITE ****************
            // this.$fixed.style.marginTop = cssFormat(fixedTop);
            this.contentTop = this._cTop;
        }
        // Only update bottom margin if value changed
        if (this._cBottom !== this.contentBottom) {
            // ******** DOM WRITE ****************
            this.$scroll.style[bottomProperty] = cssFormat(this._cBottom);
            // ******** DOM WRITE ****************
            // fixedEle.style.marginBottom = cssFormat(fixedBottom);
            this.contentBottom = this._cBottom;
        }
        if (this._tabsPlacement !== null && this._tabs) {
            // set the position of the tabbar
            if (this._tabsPlacement === 'top') {
                // ******** DOM WRITE ****************
                this._tabs.setTabbarPosition(this._tTop, -1);
            }
            else {
                // ******** DOM WRITE ****************
                this._tabs.setTabbarPosition(-1, 0);
            }
        }
        // Scroll the page all the way down after setting dimensions
        if (this._scrollDownOnLoad) {
            this.scrollToBottom(0);
            this._scrollDownOnLoad = false;
        }
    };
    /**
     * Returns the content and scroll elements' dimensions.
     * @returns {object} dimensions  The content and scroll elements' dimensions
     * {number} dimensions.contentHeight  content offsetHeight
     * {number} dimensions.contentTop  content offsetTop
     * {number} dimensions.contentBottom  content offsetTop+offsetHeight
     * {number} dimensions.contentWidth  content offsetWidth
     * {number} dimensions.contentLeft  content offsetLeft
     * {number} dimensions.contentRight  content offsetLeft + offsetWidth
     * {number} dimensions.scrollHeight  scroll scrollHeight
     * {number} dimensions.scrollTop  scroll scrollTop
     * {number} dimensions.scrollBottom  scroll scrollTop + scrollHeight
     * {number} dimensions.scrollWidth  scroll scrollWidth
     * {number} dimensions.scrollLeft  scroll scrollLeft
     * {number} dimensions.scrollRight  scroll scrollLeft + scrollWidth
     */
    Content.prototype.getContentDimensions = function () {
        var scrollElm = this.$scroll;
        var contentElm = this.$el;
        return {
            contentHeight: contentElm.offsetHeight - this._cTop - this._cBottom,
            contentTop: this._cTop,
            contentBottom: this._cBottom,
            contentWidth: contentElm.offsetWidth,
            contentLeft: contentElm.offsetLeft,
            scrollHeight: scrollElm.scrollHeight,
            scrollTop: scrollElm.scrollTop,
            scrollWidth: scrollElm.scrollWidth,
            scrollLeft: scrollElm.scrollLeft,
        };
    };
    Content.prototype.render = function () {
        var props = {};
        if (this.ionScrollStart) {
            props['ionScrollStart'] = this.ionScrollStart.bind(this);
        }
        if (this.ionScroll) {
            props['ionScroll'] = this.ionScroll.bind(this);
        }
        if (this.ionScrollEnd) {
            props['ionScrollEnd'] = this.ionScrollEnd.bind(this);
        }
        return h(this, h('ion-scroll', Ionic.theme(this, 'content', {
            class: {
                'statusbar-padding': this.statusbarPadding,
            },
            props: props
        }), h('slot')));
    };
    return Content;
}());
function parsePxUnit(val) {
    return (val.indexOf('px') > 0) ? parseInt(val, 10) : 0;
}
function cssFormat(val) {
    return (val > 0 ? val + 'px' : '');
}

var ToolbarTitle = (function () {
    function ToolbarTitle() {
    }
    ToolbarTitle.prototype.render = function () {
        return h(this, [
            h('div', Ionic.theme(this, 'toolbar-title'), h('slot'))
        ]);
    };
    return ToolbarTitle;
}());

var Toolbar = (function () {
    function Toolbar() {
        this.sbPadding = Ionic.config.getBoolean('statusbarPadding');
    }
    Toolbar.prototype.ionViewDidLoad = function () {
        /**
         * This is a platform specific hack that we would like to remove.  Currently this adds the
         * attribute button-type bar-button to all ion-buttons that exist within a toolbar.
         */
        // const slot = <HTMLSlotElement>this.$el.shadowRoot.querySelector('slot');
        // const ionButtons = slot.assignedNodes()
        //   .filter((elmt: HTMLElement) => elmt.nodeType !== Node.TEXT_NODE)
        //   .reduce((nodeList: HTMLElement[], elmt: HTMLElement) => {
        //     return nodeList.concat(Array.prototype.slice.call(elmt.querySelectorAll('ion-button')));
        //   }, []);
        // ionButtons.forEach(btn => {
        //   btn.setAttribute('button-type', 'bar-button');
        // });
    };
    Toolbar.prototype.render = function () {
        return h(this, Ionic.theme(this, 'toolbar', { class: { 'statusbar-padding': this.sbPadding } }), [
            h('div', Ionic.theme(this, 'toolbar-background')),
            h('div', Ionic.theme(this, 'toolbar-content'), h('slot')),
        ]);
    };
    return Toolbar;
}());

exports['ion-app'] = App;
exports['ion-content'] = Content;
exports['ion-title'] = ToolbarTitle;
exports['ion-toolbar'] = Toolbar;
},


/***************** ion-app.md *****************/
[
/** ion-app.md: [0] tagName **/
'ion-app',

/** ion-app.md: [1] methods **/
0 /* no methods */,

/** ion-app.md: [2] listeners **/
0 /* no listeners */,

/** ion-app.md: [3] watchers **/
0 /* no watchers */,

/** ion-app.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-app.md: [5] modeName **/
2 /* md mode **/,

/** ion-app.md: [6] styles **/
'/********** app.md.scss **********/\n' + 
'\n' + 
'audio,\n' + 
'canvas,\n' + 
'progress,\n' + 
'video {\n' + 
'  vertical-align: baseline;\n' + 
'}\n' + 
'\n' + 
'audio:not([controls]) {\n' + 
'  display: none;\n' + 
'  height: 0;\n' + 
'}\n' + 
'\n' + 
'b,\n' + 
'strong {\n' + 
'  font-weight: bold;\n' + 
'}\n' + 
'\n' + 
'img {\n' + 
'  max-width: 100%;\n' + 
'  border: 0;\n' + 
'}\n' + 
'\n' + 
'svg:not(:root) {\n' + 
'  overflow: hidden;\n' + 
'}\n' + 
'\n' + 
'figure {\n' + 
'  margin: 1em 40px;\n' + 
'}\n' + 
'\n' + 
'hr {\n' + 
'  height: 1px;\n' + 
'  border-width: 0;\n' + 
'  box-sizing: content-box;\n' + 
'}\n' + 
'\n' + 
'pre {\n' + 
'  overflow: auto;\n' + 
'}\n' + 
'\n' + 
'code,\n' + 
'kbd,\n' + 
'pre,\n' + 
'samp {\n' + 
'  font-family: monospace, monospace;\n' + 
'  font-size: 1em;\n' + 
'}\n' + 
'\n' + 
'label,\n' + 
'input,\n' + 
'select,\n' + 
'textarea {\n' + 
'  font-family: inherit;\n' + 
'  line-height: normal;\n' + 
'}\n' + 
'\n' + 
'textarea {\n' + 
'  overflow: auto;\n' + 
'  height: auto;\n' + 
'  font: inherit;\n' + 
'  color: inherit;\n' + 
'}\n' + 
'\n' + 
'textarea::placeholder {\n' + 
'  padding-left: 2px;\n' + 
'}\n' + 
'\n' + 
'form,\n' + 
'input,\n' + 
'optgroup,\n' + 
'select {\n' + 
'  margin: 0;\n' + 
'  font: inherit;\n' + 
'  color: inherit;\n' + 
'}\n' + 
'\n' + 
'html input[type="button"],\n' + 
'input[type="reset"],\n' + 
'input[type="submit"] {\n' + 
'  cursor: pointer;\n' + 
'  -webkit-appearance: button;\n' + 
'}\n' + 
'\n' + 
'a,\n' + 
'a div,\n' + 
'a span,\n' + 
'a ion-icon,\n' + 
'a ion-label,\n' + 
'button,\n' + 
'button div,\n' + 
'button span,\n' + 
'button ion-icon,\n' + 
'button ion-label,\n' + 
'[tappable],\n' + 
'[tappable] div,\n' + 
'[tappable] span,\n' + 
'[tappable] ion-icon,\n' + 
'[tappable] ion-label,\n' + 
'input,\n' + 
'textarea {\n' + 
'  touch-action: manipulation;\n' + 
'}\n' + 
'\n' + 
'a ion-label,\n' + 
'button ion-label {\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'button {\n' + 
'  border: 0;\n' + 
'  font-family: inherit;\n' + 
'  font-style: inherit;\n' + 
'  font-variant: inherit;\n' + 
'  line-height: 1;\n' + 
'  text-transform: none;\n' + 
'  cursor: pointer;\n' + 
'  -webkit-appearance: button;\n' + 
'}\n' + 
'\n' + 
'[tappable] {\n' + 
'  cursor: pointer;\n' + 
'}\n' + 
'\n' + 
'a[disabled],\n' + 
'button[disabled],\n' + 
'html input[disabled] {\n' + 
'  cursor: default;\n' + 
'}\n' + 
'\n' + 
'button::-moz-focus-inner,\n' + 
'input::-moz-focus-inner {\n' + 
'  padding: 0;\n' + 
'  border: 0;\n' + 
'}\n' + 
'\n' + 
'input[type="checkbox"],\n' + 
'input[type="radio"] {\n' + 
'  padding: 0;\n' + 
'  box-sizing: border-box;\n' + 
'}\n' + 
'\n' + 
'input[type="number"]::-webkit-inner-spin-button,\n' + 
'input[type="number"]::-webkit-outer-spin-button {\n' + 
'  height: auto;\n' + 
'}\n' + 
'\n' + 
'input[type="search"]::-webkit-search-cancel-button,\n' + 
'input[type="search"]::-webkit-search-decoration {\n' + 
'  -webkit-appearance: none;\n' + 
'}\n' + 
'\n' + 
'table {\n' + 
'  border-collapse: collapse;\n' + 
'  border-spacing: 0;\n' + 
'}\n' + 
'\n' + 
'td,\n' + 
'th {\n' + 
'  padding: 0;\n' + 
'}\n' + 
'\n' + 
'.hide,\n' + 
'[hidden],\n' + 
'template {\n' + 
'  display: none !important;\n' + 
'}\n' + 
'\n' + 
'.sticky {\n' + 
'  position: sticky;\n' + 
'  top: 0;\n' + 
'}\n' + 
'\n' + 
':focus,\n' + 
':active {\n' + 
'  outline: none;\n' + 
'}\n' + 
'\n' + 
'.focus-outline :focus {\n' + 
'  outline: thin dotted;\n' + 
'  outline-offset: -1px;\n' + 
'}\n' + 
'\n' + 
'.focus-outline button:focus,\n' + 
'.focus-outline [ion-button]:focus {\n' + 
'  border-color: #51a7e8;\n' + 
'  outline: 2px solid #51a7e8;\n' + 
'  box-shadow: 0 0 8px 1px #51a7e8;\n' + 
'}\n' + 
'\n' + 
'ion-input :focus {\n' + 
'  outline: none;\n' + 
'}\n' + 
'\n' + 
'.click-block {\n' + 
'  display: none;\n' + 
'}\n' + 
'\n' + 
'.click-block-enabled {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  right: 0;\n' + 
'  bottom: 0;\n' + 
'  left: 0;\n' + 
'  z-index: 99999;\n' + 
'  display: block;\n' + 
'  opacity: 0;\n' + 
'  transform: translate3d(0, -100%, 0) translateY(1px);\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'.click-block-active {\n' + 
'  transform: translate3d(0, 0, 0);\n' + 
'}\n' + 
'\n' + 
'* {\n' + 
'  box-sizing: border-box;\n' + 
'  -webkit-tap-highlight-color: transparent;\n' + 
'  -webkit-tap-highlight-color: transparent;\n' + 
'  -webkit-touch-callout: none;\n' + 
'}\n' + 
'\n' + 
'html {\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  font-size: 62.5%;\n' + 
'  text-size-adjust: 100%;\n' + 
'}\n' + 
'\n' + 
'body {\n' + 
'  position: fixed;\n' + 
'  overflow: hidden;\n' + 
'  margin: 0;\n' + 
'  padding: 0;\n' + 
'  width: 100%;\n' + 
'  max-width: 100%;\n' + 
'  height: 100%;\n' + 
'  max-height: 100%;\n' + 
'  -webkit-font-smoothing: antialiased;\n' + 
'  font-smoothing: antialiased;\n' + 
'  text-rendering: optimizeLegibility;\n' + 
'  -webkit-user-drag: none;\n' + 
'  -ms-content-zooming: none;\n' + 
'  touch-action: manipulation;\n' + 
'  word-wrap: break-word;\n' + 
'  text-size-adjust: none;\n' + 
'  user-select: none;\n' + 
'}\n' + 
'\n' + 
'a {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.enable-hover a:hover {\n' + 
'  opacity: .7;\n' + 
'}\n' + 
'\n' + 
'h1,\n' + 
'h2,\n' + 
'h3,\n' + 
'h4,\n' + 
'h5,\n' + 
'h6 {\n' + 
'  margin-top: 1.6rem;\n' + 
'  margin-bottom: 1rem;\n' + 
'  font-weight: 500;\n' + 
'  line-height: 1.2;\n' + 
'}\n' + 
'\n' + 
'[padding] h1:first-child,\n' + 
'[padding] h2:first-child,\n' + 
'[padding] h3:first-child,\n' + 
'[padding] h4:first-child,\n' + 
'[padding] h5:first-child,\n' + 
'[padding] h6:first-child {\n' + 
'  margin-top: -.3rem;\n' + 
'}\n' + 
'\n' + 
'h1 + h2,\n' + 
'h1 + h3,\n' + 
'h2 + h3 {\n' + 
'  margin-top: -.3rem;\n' + 
'}\n' + 
'\n' + 
'h1 {\n' + 
'  margin-top: 2rem;\n' + 
'  font-size: 2.6rem;\n' + 
'}\n' + 
'\n' + 
'h2 {\n' + 
'  margin-top: 1.8rem;\n' + 
'  font-size: 2.4rem;\n' + 
'}\n' + 
'\n' + 
'h3 {\n' + 
'  font-size: 2.2rem;\n' + 
'}\n' + 
'\n' + 
'h4 {\n' + 
'  font-size: 2rem;\n' + 
'}\n' + 
'\n' + 
'h5 {\n' + 
'  font-size: 1.8rem;\n' + 
'}\n' + 
'\n' + 
'h6 {\n' + 
'  font-size: 1.6rem;\n' + 
'}\n' + 
'\n' + 
'small {\n' + 
'  font-size: 75%;\n' + 
'}\n' + 
'\n' + 
'sub,\n' + 
'sup {\n' + 
'  position: relative;\n' + 
'  font-size: 75%;\n' + 
'  line-height: 0;\n' + 
'  vertical-align: baseline;\n' + 
'}\n' + 
'\n' + 
'sup {\n' + 
'  top: -.5em;\n' + 
'}\n' + 
'\n' + 
'sub {\n' + 
'  bottom: -.25em;\n' + 
'}\n' + 
'\n' + 
'ion-app {\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'ion-app,\n' + 
'ion-nav,\n' + 
'ion-tab,\n' + 
'ion-tabs {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  z-index: 0;\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'}\n' + 
'\n' + 
'ion-nav,\n' + 
'ion-tab,\n' + 
'ion-tabs {\n' + 
'  overflow: hidden;\n' + 
'}\n' + 
'\n' + 
'ion-tab {\n' + 
'  display: none;\n' + 
'}\n' + 
'\n' + 
'ion-tab.show-tab {\n' + 
'  display: block;\n' + 
'}\n' + 
'\n' + 
'ion-app,\n' + 
'ion-nav,\n' + 
'ion-tab,\n' + 
'ion-tabs,\n' + 
'ion-page {\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'ion-page {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'}\n' + 
'\n' + 
'ion-header {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  z-index: 10;\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'}\n' + 
'\n' + 
'ion-footer {\n' + 
'  position: absolute;\n' + 
'  bottom: 0;\n' + 
'  left: 0;\n' + 
'  z-index: 10;\n' + 
'  display: block;\n' + 
'  width: 100%;\n' + 
'}\n' + 
'\n' + 
'[app-viewport],\n' + 
'[overlay-portal],\n' + 
'[nav-viewport],\n' + 
'[tab-portal],\n' + 
'.nav-decor {\n' + 
'  display: none;\n' + 
'}\n' + 
'\n' + 
'[text-center] {\n' + 
'  text-align: center !important;\n' + 
'}\n' + 
'\n' + 
'[text-justify] {\n' + 
'  text-align: justify !important;\n' + 
'}\n' + 
'\n' + 
'[text-start] {\n' + 
'  text-align: start !important;\n' + 
'}\n' + 
'\n' + 
'[text-end] {\n' + 
'  text-align: end !important;\n' + 
'}\n' + 
'\n' + 
'[text-left] {\n' + 
'  text-align: left !important;\n' + 
'}\n' + 
'\n' + 
'[text-right] {\n' + 
'  text-align: right !important;\n' + 
'}\n' + 
'\n' + 
'[text-nowrap] {\n' + 
'  white-space: nowrap !important;\n' + 
'}\n' + 
'\n' + 
'[text-wrap] {\n' + 
'  white-space: normal !important;\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 576px) {\n' + 
'  [text-sm-center] {\n' + 
'    text-align: center !important;\n' + 
'  }\n' + 
'  [text-sm-justify] {\n' + 
'    text-align: justify !important;\n' + 
'  }\n' + 
'  [text-sm-start] {\n' + 
'    text-align: start !important;\n' + 
'  }\n' + 
'  [text-sm-end] {\n' + 
'    text-align: end !important;\n' + 
'  }\n' + 
'  [text-sm-left] {\n' + 
'    text-align: left !important;\n' + 
'  }\n' + 
'  [text-sm-right] {\n' + 
'    text-align: right !important;\n' + 
'  }\n' + 
'  [text-sm-nowrap] {\n' + 
'    white-space: nowrap !important;\n' + 
'  }\n' + 
'  [text-sm-wrap] {\n' + 
'    white-space: normal !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 768px) {\n' + 
'  [text-md-center] {\n' + 
'    text-align: center !important;\n' + 
'  }\n' + 
'  [text-md-justify] {\n' + 
'    text-align: justify !important;\n' + 
'  }\n' + 
'  [text-md-start] {\n' + 
'    text-align: start !important;\n' + 
'  }\n' + 
'  [text-md-end] {\n' + 
'    text-align: end !important;\n' + 
'  }\n' + 
'  [text-md-left] {\n' + 
'    text-align: left !important;\n' + 
'  }\n' + 
'  [text-md-right] {\n' + 
'    text-align: right !important;\n' + 
'  }\n' + 
'  [text-md-nowrap] {\n' + 
'    white-space: nowrap !important;\n' + 
'  }\n' + 
'  [text-md-wrap] {\n' + 
'    white-space: normal !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 992px) {\n' + 
'  [text-lg-center] {\n' + 
'    text-align: center !important;\n' + 
'  }\n' + 
'  [text-lg-justify] {\n' + 
'    text-align: justify !important;\n' + 
'  }\n' + 
'  [text-lg-start] {\n' + 
'    text-align: start !important;\n' + 
'  }\n' + 
'  [text-lg-end] {\n' + 
'    text-align: end !important;\n' + 
'  }\n' + 
'  [text-lg-left] {\n' + 
'    text-align: left !important;\n' + 
'  }\n' + 
'  [text-lg-right] {\n' + 
'    text-align: right !important;\n' + 
'  }\n' + 
'  [text-lg-nowrap] {\n' + 
'    white-space: nowrap !important;\n' + 
'  }\n' + 
'  [text-lg-wrap] {\n' + 
'    white-space: normal !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 1200px) {\n' + 
'  [text-xl-center] {\n' + 
'    text-align: center !important;\n' + 
'  }\n' + 
'  [text-xl-justify] {\n' + 
'    text-align: justify !important;\n' + 
'  }\n' + 
'  [text-xl-start] {\n' + 
'    text-align: start !important;\n' + 
'  }\n' + 
'  [text-xl-end] {\n' + 
'    text-align: end !important;\n' + 
'  }\n' + 
'  [text-xl-left] {\n' + 
'    text-align: left !important;\n' + 
'  }\n' + 
'  [text-xl-right] {\n' + 
'    text-align: right !important;\n' + 
'  }\n' + 
'  [text-xl-nowrap] {\n' + 
'    white-space: nowrap !important;\n' + 
'  }\n' + 
'  [text-xl-wrap] {\n' + 
'    white-space: normal !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'[text-uppercase] {\n' + 
'  text-transform: uppercase !important;\n' + 
'}\n' + 
'\n' + 
'[text-lowercase] {\n' + 
'  text-transform: lowercase !important;\n' + 
'}\n' + 
'\n' + 
'[text-capitalize] {\n' + 
'  text-transform: capitalize !important;\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 576px) {\n' + 
'  [text-sm-uppercase] {\n' + 
'    text-transform: uppercase !important;\n' + 
'  }\n' + 
'  [text-sm-lowercase] {\n' + 
'    text-transform: lowercase !important;\n' + 
'  }\n' + 
'  [text-sm-capitalize] {\n' + 
'    text-transform: capitalize !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 768px) {\n' + 
'  [text-md-uppercase] {\n' + 
'    text-transform: uppercase !important;\n' + 
'  }\n' + 
'  [text-md-lowercase] {\n' + 
'    text-transform: lowercase !important;\n' + 
'  }\n' + 
'  [text-md-capitalize] {\n' + 
'    text-transform: capitalize !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 992px) {\n' + 
'  [text-lg-uppercase] {\n' + 
'    text-transform: uppercase !important;\n' + 
'  }\n' + 
'  [text-lg-lowercase] {\n' + 
'    text-transform: lowercase !important;\n' + 
'  }\n' + 
'  [text-lg-capitalize] {\n' + 
'    text-transform: capitalize !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 1200px) {\n' + 
'  [text-xl-uppercase] {\n' + 
'    text-transform: uppercase !important;\n' + 
'  }\n' + 
'  [text-xl-lowercase] {\n' + 
'    text-transform: lowercase !important;\n' + 
'  }\n' + 
'  [text-xl-capitalize] {\n' + 
'    text-transform: capitalize !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'[float-left] {\n' + 
'  float: left !important;\n' + 
'}\n' + 
'\n' + 
'[float-right] {\n' + 
'  float: right !important;\n' + 
'}\n' + 
'\n' + 
'[float-start] {\n' + 
'  float: left !important;\n' + 
'}\n' + 
'\n' + 
'[float-end] {\n' + 
'  float: right !important;\n' + 
'}\n' + 
'\n' + 
'[dir="rtl"] [float-start] {\n' + 
'  float: right !important;\n' + 
'}\n' + 
'\n' + 
'[dir="rtl"] [float-end] {\n' + 
'  float: left !important;\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 576px) {\n' + 
'  [float-sm-left] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'  [float-sm-right] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [float-sm-start] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'  [float-sm-end] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [dir="rtl"] [float-sm-start] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [dir="rtl"] [float-sm-end] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 768px) {\n' + 
'  [float-md-left] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'  [float-md-right] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [float-md-start] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'  [float-md-end] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [dir="rtl"] [float-md-start] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [dir="rtl"] [float-md-end] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 992px) {\n' + 
'  [float-lg-left] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'  [float-lg-right] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [float-lg-start] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'  [float-lg-end] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [dir="rtl"] [float-lg-start] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [dir="rtl"] [float-lg-end] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'@media (min-width: 1200px) {\n' + 
'  [float-xl-left] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'  [float-xl-right] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [float-xl-start] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'  [float-xl-end] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [dir="rtl"] [float-xl-start] {\n' + 
'    float: right !important;\n' + 
'  }\n' + 
'  [dir="rtl"] [float-xl-end] {\n' + 
'    float: left !important;\n' + 
'  }\n' + 
'}\n' + 
'\n' + 
'ion-app.md {\n' + 
'  font-family: "Roboto", "Helvetica Neue", sans-serif;\n' + 
'  font-size: 1.4rem;\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-content.md *****************/
[
/** ion-content.md: [0] tagName **/
'ion-content',

/** ion-content.md: [1] methods **/
0 /* no methods */,

/** ion-content.md: [2] listeners **/
0 /* no listeners */,

/** ion-content.md: [3] watchers **/
0 /* no watchers */,

/** ion-content.md: [4] shadow **/
1 /* use shadow dom */,

/** ion-content.md: [5] modeName **/
2 /* md mode **/,

/** ion-content.md: [6] styles **/
'/********** content.md.scss **********/\n' + 
'\n' + 
'ion-content,\n' + 
':host {\n' + 
'  position: relative;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  contain: layout size style;\n' + 
'}\n' + 
'\n' + 
'.ion-page > ion-content {\n' + 
'  position: absolute;\n' + 
'}\n' + 
'\n' + 
'a {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'ion-scroll {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  right: 0;\n' + 
'  bottom: 0;\n' + 
'  left: 0;\n' + 
'  z-index: 1;\n' + 
'  display: block;\n' + 
'  visibility: inherit !important;\n' + 
'  overflow-x: hidden;\n' + 
'  overflow-y: scroll;\n' + 
'  -webkit-overflow-scrolling: touch;\n' + 
'  will-change: scroll-position;\n' + 
'  contain: size style layout;\n' + 
'}\n' + 
'\n' + 
'ion-content.js-scroll ion-scroll {\n' + 
'  position: relative;\n' + 
'  min-height: 100%;\n' + 
'  overflow-x: initial;\n' + 
'  overflow-y: initial;\n' + 
'  -webkit-overflow-scrolling: auto;\n' + 
'  will-change: initial;\n' + 
'}\n' + 
'\n' + 
'.disable-scroll .ion-page {\n' + 
'  pointer-events: none;\n' + 
'  touch-action: none;\n' + 
'}\n' + 
'\n' + 
'.fixed-content {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  right: 0;\n' + 
'  bottom: 0;\n' + 
'  left: 0;\n' + 
'  display: block;\n' + 
'}\n' + 
'\n' + 
'[ion-fixed] {\n' + 
'  position: absolute;\n' + 
'  z-index: 999;\n' + 
'  transform: translateZ(0);\n' + 
'}\n' + 
'\n' + 
'ion-app [no-padding],\n' + 
'ion-app [no-padding] ion-scroll {\n' + 
'  padding: 0;\n' + 
'}\n' + 
'\n' + 
'ion-app [no-margin],\n' + 
'ion-app [no-margin] ion-scroll {\n' + 
'  margin: 0;\n' + 
'}\n' + 
'\n' + 
'.content-md {\n' + 
'  color: #000;\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.content-md hr {\n' + 
'  background-color: rgba(0, 0, 0, 0.08);\n' + 
'}\n' + 
'\n' + 
'ion-app.md [padding],\n' + 
'ion-app.md [padding] ion-scroll {\n' + 
'  padding: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [padding-top],\n' + 
'ion-app.md [padding-top] ion-scroll {\n' + 
'  padding-top: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [padding-left],\n' + 
'ion-app.md [padding-left] ion-scroll {\n' + 
'  padding-left: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [padding-right],\n' + 
'ion-app.md [padding-right] ion-scroll {\n' + 
'  padding-right: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [padding-bottom],\n' + 
'ion-app.md [padding-bottom] ion-scroll {\n' + 
'  padding-bottom: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [padding-vertical],\n' + 
'ion-app.md [padding-vertical] ion-scroll {\n' + 
'  padding-top: 16px;\n' + 
'  padding-bottom: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [padding-horizontal],\n' + 
'ion-app.md [padding-horizontal] ion-scroll {\n' + 
'  padding-right: 16px;\n' + 
'  padding-left: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [margin],\n' + 
'ion-app.md [margin] ion-scroll {\n' + 
'  margin: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [margin-top],\n' + 
'ion-app.md [margin-top] ion-scroll {\n' + 
'  margin-top: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [margin-left],\n' + 
'ion-app.md [margin-left] ion-scroll {\n' + 
'  margin-left: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [margin-right],\n' + 
'ion-app.md [margin-right] ion-scroll {\n' + 
'  margin-right: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [margin-bottom],\n' + 
'ion-app.md [margin-bottom] ion-scroll {\n' + 
'  margin-bottom: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [margin-vertical],\n' + 
'ion-app.md [margin-vertical] ion-scroll {\n' + 
'  margin-top: 16px;\n' + 
'  margin-bottom: 16px;\n' + 
'}\n' + 
'\n' + 
'ion-app.md [margin-horizontal],\n' + 
'ion-app.md [margin-horizontal] ion-scroll {\n' + 
'  margin-right: 16px;\n' + 
'  margin-left: 16px;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-title.md *****************/
[
/** ion-title.md: [0] tagName **/
'ion-title',

/** ion-title.md: [1] methods **/
0 /* no methods */,

/** ion-title.md: [2] listeners **/
0 /* no listeners */,

/** ion-title.md: [3] watchers **/
0 /* no watchers */,

/** ion-title.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-title.md: [5] modeName **/
2 /* md mode **/,

/** ion-title.md: [6] styles **/
'/********** title.md.scss **********/\n' + 
'\n' + 
'ion-title {\n' + 
'  display: flex;\n' + 
'  visibility: inherit !important;\n' + 
'  flex: 1;\n' + 
'  align-items: center;\n' + 
'  transform: translateZ(0);\n' + 
'}\n' + 
'\n' + 
'.toolbar-title {\n' + 
'  display: block;\n' + 
'  overflow: hidden;\n' + 
'  width: 100%;\n' + 
'  text-overflow: ellipsis;\n' + 
'  white-space: nowrap;\n' + 
'}\n' + 
'\n' + 
'.toolbar-title-md {\n' + 
'  padding: 0 12px;\n' + 
'  font-size: 2rem;\n' + 
'  font-weight: 500;\n' + 
'  color: #424242;\n' + 
'}\n' + 
'\n' + 
'.toolbar-primary .toolbar-title-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-secondary .toolbar-title-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-danger .toolbar-title-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-light .toolbar-title-md {\n' + 
'  color: #000;\n' + 
'}\n' + 
'\n' + 
'.toolbar-dark .toolbar-title-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** ion-toolbar.md *****************/
[
/** ion-toolbar.md: [0] tagName **/
'ion-toolbar',

/** ion-toolbar.md: [1] methods **/
0 /* no methods */,

/** ion-toolbar.md: [2] listeners **/
0 /* no listeners */,

/** ion-toolbar.md: [3] watchers **/
0 /* no watchers */,

/** ion-toolbar.md: [4] shadow **/
0 /* do not use shadow dom */,

/** ion-toolbar.md: [5] modeName **/
2 /* md mode **/,

/** ion-toolbar.md: [6] styles **/
'/********** toolbar.md.scss **********/\n' + 
'\n' + 
'ion-toolbar {\n' + 
'  position: relative;\n' + 
'  z-index: 10;\n' + 
'  visibility: inherit !important;\n' + 
'}\n' + 
'\n' + 
'.toolbar {\n' + 
'  display: flex;\n' + 
'  overflow: hidden;\n' + 
'  visibility: inherit !important;\n' + 
'  flex-direction: row;\n' + 
'  align-items: center;\n' + 
'  justify-content: space-between;\n' + 
'  width: 100%;\n' + 
'  contain: content;\n' + 
'}\n' + 
'\n' + 
'.toolbar-background {\n' + 
'  position: absolute;\n' + 
'  top: 0;\n' + 
'  left: 0;\n' + 
'  z-index: -1;\n' + 
'  width: 100%;\n' + 
'  height: 100%;\n' + 
'  border: 0;\n' + 
'  transform: translateZ(0);\n' + 
'  pointer-events: none;\n' + 
'  contain: strict;\n' + 
'}\n' + 
'\n' + 
'ion-buttons {\n' + 
'  display: block;\n' + 
'  margin: 0 .2rem;\n' + 
'  transform: translateZ(0);\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'ion-buttons button,\n' + 
'ion-buttons a,\n' + 
'ion-buttons input,\n' + 
'ion-buttons textarea,\n' + 
'ion-buttons div {\n' + 
'  pointer-events: auto;\n' + 
'}\n' + 
'\n' + 
'.toolbar[transparent] .toolbar-background {\n' + 
'  border-color: transparent;\n' + 
'  background: transparent;\n' + 
'}\n' + 
'\n' + 
'ion-buttons,\n' + 
'.bar-button-menutoggle {\n' + 
'  z-index: 99;\n' + 
'  transform: translateZ(0);\n' + 
'}\n' + 
'\n' + 
'ion-navbar.toolbar {\n' + 
'  display: flex;\n' + 
'  transform: translateZ(0);\n' + 
'}\n' + 
'\n' + 
'.toolbar-md {\n' + 
'  padding: 4px;\n' + 
'  min-height: 56px;\n' + 
'}\n' + 
'\n' + 
'.toolbar-background-md {\n' + 
'  border-color: #b2b2b2;\n' + 
'  background: #f8f8f8;\n' + 
'}\n' + 
'\n' + 
'.header-md::after,\n' + 
'.tabs-md[tabsPlacement="top"] > .tabbar::after,\n' + 
'.footer-md::before,\n' + 
'.tabs-md[tabsPlacement="bottom"] > .tabbar::before {\n' + 
'  position: absolute;\n' + 
'  bottom: -5px;\n' + 
'  left: 0;\n' + 
'  width: 100%;\n' + 
'  height: 5px;\n' + 
'  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n' + 
'  background-repeat: repeat-x;\n' + 
'  background-position: 0 -2px;\n' + 
'  content: "";\n' + 
'}\n' + 
'\n' + 
'.footer-md::before,\n' + 
'.tabs-md[tabsPlacement="bottom"] > .tabbar::before {\n' + 
'  top: -2px;\n' + 
'  bottom: auto;\n' + 
'  height: 2px;\n' + 
'  background-position: 0 0;\n' + 
'}\n' + 
'\n' + 
'.header-md[no-border]::after,\n' + 
'.footer-md[no-border]::before,\n' + 
'.tabs-md[tabsPlacement="top"][no-border] > .tabbar::after,\n' + 
'.tabs-md[tabsPlacement="bottom"][no-border] > .tabbar::before {\n' + 
'  display: none;\n' + 
'}\n' + 
'\n' + 
'.toolbar-content-md {\n' + 
'  flex: 1;\n' + 
'  order: 3;\n' + 
'  min-width: 0;\n' + 
'  max-width: 100%;\n' + 
'}\n' + 
'\n' + 
'.bar-buttons-md {\n' + 
'  order: 4;\n' + 
'  transform: translateZ(0);\n' + 
'}\n' + 
'\n' + 
'.bar-buttons-md[left] {\n' + 
'  order: 2;\n' + 
'}\n' + 
'\n' + 
'.bar-button-md:first-child {\n' + 
'  margin-left: 0;\n' + 
'}\n' + 
'\n' + 
'.bar-buttons-md[end] {\n' + 
'  order: 5;\n' + 
'  text-align: right;\n' + 
'}\n' + 
'\n' + 
'.bar-buttons-md[right] {\n' + 
'  order: 6;\n' + 
'  text-align: right;\n' + 
'}\n' + 
'\n' + 
'.bar-button-md {\n' + 
'  margin-top: 0;\n' + 
'  margin-right: .2rem;\n' + 
'  margin-bottom: 0;\n' + 
'  margin-left: .2rem;\n' + 
'  padding: 0 5px;\n' + 
'  height: 32px;\n' + 
'  border: 0;\n' + 
'  border-radius: 2px;\n' + 
'  font-size: 1.4rem;\n' + 
'  font-weight: 500;\n' + 
'  text-transform: uppercase;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md,\n' + 
'.bar-button-outline-md {\n' + 
'  overflow: hidden;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md {\n' + 
'  border-width: 1px;\n' + 
'  border-style: solid;\n' + 
'  border-color: #424242;\n' + 
'  color: #424242;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md:hover:not(.disable-hover) {\n' + 
'  opacity: .4;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md .button-effect {\n' + 
'  background-color: #424242;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md {\n' + 
'  color: #fff;\n' + 
'  background-color: #424242;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md:hover:not(.disable-hover) {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #515151;\n' + 
'}\n' + 
'\n' + 
'.bar-button-md.bar-button-icon-left ion-icon {\n' + 
'  padding-right: .3em;\n' + 
'  font-size: 1.4em;\n' + 
'  line-height: .67;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.bar-button-md.bar-button-icon-right ion-icon {\n' + 
'  padding-left: .4em;\n' + 
'  font-size: 1.4em;\n' + 
'  line-height: .67;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.bar-button-md[icon-only] {\n' + 
'  padding: 0;\n' + 
'}\n' + 
'\n' + 
'.bar-button-md[icon-only] ion-icon {\n' + 
'  padding: 0 .1em;\n' + 
'  min-width: 28px;\n' + 
'  font-size: 1.8em;\n' + 
'  line-height: .67;\n' + 
'  pointer-events: none;\n' + 
'}\n' + 
'\n' + 
'.back-button-md {\n' + 
'  margin: 0 6px;\n' + 
'  min-width: 44px;\n' + 
'  box-shadow: none;\n' + 
'}\n' + 
'\n' + 
'.back-button-icon-md {\n' + 
'  margin: 0;\n' + 
'  padding: 0 6px;\n' + 
'  font-size: 2.4rem;\n' + 
'  font-weight: normal;\n' + 
'  text-align: left;\n' + 
'}\n' + 
'\n' + 
'.bar-button-menutoggle-md {\n' + 
'  order: 1;\n' + 
'  margin: 0 6px;\n' + 
'  padding: 0 2px;\n' + 
'  min-width: 44px;\n' + 
'}\n' + 
'\n' + 
'.bar-button-menutoggle-md ion-icon {\n' + 
'  padding: 0 6px;\n' + 
'  font-size: 2.4rem;\n' + 
'}\n' + 
'\n' + 
'.bar-button-menutoggle-md[end],\n' + 
'.bar-button-menutoggle-md[right] {\n' + 
'  order: 7;\n' + 
'  margin: 0 2px;\n' + 
'  min-width: 28px;\n' + 
'}\n' + 
'\n' + 
'.bar-button-default-md,\n' + 
'.bar-button-clear-md-default,\n' + 
'.bar-button-md-default {\n' + 
'  color: #424242;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-default-md:hover:not(.disable-hover),\n' + 
'.bar-button-clear-md-default:hover:not(.disable-hover),\n' + 
'.bar-button-md-default:hover:not(.disable-hover) {\n' + 
'  color: #424242;\n' + 
'}\n' + 
'\n' + 
'.bar-button-clear-md,\n' + 
'.bar-button-clear-md-clear,\n' + 
'.bar-button-md-clear {\n' + 
'  color: #424242;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-clear-md:hover:not(.disable-hover),\n' + 
'.bar-button-clear-md-clear:hover:not(.disable-hover),\n' + 
'.bar-button-md-clear:hover:not(.disable-hover) {\n' + 
'  color: #424242;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .toolbar-background-md {\n' + 
'  background: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-clear-md,\n' + 
'.toolbar-md-primary .bar-button-default-md,\n' + 
'.toolbar-md-primary .bar-button-outline-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-clear-md .button-effect,\n' + 
'.toolbar-md-primary .bar-button-default-md .button-effect,\n' + 
'.toolbar-md-primary .bar-button-outline-md .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md {\n' + 
'  border-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-primary-md,\n' + 
'.toolbar-md-primary .bar-button-clear-md-primary,\n' + 
'.toolbar-md-primary .bar-button-md-primary {\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-primary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-clear-md-primary:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-md-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-primary {\n' + 
'  border-color: #2e74eb;\n' + 
'  color: #2e74eb;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-primary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-primary .button-effect {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-primary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-secondary-md,\n' + 
'.toolbar-md-primary .bar-button-clear-md-secondary,\n' + 
'.toolbar-md-primary .bar-button-md-secondary {\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-secondary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-clear-md-secondary:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-md-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-secondary {\n' + 
'  border-color: #2ec95c;\n' + 
'  color: #2ec95c;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-secondary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-secondary .button-effect {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-secondary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-danger-md,\n' + 
'.toolbar-md-primary .bar-button-clear-md-danger,\n' + 
'.toolbar-md-primary .bar-button-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-danger-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-clear-md-danger:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-md-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-danger {\n' + 
'  border-color: #e13838;\n' + 
'  color: #e13838;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-danger.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-danger .button-effect {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-danger.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-light-md,\n' + 
'.toolbar-md-primary .bar-button-clear-md-light,\n' + 
'.toolbar-md-primary .bar-button-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-light-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-clear-md-light:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-md-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-light {\n' + 
'  border-color: #e0e0e0;\n' + 
'  color: #e0e0e0;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-light.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-light .button-effect {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-light.activated {\n' + 
'  color: #000;\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-dark-md,\n' + 
'.toolbar-md-primary .bar-button-clear-md-dark,\n' + 
'.toolbar-md-primary .bar-button-md-dark {\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-dark-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-clear-md-dark:hover:not(.disable-hover),\n' + 
'.toolbar-md-primary .bar-button-md-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-dark {\n' + 
'  border-color: #343434;\n' + 
'  color: #343434;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-dark.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-outline-md-dark .button-effect {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-primary .bar-button-solid-md-dark.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.bar-button-primary-md,\n' + 
'.bar-button-clear-md-primary,\n' + 
'.bar-button-md-primary {\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-primary-md:hover:not(.disable-hover),\n' + 
'.bar-button-clear-md-primary:hover:not(.disable-hover),\n' + 
'.bar-button-md-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-primary {\n' + 
'  border-color: #2e74eb;\n' + 
'  color: #2e74eb;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-primary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-primary .button-effect {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-primary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .toolbar-background-md {\n' + 
'  background: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-clear-md,\n' + 
'.toolbar-md-secondary .bar-button-default-md,\n' + 
'.toolbar-md-secondary .bar-button-outline-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-clear-md .button-effect,\n' + 
'.toolbar-md-secondary .bar-button-default-md .button-effect,\n' + 
'.toolbar-md-secondary .bar-button-outline-md .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md {\n' + 
'  border-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-primary-md,\n' + 
'.toolbar-md-secondary .bar-button-clear-md-primary,\n' + 
'.toolbar-md-secondary .bar-button-md-primary {\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-primary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-clear-md-primary:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-md-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-primary {\n' + 
'  border-color: #2e74eb;\n' + 
'  color: #2e74eb;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-primary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-primary .button-effect {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-primary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-secondary-md,\n' + 
'.toolbar-md-secondary .bar-button-clear-md-secondary,\n' + 
'.toolbar-md-secondary .bar-button-md-secondary {\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-secondary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-clear-md-secondary:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-md-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-secondary {\n' + 
'  border-color: #2ec95c;\n' + 
'  color: #2ec95c;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-secondary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-secondary .button-effect {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-secondary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-danger-md,\n' + 
'.toolbar-md-secondary .bar-button-clear-md-danger,\n' + 
'.toolbar-md-secondary .bar-button-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-danger-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-clear-md-danger:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-md-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-danger {\n' + 
'  border-color: #e13838;\n' + 
'  color: #e13838;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-danger.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-danger .button-effect {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-danger.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-light-md,\n' + 
'.toolbar-md-secondary .bar-button-clear-md-light,\n' + 
'.toolbar-md-secondary .bar-button-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-light-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-clear-md-light:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-md-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-light {\n' + 
'  border-color: #e0e0e0;\n' + 
'  color: #e0e0e0;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-light.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-light .button-effect {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-light.activated {\n' + 
'  color: #000;\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-dark-md,\n' + 
'.toolbar-md-secondary .bar-button-clear-md-dark,\n' + 
'.toolbar-md-secondary .bar-button-md-dark {\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-dark-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-clear-md-dark:hover:not(.disable-hover),\n' + 
'.toolbar-md-secondary .bar-button-md-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-dark {\n' + 
'  border-color: #343434;\n' + 
'  color: #343434;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-dark.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-outline-md-dark .button-effect {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-secondary .bar-button-solid-md-dark.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.bar-button-secondary-md,\n' + 
'.bar-button-clear-md-secondary,\n' + 
'.bar-button-md-secondary {\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-secondary-md:hover:not(.disable-hover),\n' + 
'.bar-button-clear-md-secondary:hover:not(.disable-hover),\n' + 
'.bar-button-md-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-secondary {\n' + 
'  border-color: #2ec95c;\n' + 
'  color: #2ec95c;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-secondary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-secondary .button-effect {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-secondary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .toolbar-background-md {\n' + 
'  background: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-clear-md,\n' + 
'.toolbar-md-danger .bar-button-default-md,\n' + 
'.toolbar-md-danger .bar-button-outline-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-clear-md .button-effect,\n' + 
'.toolbar-md-danger .bar-button-default-md .button-effect,\n' + 
'.toolbar-md-danger .bar-button-outline-md .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md {\n' + 
'  border-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-primary-md,\n' + 
'.toolbar-md-danger .bar-button-clear-md-primary,\n' + 
'.toolbar-md-danger .bar-button-md-primary {\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-primary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-clear-md-primary:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-md-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-primary {\n' + 
'  border-color: #2e74eb;\n' + 
'  color: #2e74eb;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-primary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-primary .button-effect {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-primary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-secondary-md,\n' + 
'.toolbar-md-danger .bar-button-clear-md-secondary,\n' + 
'.toolbar-md-danger .bar-button-md-secondary {\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-secondary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-clear-md-secondary:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-md-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-secondary {\n' + 
'  border-color: #2ec95c;\n' + 
'  color: #2ec95c;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-secondary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-secondary .button-effect {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-secondary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-danger-md,\n' + 
'.toolbar-md-danger .bar-button-clear-md-danger,\n' + 
'.toolbar-md-danger .bar-button-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-danger-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-clear-md-danger:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-md-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-danger {\n' + 
'  border-color: #e13838;\n' + 
'  color: #e13838;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-danger.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-danger .button-effect {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-danger.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-light-md,\n' + 
'.toolbar-md-danger .bar-button-clear-md-light,\n' + 
'.toolbar-md-danger .bar-button-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-light-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-clear-md-light:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-md-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-light {\n' + 
'  border-color: #e0e0e0;\n' + 
'  color: #e0e0e0;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-light.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-light .button-effect {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-light.activated {\n' + 
'  color: #000;\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-dark-md,\n' + 
'.toolbar-md-danger .bar-button-clear-md-dark,\n' + 
'.toolbar-md-danger .bar-button-md-dark {\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-dark-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-clear-md-dark:hover:not(.disable-hover),\n' + 
'.toolbar-md-danger .bar-button-md-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-dark {\n' + 
'  border-color: #343434;\n' + 
'  color: #343434;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-dark.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-outline-md-dark .button-effect {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-danger .bar-button-solid-md-dark.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.bar-button-danger-md,\n' + 
'.bar-button-clear-md-danger,\n' + 
'.bar-button-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-danger-md:hover:not(.disable-hover),\n' + 
'.bar-button-clear-md-danger:hover:not(.disable-hover),\n' + 
'.bar-button-md-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-danger {\n' + 
'  border-color: #e13838;\n' + 
'  color: #e13838;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-danger.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-danger .button-effect {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-danger.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .toolbar-background-md {\n' + 
'  background: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-clear-md,\n' + 
'.toolbar-md-light .bar-button-default-md,\n' + 
'.toolbar-md-light .bar-button-outline-md {\n' + 
'  color: #424242;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-clear-md .button-effect,\n' + 
'.toolbar-md-light .bar-button-default-md .button-effect,\n' + 
'.toolbar-md-light .bar-button-outline-md .button-effect {\n' + 
'  background-color: #424242;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md {\n' + 
'  border-color: #424242;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-primary-md,\n' + 
'.toolbar-md-light .bar-button-clear-md-primary,\n' + 
'.toolbar-md-light .bar-button-md-primary {\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-primary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-clear-md-primary:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-md-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-primary {\n' + 
'  border-color: #2e74eb;\n' + 
'  color: #2e74eb;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-primary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-primary .button-effect {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-primary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-secondary-md,\n' + 
'.toolbar-md-light .bar-button-clear-md-secondary,\n' + 
'.toolbar-md-light .bar-button-md-secondary {\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-secondary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-clear-md-secondary:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-md-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-secondary {\n' + 
'  border-color: #2ec95c;\n' + 
'  color: #2ec95c;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-secondary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-secondary .button-effect {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-secondary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-danger-md,\n' + 
'.toolbar-md-light .bar-button-clear-md-danger,\n' + 
'.toolbar-md-light .bar-button-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-danger-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-clear-md-danger:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-md-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-danger {\n' + 
'  border-color: #e13838;\n' + 
'  color: #e13838;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-danger.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-danger .button-effect {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-danger.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-light-md,\n' + 
'.toolbar-md-light .bar-button-clear-md-light,\n' + 
'.toolbar-md-light .bar-button-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-light-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-clear-md-light:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-md-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-light {\n' + 
'  border-color: #e0e0e0;\n' + 
'  color: #e0e0e0;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-light.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-light .button-effect {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-light.activated {\n' + 
'  color: #000;\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-dark-md,\n' + 
'.toolbar-md-light .bar-button-clear-md-dark,\n' + 
'.toolbar-md-light .bar-button-md-dark {\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-dark-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-clear-md-dark:hover:not(.disable-hover),\n' + 
'.toolbar-md-light .bar-button-md-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-dark {\n' + 
'  border-color: #343434;\n' + 
'  color: #343434;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-dark.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-outline-md-dark .button-effect {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-light .bar-button-solid-md-dark.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.bar-button-light-md,\n' + 
'.bar-button-clear-md-light,\n' + 
'.bar-button-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-light-md:hover:not(.disable-hover),\n' + 
'.bar-button-clear-md-light:hover:not(.disable-hover),\n' + 
'.bar-button-md-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-light {\n' + 
'  border-color: #e0e0e0;\n' + 
'  color: #e0e0e0;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-light.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-light .button-effect {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-light.activated {\n' + 
'  color: #000;\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .toolbar-background-md {\n' + 
'  background: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-clear-md,\n' + 
'.toolbar-md-dark .bar-button-default-md,\n' + 
'.toolbar-md-dark .bar-button-outline-md {\n' + 
'  color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-clear-md .button-effect,\n' + 
'.toolbar-md-dark .bar-button-default-md .button-effect,\n' + 
'.toolbar-md-dark .bar-button-outline-md .button-effect {\n' + 
'  background-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md {\n' + 
'  border-color: #fff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-primary-md,\n' + 
'.toolbar-md-dark .bar-button-clear-md-primary,\n' + 
'.toolbar-md-dark .bar-button-md-primary {\n' + 
'  color: #327eff;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-primary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-clear-md-primary:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-md-primary:hover:not(.disable-hover) {\n' + 
'  color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-primary {\n' + 
'  border-color: #2e74eb;\n' + 
'  color: #2e74eb;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-primary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-primary .button-effect {\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-primary {\n' + 
'  color: #fff;\n' + 
'  background-color: #327eff;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-primary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2e74eb;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-secondary-md,\n' + 
'.toolbar-md-dark .bar-button-clear-md-secondary,\n' + 
'.toolbar-md-dark .bar-button-md-secondary {\n' + 
'  color: #32db64;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-secondary-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-clear-md-secondary:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-md-secondary:hover:not(.disable-hover) {\n' + 
'  color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-secondary {\n' + 
'  border-color: #2ec95c;\n' + 
'  color: #2ec95c;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-secondary.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-secondary .button-effect {\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-secondary {\n' + 
'  color: #fff;\n' + 
'  background-color: #32db64;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-secondary.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #2ec95c;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-danger-md,\n' + 
'.toolbar-md-dark .bar-button-clear-md-danger,\n' + 
'.toolbar-md-dark .bar-button-md-danger {\n' + 
'  color: #f53d3d;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-danger-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-clear-md-danger:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-md-danger:hover:not(.disable-hover) {\n' + 
'  color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-danger {\n' + 
'  border-color: #e13838;\n' + 
'  color: #e13838;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-danger.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-danger .button-effect {\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-danger {\n' + 
'  color: #fff;\n' + 
'  background-color: #f53d3d;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-danger.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #e13838;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-light-md,\n' + 
'.toolbar-md-dark .bar-button-clear-md-light,\n' + 
'.toolbar-md-dark .bar-button-md-light {\n' + 
'  color: #f4f4f4;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-light-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-clear-md-light:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-md-light:hover:not(.disable-hover) {\n' + 
'  color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-light {\n' + 
'  border-color: #e0e0e0;\n' + 
'  color: #e0e0e0;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-light.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-light .button-effect {\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-light {\n' + 
'  color: #000;\n' + 
'  background-color: #f4f4f4;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-light.activated {\n' + 
'  color: #000;\n' + 
'  background-color: #e0e0e0;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-dark-md,\n' + 
'.toolbar-md-dark .bar-button-clear-md-dark,\n' + 
'.toolbar-md-dark .bar-button-md-dark {\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-dark-md:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-clear-md-dark:hover:not(.disable-hover),\n' + 
'.toolbar-md-dark .bar-button-md-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-dark {\n' + 
'  border-color: #343434;\n' + 
'  color: #343434;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-dark.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-outline-md-dark .button-effect {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.toolbar-md-dark .bar-button-solid-md-dark.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.bar-button-dark-md,\n' + 
'.bar-button-clear-md-dark,\n' + 
'.bar-button-md-dark {\n' + 
'  color: #222;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-dark-md:hover:not(.disable-hover),\n' + 
'.bar-button-clear-md-dark:hover:not(.disable-hover),\n' + 
'.bar-button-md-dark:hover:not(.disable-hover) {\n' + 
'  color: #222;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-dark {\n' + 
'  border-color: #343434;\n' + 
'  color: #343434;\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-dark.activated {\n' + 
'  background-color: transparent;\n' + 
'}\n' + 
'\n' + 
'.bar-button-outline-md-dark .button-effect {\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-dark {\n' + 
'  color: #fff;\n' + 
'  background-color: #222;\n' + 
'}\n' + 
'\n' + 
'.bar-button-solid-md-dark.activated {\n' + 
'  color: #fff;\n' + 
'  background-color: #343434;\n' + 
'}\n' + 
'\n' + 
'.bar-button-strong-md {\n' + 
'  font-weight: bold;\n' + 
'}\n' + 
'\n' + 
'\n'

]
)