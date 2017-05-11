Ionic.loadComponents(

/**** core version ****/
0,

/**** bundleId ****/
"fiber-demo.default.fiber-triangle.default.fiber-dot.default",

/**** bundled modules ****/
function importComponent(exports, h, Ionic) {
var FiberDemo = (function () {
    function FiberDemo() {
        this.elapsed = 0;
        this.seconds = 0;
    }
    FiberDemo.prototype.ionViewDidLoad = function () {
        var tick = this.tick.bind(this);
        this.intervalID = setInterval(tick, 1000);
    };
    FiberDemo.prototype.tick = function () {
        this.seconds = (this.seconds % 10) + 1;
    };
    FiberDemo.prototype.render = function () {
        var elapsed = this.elapsed;
        var t = (elapsed / 1000) % 10;
        var scale = 1 + (t > 5 ? 10 - t : t) / 10;
        var containerStyle = {
            position: 'absolute',
            transformOrigin: '0 0',
            left: '50%',
            top: '50%',
            width: '10px',
            height: '10px',
            background: '#eee',
            transform: 'scaleX(' + (scale / 2.1) + ') scaleY(0.7) translateZ(0.1px)'
        };
        return h(this, {
            style: containerStyle
        }, h('div', h('fiber-triangle', {
            props: {
                x: 0,
                y: 0,
                s: 1000,
                seconds: this.seconds
            }
        })));
    };
    return FiberDemo;
}());

var targetSize = 25;
var FiberTriangle = (function () {
    function FiberTriangle() {
    }
    FiberTriangle.prototype.render = function () {
        var s = this.s;
        if (s <= targetSize) {
            return h(this, h('fiber-dot', {
                props: {
                    x: this.x - (targetSize / 2),
                    y: this.y - (targetSize / 2),
                    size: targetSize,
                    text: this.seconds.toString()
                }
            }));
        }
        s = s / 2;
        return h(this, [
            h('fiber-triangle', {
                props: {
                    x: this.x,
                    y: this.y - (s / 2),
                    s: s,
                    seconds: this.seconds
                }
            }),
            h('fiber-triangle', {
                props: {
                    x: this.x - s,
                    y: this.y + (s / 2),
                    s: s,
                    seconds: this.seconds
                }
            }),
            h('fiber-triangle', {
                props: {
                    x: this.x + s,
                    y: this.y + (s / 2),
                    s: s,
                    seconds: this.seconds
                }
            })
        ]);
    };
    return FiberTriangle;
}());

var FiberDot = (function () {
    function FiberDot() {
        this.hover = false;
    }
    FiberDot.prototype.enter = function () {
        this.hover = true;
    };
    FiberDot.prototype.leave = function () {
        this.hover = false;
    };
    FiberDot.prototype.render = function () {
        var s = this.size * 1.3;
        var style = {
            position: 'absolute',
            font: 'normal 15px sans-serif',
            textAlign: 'center',
            cursor: 'pointer',
            width: s + 'px',
            height: s + 'px',
            left: (this.x) + 'px',
            top: (this.y) + 'px',
            borderRadius: (s / 2) + 'px',
            lineHeight: (s) + 'px',
            background: this.hover ? '#ff0' : '#61dafb'
        };
        return h(this, {
            style: style,
            on: {
                mouseenter: this.enter.bind(this),
                mouseleave: this.leave.bind(this)
            },
        }, this.hover ? '*' + this.text + '*' : this.text);
    };
    return FiberDot;
}());

exports['fiber-demo'] = FiberDemo;
exports['fiber-triangle'] = FiberTriangle;
exports['fiber-dot'] = FiberDot;
},


/***************** fiber-demo.default *****************/
[
/** fiber-demo.default: [0] tagName **/
'fiber-demo',

/** fiber-demo.default: [1] methods **/
0 /* no methods */,

/** fiber-demo.default: [2] listeners **/
0 /* no listeners */,

/** fiber-demo.default: [3] watchers **/
0 /* no watchers */,

/** fiber-demo.default: [4] shadow **/
0 /* do not use shadow dom */,

/** fiber-demo.default: [5] modeName **/
0 /* default mode **/,

/** fiber-demo.default: [6] styles **/
'/********** main.scss **********/\n' + 
'\n' + 
'body {\n' + 
'  background: #fff;\n' + 
'  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n' + 
'  font-size: 15px;\n' + 
'  line-height: 1.7;\n' + 
'  margin: 0;\n' + 
'  padding: 30px;\n' + 
'}\n' + 
'\n' + 
'fiber-demo,\n' + 
'fiber-triangle,\n' + 
'fiber-dot {\n' + 
'  visibility: inherit;\n' + 
'}\n' + 
'\n' + 
'a {\n' + 
'  color: #4183c4;\n' + 
'  text-decoration: none;\n' + 
'}\n' + 
'\n' + 
'a:hover {\n' + 
'  text-decoration: underline;\n' + 
'}\n' + 
'\n' + 
'code {\n' + 
'  background-color: #f8f8f8;\n' + 
'  border: 1px solid #ddd;\n' + 
'  border-radius: 3px;\n' + 
'  font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n' + 
'  font-size: 12px;\n' + 
'  margin: 0 2px;\n' + 
'  padding: 0px 5px;\n' + 
'}\n' + 
'\n' + 
'h1, h2, h3, h4 {\n' + 
'  font-weight: bold;\n' + 
'  margin: 0 0 15px;\n' + 
'  padding: 0;\n' + 
'}\n' + 
'\n' + 
'h1 {\n' + 
'  border-bottom: 1px solid #ddd;\n' + 
'  font-size: 2.5em;\n' + 
'  font-weight: bold;\n' + 
'  margin: 0 0 15px;\n' + 
'  padding: 0;\n' + 
'}\n' + 
'\n' + 
'h2 {\n' + 
'  border-bottom: 1px solid #eee;\n' + 
'  font-size: 2em;\n' + 
'}\n' + 
'\n' + 
'h3 {\n' + 
'  font-size: 1.5em;\n' + 
'}\n' + 
'\n' + 
'h4 {\n' + 
'  font-size: 1.2em;\n' + 
'}\n' + 
'\n' + 
'p, ul {\n' + 
'  margin: 15px 0;\n' + 
'}\n' + 
'\n' + 
'ul {\n' + 
'  padding-left: 30px;\n' + 
'}\n' + 
'\n' + 
'\n'

],

/***************** fiber-triangle.default *****************/
[
/** fiber-triangle.default: [0] tagName **/
'fiber-triangle',

/** fiber-triangle.default: [1] methods **/
0 /* no methods */,

/** fiber-triangle.default: [2] listeners **/
0 /* no listeners */,

/** fiber-triangle.default: [3] watchers **/
0 /* no watchers */,

/** fiber-triangle.default: [4] shadow **/
0 /* do not use shadow dom */,

/** fiber-triangle.default: [5] modeName **/
0 /* default mode **/,

/** fiber-triangle.default: [6] styles **/
0 /* no styles */

],

/***************** fiber-dot.default *****************/
[
/** fiber-dot.default: [0] tagName **/
'fiber-dot',

/** fiber-dot.default: [1] methods **/
0 /* no methods */,

/** fiber-dot.default: [2] listeners **/
0 /* no listeners */,

/** fiber-dot.default: [3] watchers **/
0 /* no watchers */,

/** fiber-dot.default: [4] shadow **/
0 /* do not use shadow dom */,

/** fiber-dot.default: [5] modeName **/
0 /* default mode **/,

/** fiber-dot.default: [6] styles **/
0 /* no styles */

]
)