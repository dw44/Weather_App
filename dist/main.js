!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){const e=e=>{localStorage.clear(),localStorage.setItem("latitude",e.coords.latitude),localStorage.setItem("longitude",e.coords.longitude)},t=()=>{localStorage.clear(),localStorage.setItem("latitude",43.653),localStorage.setItem("longitude",79.383)};return{getLocation:()=>{console.log("Running from initialize.getLocation"),navigator.geolocation?navigator.geolocation.getCurrentPosition(e,t):console.log("No Location Data")},getCoords:e,setDefaultCoords:t}};var i=function(){const e=async e=>{let t=await fetch(e);if(200===t.status){return await t.json()}throw new Error(t.status)};return{getFromCoordinates:async(t,n)=>{const o=`http://api.openweathermap.org/data/2.5/weather?lat=${Number(t).toFixed(3)}&lon=${Number(n).toFixed(3)}&appid=46330e55c3e301b385d0d4571604500f`;try{return await e(o)}catch(e){console.log(e)}},getFromCityName:async t=>{const n=`http://api.openweathermap.org/data/2.5/weather?q=${t}&appid=46330e55c3e301b385d0d4571604500f`;try{return await e(n)}catch(e){console.log(e)}},loadJson:e}};var r=function(){const e=e=>e-273.15,t=e=>1.8*e+32;return{kelvinToCelsius:e,celsiusToFahrenheit:t,fahrenheitToCelsius:e=>5*(e-32)/9,kelvinToFahrenheit:n=>t(e(n))}};var l=function(){const e=(e,t)=>`${e}° ${t}`,t=(t,n)=>{1===n?(document.getElementById("current-temperature").innerText="Current Temperature: "+e(r().kelvinToCelsius(t.main.temp).toFixed(1),"C"),document.getElementById("feels-like").innerText="Feels Like: "+e(r().kelvinToCelsius(t.main.feels_like).toFixed(1),"C"),document.getElementById("daily-max").innerText="Maximum: "+e(r().kelvinToCelsius(t.main.feels_like).toFixed(1),"C"),document.getElementById("daily-min").innerText="Minimum: "+e(r().kelvinToCelsius(t.main.feels_like).toFixed(1),"C")):2===n&&(document.getElementById("current-temperature").innerText="Current Temperature: "+e(r().kelvinToFahrenheit(t.main.temp).toFixed(1),"F"),document.getElementById("feels-like").innerText="Feels Like: "+e(r().kelvinToFahrenheit(t.main.feels_like).toFixed(1),"F"),document.getElementById("daily-max").innerText="Maximum: "+e(r().kelvinToFahrenheit(t.main.feels_like).toFixed(1),"F"),document.getElementById("daily-min").innerText="Minimum: "+e(r().kelvinToFahrenheit(t.main.feels_like).toFixed(1),"F"))};return{printWithUnits:e,displayWeather:t,displayAll:(e,n)=>{document.getElementById("location").innerText=`${e.name}, ${e.sys.country}`,document.getElementById("humidity").innerText=`Humidity: ${e.main.humidity}%`,document.getElementById("wind-speed").innerText="Wind Speed: "+e.wind.speed,document.getElementById("description-text").innerText=e.weather[0].description,t(e,n)}}};window.onload=function(){o().getLocation(),i().getFromCoordinates(localStorage.latitude,localStorage.longitude).then(e=>{u={...e},l().displayAll(u,1)}).catch(e=>{console.log(e)})};let a=1,u={};document.getElementById("switchUnits").onclick=function(){1===a?(a=2,document.getElementById("switchUnits").innerText="C"):(a=1,document.getElementById("switchUnits").innerText="F");l().displayWeather(u,a)}}]);