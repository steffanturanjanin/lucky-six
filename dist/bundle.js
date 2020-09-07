!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e,n){"use strict";n.r(e);var r=["RED","GREEN","BLUE","PURPLE","BROWN","YELLOW","KHAKI","BLACK"];function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.number=e,this.colour=t.getColourName(e)};i(o,"getColourName",(function(t){return r[(t-1)%r.length]})),i(o,"getColour",(function(t){switch(o.getColourName(t)){case"RED":return"#eb3434";case"BLUE":return"#3471eb";case"GREEN":return"#6eeb34";case"PURPLE":return"#d634eb";case"BROWN":return"#a16c38";case"YELLOW":return"#e3df05";case"KHAKI":return"#f2be1f";case"BLACK":return"#000000"}}));var u=function(t,e,n,r){document.getElementById(t+e+n).style.color=r?"#32CD32":"#FF0000"},c=function(t,e,n,r,i){var o=document.getElementById(t).childNodes;o[e].style.borderColor=n?"#32CD32":"#FF0000";var u=o[e].childNodes[1].childNodes;u[0].textContent="won: "+i,u[1].textContent="value: "+r};function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"predictedNumber",(function(t){return n.numbers.indexOf(t)})),s(this,"predictedCombination",(function(t){return n.numbers.reduce((function(e,n){return e&&-1!==t.map((function(t){return t.number})).indexOf(n)}),!0)})),s(this,"updatePredictedCombination",(function(t,e,r,i){e?c(r,i,n.won,n.value,n.price):n.won||n.predictedCombination(t)&&(n.won=!0,n.wonAt=36-t.length,n.price=n.value*n.wonAt,c(r,i,n.won,n.value,n.price))})),s(this,"updateUnpredictedNumbers",(function(t,e,r){n.won||n.numbers.forEach((function(n,i){-1===t.map((function(t){return t.number})).indexOf(n)&&u(e,r,i,!1)}))})),this.numbers=e.slice(),this.value=0,this.price=0,this.won=!1,this.wonAt=-1},l=[],d=[],f=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))};function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"updatePredictedNumbers",(function(t){n.combinations.forEach((function(e,r){var i=e.predictedNumber(t);-1!==i&&u(n.id,r,i,!0)}))})),h(this,"updatePredictedCombinations",(function(t,e){n.combinations.forEach((function(r,i){r.updatePredictedCombination(t,e,n.id,i)}))})),h(this,"updateUnpredictedNumbers",(function(t){n.combinations.forEach((function(e,r){e.updateUnpredictedNumbers(t,n.id,r)}))})),h(this,"updateUnpredictedCombinations",(function(){n.combinations.forEach((function(t,e){t.updateUnpredictedCombinations(n.id,e)}))})),h(this,"setCombinationValue",(function(t){var e=Math.round(t/n.combinations.length*100)/100;n.combinations.forEach((function(t){t.value=e}))})),this.id=f(),this.combinations=[],e.forEach((function(t){n.combinations.push(new a(t.numbers))}))},b=function(t){document.getElementById("btn-pay").disabled=t},m=function(t,e){var n=document.createElement("div");n.className="col-12 content-item";var r=document.createElement("p");r.style.cssFloat="left",r.style.margin="0",r.innerText="Ticket id: "+t.id;var i=document.createElement("div");return i.className="col-12",i.style.display="table-row",t.combinations.forEach((function(t){i.appendChild(function(t,e){var n=document.createElement("div");n.className="col-4 combination",n.style.margin="3px",n.style.maxWidth="280px",n.style.minHeight="80px",n.style.borderColor=t.won?"#32CD32":"#FF0000";var r=document.createElement("div");r.className="col-6 combination-holder",t.numbers.forEach((function(t){var n=document.createElement("p");n.style.color=-1!==e.map((function(t){return t.number})).indexOf(t)?"#32CD32":"#FF0000",n.style.marginRight="5px",n.innerText=t,r.appendChild(n)}));var i=document.createElement("div");i.className="col-6 combination-info";var o=document.createElement("p");o.innerText="won: "+t.price;var u=document.createElement("p");return u.innerText="value: "+t.value,i.appendChild(o),i.appendChild(u),n.appendChild(r),n.appendChild(i),n}(t,e))})),n.appendChild(r),n.appendChild(i),n},y="http://localhost:3000/rounds",v=function(t){if(0!==t.tickets.length){var e=document.getElementById("rounds-history"),n=document.createElement("div");n.className="col-12 content-item";var r=document.createElement("p");r.innerText="Round id: "+t.id;var i=document.createElement("div");i.className="drawn-numbers",t.drawnBalls.forEach((function(t){var e=document.createElement("div");e.className="circle",e.style.backgroundColor=o.getColour(t.number),e.style.margin="2px",e.innerHTML=t.number,i.append(e)})),n.appendChild(r),n.appendChild(i),t.tickets.forEach((function(e){var r=m(e,t.drawnBalls);n.appendChild(r)})),e.insertBefore(n,e.firstChild)}},w=function(t){var e=l.indexOf(parseInt(t.target.innerHTML));-1===e?(l.length<6&&(l.push(parseInt(t.target.innerHTML)),t.target.style.borderColor=o.getColour(parseInt(t.target.innerHTML))),6===l.length&&(document.getElementById("btn-add-combination").disabled=!1)):(l.splice(e,1),t.target.style.borderColor="#b9b9b9",document.getElementById("btn-add-combination").disabled=!0)},E=function(){d.push(new a(l));var t=document.getElementById("ticket-purchase-container"),e=document.createElement("div");e.innerHTML=d[d.length-1].numbers,e.className="col-12 combination";var n=document.createElement("span");n.innerText="x",n.style.cursor="pointer",n.onclick=g,e.appendChild(n),t.appendChild(e),document.querySelectorAll("#select-numbers .circle").forEach((function(t){t.style.borderColor="#b9b9b9"})),document.getElementById("btn-add-combination").disabled=!0,l.splice(0,l.length)},g=function(t){var e=t.target.parentNode,n=Array.from(document.querySelectorAll(".combination"));d.splice(n.indexOf(e),1),e.parentNode.removeChild(e)},_=function(){fetch(y,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t.filter((function(t){return t.tickets.length>0}))})).then((function(t){return t.forEach((function(t){return v(t)}))}))},x=function(){document.querySelectorAll("#drawn-numbers .circle").forEach((function(t){t.style.backgroundColor="#2b2b2b",t.innerHTML=""})),function(){for(var t=document.getElementById("tickets-container");t.firstChild;)t.firstChild.remove()}(),b(!1)},C=function(t,e){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function S(t,e){function n(){this.constructor=t}C(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function T(t){return"function"==typeof t}var N=!1,I={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;N=t},get useDeprecatedSynchronousErrorHandling(){return N}};function O(t){setTimeout((function(){throw t}),0)}var P={closed:!0,next:function(t){},error:function(t){if(I.useDeprecatedSynchronousErrorHandling)throw t;O(t)},complete:function(){}},B=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function k(t){return null!==t&&"object"==typeof t}var j=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),A=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,r=this._unsubscribe,i=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var o=0;o<n.length;++o){n[o].remove(this)}if(T(r))try{r.call(this)}catch(t){e=t instanceof j?D(t.errors):[t]}if(B(i)){o=-1;for(var u=i.length;++o<u;){var c=i[o];if(k(c))try{c.unsubscribe()}catch(t){e=e||[],t instanceof j?e=e.concat(D(t.errors)):e.push(t)}}}if(e)throw new j(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function D(t){return t.reduce((function(t,e){return t.concat(e instanceof j?e.errors:e)}),[])}var H=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),M=function(t){function e(n,r,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=P;break;case 1:if(!n){o.destination=P;break}if("object"==typeof n){n instanceof e?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new U(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new U(o,n,r,i)}return o}return S(e,t),e.prototype[H]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(A),U=function(t){function e(e,n,r,i){var o,u=t.call(this)||this;u._parentSubscriber=e;var c=u;return T(n)?o=n:n&&(o=n.next,r=n.error,i=n.complete,n!==P&&(T((c=Object.create(n)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=o,u._error=r,u._complete=i,u}return S(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;I.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=I.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):O(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;O(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};I.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),I.useDeprecatedSynchronousErrorHandling)throw t;O(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!I.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return I.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(O(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(M);var L=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function F(){}function V(t){return t?1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}:F}var R=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,i=function(t,e,n){if(t){if(t instanceof M)return t;if(t[H])return t[H]()}return t||e||n?new M(t,e,n):new M(P)}(t,e,n);if(r?i.add(r.call(i,this.source)):i.add(this.source||I.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),I.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){I.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,n=e.closed,r=e.destination,i=e.isStopped;if(n||i)return!1;t=r&&r instanceof M?r:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=Y(e))((function(e,r){var i;i=n.subscribe((function(e){try{t(e)}catch(t){r(t),i&&i.unsubscribe()}}),r,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[L]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:V(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=Y(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function Y(t){if(t||(t=I.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var q=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return S(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,r=void 0;try{this.work(t)}catch(t){n=!0,r=!!t&&t||new Error(t)}if(n)return this.unsubscribe(),r},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,n){return t.call(this)||this}return S(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(A)),K=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=function(){return Date.now()},t}(),W=new(function(t){function e(n,r){void 0===r&&(r=K.now);var i=t.call(this,n,(function(){return e.delegate&&e.delegate!==i?e.delegate.now():r()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return S(e,t),e.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,r,i):t.prototype.schedule.call(this,n,r,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},e}(K))(q);function G(t){return!B(t)&&t-parseFloat(t)+1>=0}function z(t,e){return void 0===t&&(t=0),void 0===e&&(e=W),(!G(t)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=W),new R((function(n){return n.add(e.schedule(J,t,{subscriber:n,counter:0,period:t})),n}))}function J(t){var e=t.subscriber,n=t.counter,r=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:r},r)}function Q(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new X(t,e))}}var X=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new Z(t,this.project,this.thisArg))},t}(),Z=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.project=n,i.count=0,i.thisArg=r||i,i}return S(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(M);function $(t,e){return void 0===e&&(e=!1),function(n){return n.lift(new tt(t,e))}}var tt=function(){function t(t,e){this.predicate=t,this.inclusive=e}return t.prototype.call=function(t,e){return e.subscribe(new et(t,this.predicate,this.inclusive))},t}(),et=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.predicate=n,i.inclusive=r,i.index=0,i}return S(e,t),e.prototype._next=function(t){var e,n=this.destination;try{e=this.predicate(t,this.index++)}catch(t){return void n.error(t)}this.nextOrComplete(t,e)},e.prototype.nextOrComplete=function(t,e){var n=this.destination;Boolean(e)?n.next(t):(this.inclusive&&n.next(t),n.complete())},e}(M);function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var rt=function t(){var e,n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),nt(this,"save",(function(){return t=n,fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()}));var t})),nt(this,"addTicket",(function(){d.length>0&&n.tickets.push(function(){var t=new p(d),e=parseFloat(document.getElementById("txt-input-value").value);(isNaN(e)||e<0)&&(e=30),t.setCombinationValue(e);var n=document.getElementById("tickets-container");n.hidden=!1;var r=document.createElement("div");r.className="col-12 content-item",r.id=t.id,t.combinations.forEach((function(e,i){var o=document.createElement("div");o.className="col-4 combination";var u=document.createElement("div");u.className="col-6";var c=document.createElement("div");c.className="combination-holder",e.numbers.forEach((function(e,n){var r=document.createElement("p");r.id=t.id+i+n,r.innerText=e,c.appendChild(r)}));var s=document.createElement("div");s.className="col-6 combination-info";var a=document.createElement("p");a.innerText="won: 0";var l=document.createElement("p");l.innerText="value: "+e.value,s.appendChild(a),s.appendChild(l),u.appendChild(c),o.appendChild(u),o.appendChild(s),r.appendChild(o),n.appendChild(r)})),d.length=0;for(var i=document.getElementById("ticket-purchase-container");i.firstChild;)i.firstChild.remove();return t}())})),nt(this,"updatePredictedNumbers",(function(t){n.tickets.forEach((function(e){e.updatePredictedNumbers(t)}))})),nt(this,"updatePredictedCombinations",(function(t,e){n.tickets.forEach((function(n){n.updatePredictedCombinations(t,e)}))})),nt(this,"updateUnpredictedNumbers",(function(t){n.tickets.forEach((function(e){e.updateUnpredictedNumbers(t)}))})),nt(this,"updateUnpredictedCombinations",(function(){n.tickets.forEach((function(t){t.updateUnpredictedCombinations()}))})),this.id=f(),this.tickets=[],this.drawnBalls=[],e=this,document.getElementById("btn-pay").onclick=e.addTicket};function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ot=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),it(this,"asyncDrawBall",(function(){return new Promise((function(t){var n=Math.floor(Math.random()*e.balls.length),r=e.balls[n];e.balls.splice(n,1),e.drawnBalls.push(r);var i=document.querySelectorAll(".number > div"),u=e.drawnBalls[e.drawnBalls.length-1].number;i[e.drawnBalls.length-1].style.backgroundColor=o.getColour(u),i[e.drawnBalls.length-1].innerHTML=u,t(r)}))})),it(this,"shuffleDrumUI",(function(){var t=Math.floor(Math.random()*e.balls.length),n=e.balls[t],r=document.querySelector(".drum > div");r.style.backgroundColor=o.getColour(n.number),r.innerHTML=n.number})),it(this,"restartDrumUI",(function(){var t=document.querySelector(".drum > div");t.style.backgroundColor="#2b2b2b",t.innerHTML=""})),it(this,"startDrawing",(function(){z(100).pipe(Q((function(){return e.drawnBalls.length})),$((function(t){return t<36}))).subscribe({next:function(){return e.shuffleDrumUI()},complete:function(){return e.restartDrumUI()}}),z(1e3).pipe($((function(){return e.drawnBalls.length<36}))).subscribe({next:function(){e.asyncDrawBall().then((function(t){return e.round.updatePredictedNumbers(t.number)})).then((function(){return e.round.updatePredictedCombinations(e.drawnBalls,!1)}))},complete:function(){e.round.updateUnpredictedNumbers(e.drawnBalls),e.round.updatePredictedCombinations(e.drawnBalls,!0),e.round.drawnBalls=e.drawnBalls,e.round.save().then((function(t){return v(t)})),setTimeout((function(){x(),Nt()}),5e3)}})})),this.round=new rt,this.balls=[];for(var n=1;n<=48;n++)this.balls.push(new o(n));this.drawnBalls=[]};function ut(t){return t&&"function"==typeof t.schedule}function ct(t){var e=t.index,n=t.period,r=t.subscriber;if(r.next(e),!r.closed){if(-1===n)return r.complete();t.index=e+1,this.schedule(t,n)}}var st=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()}};function at(t,e){return new R((function(n){var r=new A,i=0;return r.add(e.schedule((function(){i!==t.length?(n.next(t[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}function lt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return ut(n)?(t.pop(),at(t,n)):function(t,e){return e?at(t,e):new R(st(t))}(t)}var dt=function(t){function e(e,n,r){var i=t.call(this)||this;return i.parent=e,i.outerValue=n,i.outerIndex=r,i.index=0,i}return S(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(M);function ft(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var ht=ft(),pt=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function bt(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var mt=function(t){if(t&&"function"==typeof t[L])return r=t,function(t){var e=r[L]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(pt(t))return st(t);if(bt(t))return n=t,function(t){return n.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,O),t};if(t&&"function"==typeof t[ht])return e=t,function(t){for(var n=e[ht]();;){var r=n.next();if(r.done){t.complete();break}if(t.next(r.value),t.closed)break}return"function"==typeof n.return&&t.add((function(){n.return&&n.return()})),t};var e,n,r,i=k(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+i+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};var yt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return S(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(M);function vt(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[L]}(t))return function(t,e){return new R((function(n){var r=new A;return r.add(e.schedule((function(){var i=t[L]();r.add(i.subscribe({next:function(t){r.add(e.schedule((function(){return n.next(t)})))},error:function(t){r.add(e.schedule((function(){return n.error(t)})))},complete:function(){r.add(e.schedule((function(){return n.complete()})))}}))}))),r}))}(t,e);if(bt(t))return function(t,e){return new R((function(n){var r=new A;return r.add(e.schedule((function(){return t.then((function(t){r.add(e.schedule((function(){n.next(t),r.add(e.schedule((function(){return n.complete()})))})))}),(function(t){r.add(e.schedule((function(){return n.error(t)})))}))}))),r}))}(t,e);if(pt(t))return at(t,e);if(function(t){return t&&"function"==typeof t[ht]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new R((function(n){var r,i=new A;return i.add((function(){r&&"function"==typeof r.return&&r.return()})),i.add(e.schedule((function(){r=t[ht](),i.add(e.schedule((function(){if(!n.closed){var t,e;try{var i=r.next();t=i.value,e=i.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}})))}))),i}))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function wt(t,e,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof e?function(r){return r.pipe(wt((function(n,r){return(i=t(n,r),o?vt(i,o):i instanceof R?i:new R(mt(i))).pipe(Q((function(t,i){return e(n,t,r,i)})));var i,o}),n))}:("number"==typeof e&&(n=e),function(e){return e.lift(new Et(t,n))})}var Et=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new gt(t,this.project,this.concurrent))},t}(),gt=function(t){function e(e,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=n,i.concurrent=r,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return S(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=new dt(this,void 0,void 0);this.destination.add(r),function(t,e,n,r,i){if(void 0===i&&(i=new dt(t,n,r)),!i.closed)e instanceof R?e.subscribe(i):mt(e)(i)}(this,t,e,n,r)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(yt);function _t(t){return t}function xt(){return void 0===(t=1)&&(t=Number.POSITIVE_INFINITY),wt(_t,t);var t}function Ct(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return xt()(lt.apply(void 0,t))}function St(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return ut(n)?(t.pop(),function(e){return Ct(t,e,n)}):function(e){return Ct(t,e)}}var Tt=function(t){var e=1e3,n=function(t){return Math.floor(t/e/60)},r=function(t){var n=function(t){return Math.floor(t/e)%60}(t);return n<10?"0".concat(n):n.toString()},i=function(t){return 1e3*t};!function(){var e=function(t,e,n){void 0===t&&(t=0);var r=-1;return G(e)?r=Number(e)<1?1:Number(e):ut(e)&&(n=e),ut(n)||(n=W),new R((function(e){var i=G(t)?t:+t-n.now();return n.schedule(ct,i,{index:0,period:r,subscriber:e})}))}(0,1e3).pipe(Q((function(t){return function(t){return 30-t}(t)})),$((function(t){return t>=0}))),o=e.pipe(Q(i)),u=o.pipe(Q(n),Q((function(t){return t.toString()})),St(n(3e4).toString())),c=o.pipe(Q(r),St(r(3e4).toString())),s=document.getElementById("minutes"),a=document.getElementById("seconds");function l(t,e){t.subscribe((function(t){return e.innerHTML=t}))}l(u,s),l(c,a),e.subscribe({complete:function(){b(!0),t()}})}()},Nt=function(){var t=new ot;Tt(t.startDrawing)};!function(){for(var t=document.getElementById("drawn-numbers"),e=36;e>0;e--){var n=document.createElement("div");n.className="number";var r=document.createElement("p"),i=document.createElement("div");i.className="circle",r.innerText=e.toString(),r.className="ordinal-number",n.appendChild(r),n.appendChild(i),t.appendChild(n)}}(),function(){for(var t=document.getElementById("select-numbers"),e=1;e<=48;e++){var n=document.createElement("div");n.className="circle",n.innerText=e.toString(),n.onclick=w,t.appendChild(n)}}(),document.getElementById("btn-add-combination").onclick=E,_(),Nt()}});
//# sourceMappingURL=bundle.js.map