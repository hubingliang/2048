(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},n={app:0},a=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/2048/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"1cbd":function(t,e,o){},"1e5c":function(t,e,o){},"2ca9":function(t,e,o){},4800:function(t,e,o){"use strict";var r=o("858e"),n=o.n(r);n.a},5224:function(t,e,o){"use strict";var r=o("2ca9"),n=o.n(r);n.a},"68a8":function(t,e,o){"use strict";var r=o("1e5c"),n=o.n(r);n.a},"7c55":function(t,e,o){"use strict";var r=o("d3dd"),n=o.n(r);n.a},"858e":function(t,e,o){},"9ebe":function(t,e,o){"use strict";var r=o("e5eb"),n=o.n(r);n.a},cd49:function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Topbar"),o("Score"),o("NewGame"),o("Game"),o("Footer")],1)},a=[],i=o("9ab4"),s=o("60a3"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"gameBox"},[o("v-touch",{staticClass:"game",on:{swipeleft:function(e){t.touchSwipe("left")},swiperight:function(e){t.touchSwipe("right")},swipeup:function(e){t.touchSwipe("up")},swipedown:function(e){t.touchSwipe("down")}}},t._l(this.$store.state.gameBox,function(e,r){return o("div",{key:r,staticClass:"row"},t._l(e,function(e,r){return o("div",{key:r,staticClass:"col animated",class:"n-"+e},[t._v(t._s(e))])}))}))],1)},u=[],l=(o("6c7b"),o("1c4c"),o("2f62"));r["default"].use(l["a"]);var f=new l["a"].Store({state:{score:0,bestScore:0,gameBox:[]},mutations:{initScore:function(t){t.score=0},updateScore:function(t,e){t.score=e},updateBestScore:function(t,e){t.bestScore=e},setGameBox:function(t,e){t.gameBox=e}},actions:{}}),p=o("ca95");s["c"].use(p,{name:"v-touch"});var m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.size=4,e.over=!0,e.emptyBox=[],e.direction=[{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}],e.firstLine=[],e}return i["b"](e,t),e.prototype.newGame=function(){f.commit("initScore"),this.over=!1,this.getLocalstorage(),this.setLocalstorage(),this.updateScore(),document.addEventListener("keyup",this.keyDown)},e.prototype.keyDown=function(t){switch(t.keyCode){case 38:this.move(1);break;case 40:this.move(3);break;case 37:this.move(0);break;case 39:this.move(2);break}this.setRandom(),this.updateScore()},e.prototype.touchSwipe=function(t){switch(t){case"up":this.move(1);break;case"down":this.move(3);break;case"left":this.move(0);break;case"right":this.move(2);break}this.setRandom(),this.updateScore()},e.prototype.setRandom=function(){if(this.getEmptyBox().length>0){var t=this.getRandomBox(),e=t[0],o=t[1];this.$store.state.gameBox[e][o]=this.getRandomNumber()}},e.prototype.getEmptyBox=function(){this.emptyBox=[];for(var t=0;t<this.size;t++)for(var e=0;e<this.size;e++)this.$store.state.gameBox[t][e]||this.emptyBox.push([t,e]);return this.emptyBox},e.prototype.getRandomBox=function(){if(this.emptyBox.length)return this.emptyBox[Math.floor(Math.random()*this.emptyBox.length)]},e.prototype.getRandomNumber=function(){return Math.random()<.9?2:4},e.prototype.move=function(t){var e=this,o=this.rotate(this.$store.state.gameBox,t).map(function(t){return e.moveLeft(t)});f.commit("setGameBox",this.rotate(o,this.size-t)),localStorage.setItem("gameBox",JSON.stringify(this.rotate(o,this.size-t))),this.setLocalstorage(),0===this.getEmptyBox().length&&(this.over=!0,alert("game over!!"),this.restartGame())},e.prototype.rotate=function(t,e){var o=this;if(e%=4,0===e)return t;for(var r=Array.from(Array(this.size)).map(function(){return Array(o.size).fill(void 0)}),n=0;n<this.size;n++)for(var a=0;a<this.size;a++)r[this.size-1-n][a]=t[a][n];return e>1&&(r=this.rotate(r,e-1)),r},e.prototype.moveLeft=function(t){for(var e=this,o=[],r=0;r<this.size;r++)t[r]&&o.push({x:r,merged:!1,value:t[r]});return o.forEach(function(r){var n=e.farthestPosition(t,r.x),a=t[n-1];if(a&&a===r.value&&!o[n-1].merged){t[n-1]=2*a,t[r.x]=void 0,r={x:n-1,merged:!0,value:2*a};var i=2*a;f.commit("updateScore",i)}else n!=r.x&&(t[n]=r.value,t[r.x]=void 0,r.x=n)}),t},e.prototype.farthestPosition=function(t,e){var o=e;while(o>0&&!t[o-1])o-=1;return o},e.prototype.setLocalstorage=function(){var t=localStorage.getItem("bestScore"),e=this.$store.state.score;t?e>+t?(localStorage.setItem("bestScore",""+e),f.commit("updateBestScore",e)):f.commit("updateBestScore",t):(localStorage.setItem("bestScore",""+e),f.commit("updateBestScore",e))},e.prototype.getLocalstorage=function(){var t=this,e=localStorage.getItem("gameBox");e?f.commit("setGameBox",JSON.parse(e)):(e=Array.from(Array(this.size)).map(function(){return Array(t.size).fill(void 0)}),f.commit("setGameBox",e))},e.prototype.updateScore=function(){for(var t=0,e=0;e<this.size;e++)for(var o=0;o<this.size;o++)this.$store.state.gameBox[e][o]&&(t+=this.$store.state.gameBox[e][o]);f.commit("updateScore",t)},e.prototype.restartGame=function(){var t=Array.from(Array(4)).map(function(){return Array(4).fill(void 0)}),e=Math.floor(4*Math.random()),o=Math.floor(4*Math.random());this.$store.state.gameBox[e][o]=Math.random()<.9?2:4,f.commit("setGameBox",t),f.commit("initScore"),localStorage.setItem("gameBox",JSON.stringify(t))},e.prototype.mounted=function(){this.newGame()},i["a"]([Object(s["b"])()],e.prototype,"newGame",null),e=i["a"]([s["a"]],e),e}(s["c"]),h=m,v=h,d=(o("68a8"),o("2877")),y=Object(d["a"])(v,c,u,!1,null,"2cf873de",null);y.options.__file="Game.vue";var b=y.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"topbar"},[t._v("\n    2048\n")])},x=[],S=(o("e5fc"),{}),_=Object(d["a"])(S,g,x,!1,null,"786789e2",null);_.options.__file="Topbar.vue";var w=_.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"scoreBox"},[o("div",{staticClass:"score"},[o("div",{staticClass:"title"},[t._v("Score")]),t._v("\n        "+t._s(this.$store.state.score)+"\n    ")]),o("div",{staticClass:"score bestScore"},[o("div",{staticClass:"title"},[t._v("BestScore")]),t._v("\n        "+t._s(this.$store.state.bestScore)+"\n    ")])])},O=[],G=(o("5224"),{}),$=Object(d["a"])(G,B,O,!1,null,"442be778",null);$.options.__file="Score.vue";var k=$.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"author"},[t._v("\n    Made from\n    "),o("a",{attrs:{href:"http://brownhu.site/"}},[t._v("BrownHu")])])}],z=(o("4800"),{}),C=Object(d["a"])(z,M,j,!1,null,"79cc1f42",null);C.options.__file="Footer.vue";var A=C.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"buttonbox"},[o("div",{staticClass:"button",on:{click:t.newGame}},[t._v("New Game")])])},N=[],L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["b"](e,t),e.prototype.newGame=function(){var t=Array.from(Array(4)).map(function(){return Array(4).fill(void 0)}),e=Math.floor(4*Math.random()),o=Math.floor(4*Math.random());this.$store.state.gameBox[e][o]=Math.random()<.9?2:4,f.commit("setGameBox",t),f.commit("initScore"),localStorage.setItem("gameBox",JSON.stringify(t))},i["a"]([Object(s["b"])()],e.prototype,"newGame",null),e=i["a"]([s["a"]],e),e}(s["c"]),P=L,I=P,R=(o("9ebe"),Object(d["a"])(I,E,N,!1,null,"589d31ab",null));R.options.__file="NewGame.vue";var J=R.exports,T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["b"](e,t),e=i["a"]([Object(s["a"])({components:{Game:b,Score:k,Topbar:w,Footer:A,NewGame:J}})],e),e}(s["c"]),F=T,D=F,H=(o("7c55"),Object(d["a"])(D,n,a,!1,null,null,null));H.options.__file="App.vue";var q=H.exports,K=o("ca95");r["default"].use(K,{name:"v-touch"}),r["default"].config.productionTip=!1,new r["default"]({store:f,render:function(t){return t(q)}}).$mount("#app")},d3dd:function(t,e,o){},e5eb:function(t,e,o){},e5fc:function(t,e,o){"use strict";var r=o("1cbd"),n=o.n(r);n.a}});
//# sourceMappingURL=app.cbb31376.js.map