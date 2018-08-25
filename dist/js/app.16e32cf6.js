(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],n[a]&&p.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={app:0},i=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var f=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"0ce0":function(t,e,o){"use strict";var r=o("bc4c"),n=o.n(r);n.a},3201:function(t,e,o){"use strict";var r=o("652d"),n=o.n(r);n.a},"652d":function(t,e,o){},"78ff":function(t,e,o){},"7c55":function(t,e,o){"use strict";var r=o("d3dd"),n=o.n(r);n.a},b888:function(t,e,o){},bc4c:function(t,e,o){},c80d:function(t,e,o){"use strict";var r=o("78ff"),n=o.n(r);n.a},cd49:function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Game"),o("Topbar"),o("Footer")],1)},i=[],a=o("9ab4"),s=o("60a3"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"game"},t._l(t.gameBox,function(e,r){return o("div",{key:r,staticClass:"row"},t._l(e,function(e,r){return o("div",{key:r,staticClass:"col animated",class:"n-"+e},[t._v(t._s(e))])}))}))},u=[],f=(o("6c7b"),o("1c4c"),o("2f62"));r["default"].use(f["a"]);var l=new f["a"].Store({state:{score:0,bestScore:0},mutations:{initGame:function(t){t.score=0},updateScore:function(t,e){t.score=e},updateBestScore:function(t,e){console.log("update"),t.bestScore=e}},actions:{}}),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.gameBox=[],e.score=0,e.bestScore=0,e.size=4,e.over=!0,e.emptyBox=[],e.direction=[{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}],e.firstLine=[],e}return a["b"](e,t),e.prototype.newGame=function(){var t=this;l.commit("initGame"),this.over=!1,this.gameBox=Array.from(Array(this.size)).map(function(){return Array(t.size).fill(void 0)}),this.setLocalstorage(),this.setRandom(),this.updateScore(),document.addEventListener("keyup",this.keyDown)},e.prototype.keyDown=function(t){switch(t.keyCode){case 38:this.move(1);break;case 40:this.move(3);break;case 37:this.move(0);break;case 39:this.move(2);break}this.setRandom(),this.updateScore()},e.prototype.setRandom=function(){if(this.getEmptyBox().length>0){var t=this.getRandomBox(),e=t[0],o=t[1];this.gameBox[e][o]=this.getRandomNumber()}},e.prototype.getEmptyBox=function(){this.emptyBox=[];for(var t=0;t<this.size;t++)for(var e=0;e<this.size;e++)this.gameBox[t][e]||this.emptyBox.push([t,e]);return this.emptyBox},e.prototype.getRandomBox=function(){if(this.emptyBox.length)return this.emptyBox[Math.floor(Math.random()*this.emptyBox.length)]},e.prototype.getRandomNumber=function(){return Math.random()<.9?2:4},e.prototype.move=function(t){var e=this,o=this.rotate(this.gameBox,t).map(function(t){return e.moveLeft(t)});this.gameBox=this.rotate(o,this.size-t),this.setLocalstorage(),0===this.getEmptyBox().length&&(this.over=!0,alert("game over!!"))},e.prototype.rotate=function(t,e){var o=this;if(e%=4,0===e)return t;for(var r=Array.from(Array(this.size)).map(function(){return Array(o.size).fill(void 0)}),n=0;n<this.size;n++)for(var i=0;i<this.size;i++)r[this.size-1-n][i]=t[i][n];return e>1&&(r=this.rotate(r,e-1)),r},e.prototype.moveLeft=function(t){for(var e=this,o=[],r=0;r<this.size;r++)t[r]&&o.push({x:r,merged:!1,value:t[r]});return o.forEach(function(r){var n=e.farthestPosition(t,r.x),i=t[n-1];if(i&&i===r.value&&!o[n-1].merged){t[n-1]=2*i,t[r.x]=void 0,r={x:n-1,merged:!0,value:2*i};var a=2*i;l.commit("updateScore",a)}else n!=r.x&&(t[n]=r.value,t[r.x]=void 0,r.x=n)}),t},e.prototype.farthestPosition=function(t,e){var o=e;while(o>0&&!t[o-1])o-=1;return o},e.prototype.setLocalstorage=function(){var t=localStorage.getItem("bestScore"),e=this.$store.state.score;t?e>+t?(localStorage.setItem("bestScore",""+e),l.commit("updateBestScore",e)):l.commit("updateBestScore",t):(localStorage.setItem("bestScore",""+e),l.commit("updateBestScore",e))},e.prototype.updateScore=function(){for(var t=0,e=0;e<this.size;e++)for(var o=0;o<this.size;o++)this.gameBox[e][o]&&(t+=this.gameBox[e][o]);l.commit("updateScore",t)},e.prototype.mounted=function(){this.newGame()},a["a"]([Object(s["b"])()],e.prototype,"newGame",null),e=a["a"]([s["a"]],e),e}(s["c"]),h=p,m=h,v=(o("0ce0"),o("2877")),d=Object(v["a"])(m,c,u,!1,null,"06484138",null);d.options.__file="Game.vue";var y=d.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"topbar"},[o("div",{staticClass:"gameName"},[t._v("\n        2048\n    ")])])}],x=(o("3201"),{}),_=Object(v["a"])(x,b,g,!1,null,"026c10ac",null);_.options.__file="Topbar.vue";var S=_.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"score"},[t._v("\n    "+t._s("分数："+this.$store.state.score)+"\n    "+t._s("最佳分数："+this.$store.state.bestScore)+"\n")])},w=[],O=(o("c80d"),{}),j=Object(v["a"])(O,B,w,!1,null,"2165e278",null);j.options.__file="Score.vue";var z=j.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"author"},[t._v("\n    Made from\n    "),o("a",{attrs:{href:"http://brownhu.site/"}},[t._v("BrownHu")])])}],$=(o("e547"),{}),C=Object(v["a"])($,k,E,!1,null,"a29e8d44",null);C.options.__file="Footer.vue";var G=C.exports,M=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a["b"](e,t),e=a["a"]([Object(s["a"])({components:{Game:y,Score:z,Topbar:S,Footer:G}})],e),e}(s["c"]),P=M,A=P,L=(o("7c55"),Object(v["a"])(A,n,i,!1,null,null,null));L.options.__file="App.vue";var R=L.exports;r["default"].config.productionTip=!1,new r["default"]({store:l,render:function(t){return t(R)}}).$mount("#app")},d3dd:function(t,e,o){},e547:function(t,e,o){"use strict";var r=o("b888"),n=o.n(r);n.a}});
//# sourceMappingURL=app.16e32cf6.js.map