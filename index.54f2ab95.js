var e,t,r=document.querySelector("tbody"),n=document.querySelector(".button"),o=document.querySelector(".message-start"),s=document.querySelector(".message-lose"),a=document.querySelector(".message-win"),c=document.querySelector(".game-score");function i(e){return JSON.parse(JSON.stringify(e))}function d(t){for(var r=0;r<4;r++)for(var n=0;n<4;n++)if(t[r][n]!==e[r][n])return!0;return!1}function l(e,t){for(var r=i(e),n=0;n<4;n++){var o=void 0;"up"===t||"down"===t?o=[r[0][n],r[1][n],r[2][n],r[3][n]]:("left"===t||"right"===t)&&(o=r[n]),"up"===t||"left"===t?o=u(o.reverse()).reverse():("down"===t||"right"===t)&&(o=u(o));for(var s=0;s<o.length;s++)"up"===t||"down"===t?r[s][n]=o[s]:("left"===t||"right"===t)&&(r[n][s]=o[s])}return r}function u(e){for(var r=f(e),n=r.length;n>0;n--)r[n]===r[n-1]&&(r[n]+=r[n],t+=r[n],r[n-1]=0);return f(r)}function f(e){for(var t=e.filter(function(e){return 0!==e}),r=t.length,n=r;n<e.length;n++)t.unshift(0);return t}function h(){for(;;){var t=Math.floor(4*Math.random()),n=Math.floor(4*Math.random());if(0===e[t][n]){e[t][n]=Math.random()>=.9?4:2;break}}!function(){for(var t=0;t<4;t++)for(var n=0;n<4;n++)r.rows[t].cells[n].className="",r.rows[t].cells[n].classList.add("field-cell"),r.rows[t].cells[n].classList.add("field-cell--".concat(e[t][n])),r.rows[t].cells[n].textContent=e[t][n]||""}()}n.addEventListener("click",function(){n.classList.contains("start")?(n.classList.remove("start"),n.classList.add("restart"),n.textContent="Restart",o.classList.add("hidden")):(s.classList.add("hidden"),a.classList.add("hidden")),e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],t=0,c.textContent=t,h(),h()}),document.addEventListener("keydown",function(r){var n=i(e);if(!d(l(n,"up"))&&!d(l(n,"down"))&&!d(l(n,"right"))&&!d(l(n,"left")))return s.classList.remove("hidden"),!1;switch(r.key){case"ArrowUp":e=i(l(e,"up"));break;case"ArrowDown":e=i(l(e,"down"));break;case"ArrowRight":e=i(l(e,"right"));break;case"ArrowLeft":e=i(l(e,"left"))}d(n)&&(h(),c.textContent="".concat(t)),function(){for(var t=0;t<4;t++)for(var r=0;r<4;r++)if(2048===e[t][r])return!0;return!1}()&&a.classList.remove("hidden")});
//# sourceMappingURL=index.54f2ab95.js.map