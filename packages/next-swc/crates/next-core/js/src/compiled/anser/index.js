(()=>{"use strict";var e={281:e=>{var r=function(){function defineProperties(e,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(e,r,s){if(r)defineProperties(e.prototype,r);if(s)defineProperties(e,s);return e}}();function _classCallCheck(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}var s=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]];var n=function(){r(Anser,null,[{key:"escapeForHtml",value:function escapeForHtml(e){return(new Anser).escapeForHtml(e)}},{key:"linkify",value:function linkify(e){return(new Anser).linkify(e)}},{key:"ansiToHtml",value:function ansiToHtml(e,r){return(new Anser).ansiToHtml(e,r)}},{key:"ansiToJson",value:function ansiToJson(e,r){return(new Anser).ansiToJson(e,r)}},{key:"ansiToText",value:function ansiToText(e){return(new Anser).ansiToText(e)}}]);function Anser(){_classCallCheck(this,Anser);this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null;this.bright=0;this.decorations=[]}r(Anser,[{key:"setupPalette",value:function setupPalette(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e){for(var r=0;r<8;++r){this.PALETTE_COLORS.push(s[e][r].color)}}var n=[0,95,135,175,215,255];var o=function format(e,r,s){return n[e]+", "+n[r]+", "+n[s]};var i=void 0,t=void 0,a=void 0;for(var l=0;l<6;++l){for(var c=0;c<6;++c){for(var u=0;u<6;++u){this.PALETTE_COLORS.push(o(l,c,u))}}}var f=8;for(var h=0;h<24;++h,f+=10){this.PALETTE_COLORS.push(o(f,f,f))}}},{key:"escapeForHtml",value:function escapeForHtml(e){return e.replace(/[&<>\"]/gm,(function(e){return e=="&"?"&amp;":e=='"'?"&quot;":e=="<"?"&lt;":e==">"?"&gt;":""}))}},{key:"linkify",value:function linkify(e){return e.replace(/(https?:\/\/[^\s]+)/gm,(function(e){return'<a href="'+e+'">'+e+"</a>"}))}},{key:"ansiToHtml",value:function ansiToHtml(e,r){return this.process(e,r,true)}},{key:"ansiToJson",value:function ansiToJson(e,r){r=r||{};r.json=true;r.clearLine=false;return this.process(e,r,true)}},{key:"ansiToText",value:function ansiToText(e){return this.process(e,{},false)}},{key:"process",value:function process(e,r,s){var n=this;var o=this;var i=e.split(/\033\[/);var t=i.shift();if(r===undefined||r===null){r={}}r.clearLine=/\r/.test(e);var a=i.map((function(e){return n.processChunk(e,r,s)}));if(r&&r.json){var l=o.processChunkJson("");l.content=t;l.clearLine=r.clearLine;a.unshift(l);if(r.remove_empty){a=a.filter((function(e){return!e.isEmpty()}))}return a}else{a.unshift(t)}return a.join("")}},{key:"processChunkJson",value:function processChunkJson(e,r,n){r=typeof r=="undefined"?{}:r;var o=r.use_classes=typeof r.use_classes!="undefined"&&r.use_classes;var i=r.key=o?"class":"color";var t={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,isInverted:false,clearLine:r.clearLine,decoration:null,decorations:[],was_processed:false,isEmpty:function isEmpty(){return!t.content}};var a=e.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);if(!a)return t;var l=t.content=a[4];var c=a[2].split(";");if(a[1]!==""||a[3]!=="m"){return t}if(!n){return t}var u=this;while(c.length>0){var f=c.shift();var h=parseInt(f);if(isNaN(h)||h===0){u.fg=u.bg=null;u.decorations=[]}else if(h===1){u.decorations.push("bold")}else if(h===2){u.decorations.push("dim")}else if(h===3){u.decorations.push("italic")}else if(h===4){u.decorations.push("underline")}else if(h===5){u.decorations.push("blink")}else if(h===7){u.decorations.push("reverse")}else if(h===8){u.decorations.push("hidden")}else if(h===9){u.decorations.push("strikethrough")}else if(h===21){u.removeDecoration("bold")}else if(h===22){u.removeDecoration("bold");u.removeDecoration("dim")}else if(h===23){u.removeDecoration("italic")}else if(h===24){u.removeDecoration("underline")}else if(h===25){u.removeDecoration("blink")}else if(h===27){u.removeDecoration("reverse")}else if(h===28){u.removeDecoration("hidden")}else if(h===29){u.removeDecoration("strikethrough")}else if(h===39){u.fg=null}else if(h===49){u.bg=null}else if(h>=30&&h<38){u.fg=s[0][h%10][i]}else if(h>=90&&h<98){u.fg=s[1][h%10][i]}else if(h>=40&&h<48){u.bg=s[0][h%10][i]}else if(h>=100&&h<108){u.bg=s[1][h%10][i]}else if(h===38||h===48){var v=h===38;if(c.length>=1){var g=c.shift();if(g==="5"&&c.length>=1){var p=parseInt(c.shift());if(p>=0&&p<=255){if(!o){if(!this.PALETTE_COLORS){u.setupPalette()}if(v){u.fg=this.PALETTE_COLORS[p]}else{u.bg=this.PALETTE_COLORS[p]}}else{var d=p>=16?"ansi-palette-"+p:s[p>7?1:0][p%8]["class"];if(v){u.fg=d}else{u.bg=d}}}}else if(g==="2"&&c.length>=3){var b=parseInt(c.shift());var _=parseInt(c.shift());var m=parseInt(c.shift());if(b>=0&&b<=255&&_>=0&&_<=255&&m>=0&&m<=255){var k=b+", "+_+", "+m;if(!o){if(v){u.fg=k}else{u.bg=k}}else{if(v){u.fg="ansi-truecolor";u.fg_truecolor=k}else{u.bg="ansi-truecolor";u.bg_truecolor=k}}}}}}}if(u.fg===null&&u.bg===null&&u.decorations.length===0){return t}else{var y=[];var T=[];var w={};t.fg=u.fg;t.bg=u.bg;t.fg_truecolor=u.fg_truecolor;t.bg_truecolor=u.bg_truecolor;t.decorations=u.decorations;t.decoration=u.decorations.slice(-1).pop()||null;t.was_processed=true;return t}}},{key:"processChunk",value:function processChunk(e,r,n){var o=this;r=r||{};var i=this.processChunkJson(e,r,n);var t=r.use_classes;i.decorations=i.decorations.filter((function(e){if(e==="reverse"){if(!i.fg){i.fg=s[0][7][t?"class":"color"]}if(!i.bg){i.bg=s[0][0][t?"class":"color"]}var r=i.fg;i.fg=i.bg;i.bg=r;var n=i.fg_truecolor;i.fg_truecolor=i.bg_truecolor;i.bg_truecolor=n;i.isInverted=true;return false}return true}));if(r.json){return i}if(i.isEmpty()){return""}if(!i.was_processed){return i.content}var a=[];var l=[];var c=[];var u={};var f=function render_data(e){var r=[];var s=void 0;for(s in e){if(e.hasOwnProperty(s)){r.push("data-"+s+'="'+o.escapeForHtml(e[s])+'"')}}return r.length>0?" "+r.join(" "):""};if(i.isInverted){u["ansi-is-inverted"]="true"}if(i.fg){if(t){a.push(i.fg+"-fg");if(i.fg_truecolor!==null){u["ansi-truecolor-fg"]=i.fg_truecolor;i.fg_truecolor=null}}else{a.push("color:rgb("+i.fg+")")}}if(i.bg){if(t){a.push(i.bg+"-bg");if(i.bg_truecolor!==null){u["ansi-truecolor-bg"]=i.bg_truecolor;i.bg_truecolor=null}}else{a.push("background-color:rgb("+i.bg+")")}}i.decorations.forEach((function(e){if(t){l.push("ansi-"+e);return}if(e==="bold"){l.push("font-weight:bold")}else if(e==="dim"){l.push("opacity:0.5")}else if(e==="italic"){l.push("font-style:italic")}else if(e==="hidden"){l.push("visibility:hidden")}else if(e==="strikethrough"){c.push("line-through")}else{c.push(e)}}));if(c.length){l.push("text-decoration:"+c.join(" "))}if(t){return'<span class="'+a.concat(l).join(" ")+'"'+f(u)+">"+i.content+"</span>"}else{return'<span style="'+a.concat(l).join(";")+'"'+f(u)+">"+i.content+"</span>"}}},{key:"removeDecoration",value:function removeDecoration(e){var r=this.decorations.indexOf(e);if(r>=0){this.decorations.splice(r,1)}}}]);return Anser}();e.exports=n}};var r={};function __nccwpck_require__(s){var n=r[s];if(n!==undefined){return n.exports}var o=r[s]={exports:{}};var i=true;try{e[s](o,o.exports,__nccwpck_require__);i=false}finally{if(i)delete r[s]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var s=__nccwpck_require__(281);module.exports=s})();