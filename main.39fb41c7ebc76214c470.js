(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,o){},QfWi:function(t,n,o){"use strict";o.r(n);o("L1EO");var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={body:document.querySelector("body"),start:document.querySelector('button[data-action="start"]'),stop:document.querySelector('button[data-action="stop"]')},r=null;function c(){var t,n,o=(t=0,n=e.length,Math.floor(Math.random()*(n-t+1)+t));a.body.style.backgroundColor=e[o]}a.start.addEventListener("click",(function(){a.start.disabled=!0,r=setInterval(c,1e3)})),a.stop.addEventListener("click",(function(){a.start.disabled=!1,clearInterval(r)}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.39fb41c7ebc76214c470.js.map