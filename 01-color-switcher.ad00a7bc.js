!function(){var t,e={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.body.style.backgroundColor="".concat(t)}e.start.addEventListener("click",(function(){t=setInterval(o,1e3),e.start.disabled=!0,e.stop.disabled=!1})),e.stop.addEventListener("click",(function(){clearInterval(t),e.start.disabled=!1,e.stop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.ad00a7bc.js.map