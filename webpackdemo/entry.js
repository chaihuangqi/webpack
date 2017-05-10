/**
 * Created by Brian on 2017/5/10.
 */
//var a = require('./a');
//require('style-loader!css-loader!./index.css');
import modA from './b';
require('./index.css');
//require('./index');
window.onload = function () {
    var box = document.getElementById('box');
    //box.innerHTML='<h3>hello webpack</h3> '+a;
    box.innerHTML='<h3>hello webpack</h3> '+(modA.a+modA.b);
}