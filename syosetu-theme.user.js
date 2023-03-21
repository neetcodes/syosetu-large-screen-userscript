// ==UserScript==
// @name         syosetu theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       neetcodes
// @homepage     https://github.com/neetcodes/syosetu-large-screen-userscript
// @match        https://ncode.syosetu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=syosetu.com
// @grant        none
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

// optional, set the font
GM_addStyle("#novel_color { font-family: IPAPMincho;}");

GM_addStyle("#novel_color { width: 100%; font-size: 2em; }");
GM_addStyle("#novel_honbun { width: 80%; }");
GM_addStyle("#novel_header, #novelnavi_right, #menu_on, #menu_off { position: absolute !important; }");



