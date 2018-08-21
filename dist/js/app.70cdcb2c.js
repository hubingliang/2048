(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],p=0,l=[];p<s.length;p++)a=s[p],n[a]&&l.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={app:0},i=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var f=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"472d":function(t,e,o){"use strict";var r=o("fba1"),n=o.n(r);n.a},"78ff":function(t,e,o){},"7c55":function(t,e,o){"use strict";var r=o("d3dd"),n=o.n(r);n.a},"8a0e":function(t,e,o){"use strict";var r=o("e4d4"),n=o.n(r);n.a},c80d:function(t,e,o){"use strict";var r=o("78ff"),n=o.n(r);n.a},cd49:function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Game"),o("Score"),o("Topbar")],1)},i=[],a=o("9ab4"),s=o("60a3"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"game"},t._l(t.gameBox,function(e,r){return o("div",{key:r,staticClass:"row"},t._l(e,function(e,r){return o("div",{key:r,staticClass:"col animated",class:"n-"+e},[t._v(t._s(e))])}))}))},u=[],f=(o("6c7b"),o("1c4c"),o("2f62"));r["default"].use(f["a"]);var p=new f["a"].Store({state:{score:0,bestScore:0},mutations:{initGame:function(t){t.score=0},updateScore:function(t,e){t.score=e},updateBestScore:function(t,e){console.log("update"),t.bestScore=e}},actions:{}}),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.gameBox=[],e.score=0,e.bestScore=0,e.size=4,e.over=!0,e.emptyBox=[],e.direction=[{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}],e.firstLine=[],e}return a["b"](e,t),e.prototype.newGame=function(){var t=this;p.commit("initGame"),this.over=!1,this.gameBox=Array.from(Array(this.size)).map(function(){return Array(t.size).fill(void 0)}),this.setLocalstorage(),document.addEventListener("keyup",this.keyDown)},e.prototype.keyDown=function(t){switch(t.keyCode){case 38:this.move(1);break;case 40:this.move(3);break;case 37:this.move(0);break;case 39:this.move(2);break}this.setRandom(),this.updateScore()},e.prototype.setRandom=function(){if(this.getEmptyBox().length>0){var t=this.getRandomBox(),e=t[0],o=t[1];this.gameBox[e][o]=this.getRandomNumber()}},e.prototype.getEmptyBox=function(){this.emptyBox=[];for(var t=0;t<this.size;t++)for(var e=0;e<this.size;e++)this.gameBox[t][e]||this.emptyBox.push([t,e]);return this.emptyBox},e.prototype.getRandomBox=function(){if(this.emptyBox.length)return this.emptyBox[Math.floor(Math.random()*this.emptyBox.length)]},e.prototype.getRandomNumber=function(){return Math.random()<.9?2:4},e.prototype.move=function(t){var e=this,o=this.rotate(this.gameBox,t).map(function(t){return e.moveLeft(t)});this.gameBox=this.rotate(o,this.size-t),this.setLocalstorage(),0===this.getEmptyBox().length&&(this.over=!0,alert("game over!!"))},e.prototype.rotate=function(t,e){var o=this;if(e%=4,0===e)return t;for(var r=Array.from(Array(this.size)).map(function(){return Array(o.size).fill(void 0)}),n=0;n<this.size;n++)for(var i=0;i<this.size;i++)r[this.size-1-n][i]=t[i][n];return e>1&&(r=this.rotate(r,e-1)),r},e.prototype.moveLeft=function(t){for(var e=this,o=[],r=0;r<this.size;r++)t[r]&&o.push({x:r,merged:!1,value:t[r]});return o.forEach(function(r){var n=e.farthestPosition(t,r.x),i=t[n-1];if(i&&i===r.value&&!o[n-1].merged){t[n-1]=2*i,t[r.x]=void 0,r={x:n-1,merged:!0,value:2*i};var a=2*i;p.commit("updateScore",a)}else n!=r.x&&(t[n]=r.value,t[r.x]=void 0,r.x=n)}),t},e.prototype.farthestPosition=function(t,e){var o=e;while(o>0&&!t[o-1])o-=1;return o},e.prototype.setLocalstorage=function(){var t=localStorage.getItem("bestScore"),e=this.$store.state.score;t?e>+t?(localStorage.setItem("bestScore",""+e),p.commit("updateBestScore",e)):p.commit("updateBestScore",t):(localStorage.setItem("bestScore",""+e),p.commit("updateBestScore",e))},e.prototype.updateScore=function(){for(var t=0,e=0;e<this.size;e++)for(var o=0;o<this.size;o++)this.gameBox[e][o]&&(t+=this.gameBox[e][o]);p.commit("updateScore",t)},e.prototype.mounted=function(){this.newGame()},a["a"]([Object(s["b"])()],e.prototype,"newGame",null),e=a["a"]([s["a"]],e),e}(s["c"]),h=l,m=h,d=(o("472d"),o("2877")),v=Object(d["a"])(m,c,u,!1,null,"21ce7c9a",null);v.options.__file="Game.vue";var y=v.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"topbar"},[t._v("2048")])},g=[],x=(o("8a0e"),{}),_=Object(d["a"])(x,b,g,!1,null,"e580b1a8",null);_.options.__file="Topbar.vue";var S=_.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"score"},[t._v("\n    "+t._s("分数："+this.$store.state.score)+"\n    "+t._s("最佳分数："+this.$store.state.bestScore)+"\n")])},w=[],O=(o("c80d"),{}),j=Object(d["a"])(O,B,w,!1,null,"2165e278",null);j.options.__file="Score.vue";var z=j.exports,k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a["b"](e,t),e=a["a"]([Object(s["a"])({components:{Game:y,Score:z,Topbar:S}})],e),e}(s["c"]),E=k,G=E,P=(o("7c55"),Object(d["a"])(G,n,i,!1,null,null,null));P.options.__file="App.vue";var $=P.exports;r["default"].config.productionTip=!1,new r["default"]({store:p,render:function(t){return t($)}}).$mount("#app")},d3dd:function(t,e,o){},e4d4:function(t,e,o){},fba1:function(t,e,o){}});
//# sourceMappingURL=app.70cdcb2c.js.map