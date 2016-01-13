(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Riot = require('riot');
var Todo = require('./todo.tag');
Riot.mount(Todo);
},{"./todo.tag":2,"riot":"riot"}],2:[function(require,module,exports){
var riot = require('riot');
module.exports = riot.tag2('todo', '<div each="{items}"> <h3>{title}</h3> <h3>{title}</h3> <h3>{title}</h3> </div>', '', '', function(opts) {

  this.items = [ { title: 'First' }, { title: 'Second' } ]
}, '{ }');
},{"riot":"riot"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL3RvZG8udGFnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJpb3QgPSByZXF1aXJlKCdyaW90Jyk7XG52YXIgVG9kbyA9IHJlcXVpcmUoJy4vdG9kby50YWcnKTtcblJpb3QubW91bnQoVG9kbyk7IiwidmFyIHJpb3QgPSByZXF1aXJlKCdyaW90Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJpb3QudGFnMigndG9kbycsICc8ZGl2IGVhY2g9XCJ7aXRlbXN9XCI+IDxoMz57dGl0bGV9PC9oMz4gPGgzPnt0aXRsZX08L2gzPiA8aDM+e3RpdGxlfTwvaDM+IDwvZGl2PicsICcnLCAnJywgZnVuY3Rpb24ob3B0cykge1xuXG4gIHRoaXMuaXRlbXMgPSBbIHsgdGl0bGU6ICdGaXJzdCcgfSwgeyB0aXRsZTogJ1NlY29uZCcgfSBdXG59LCAneyB9Jyk7Il19
