const t={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e;function o(){let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=`${e}`}t.start.addEventListener("click",(function(){e=setInterval(o,1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.disabled=!1,t.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.a2966bf6.js.map