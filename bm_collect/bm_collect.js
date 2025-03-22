import { get_navbar } from "/utils.js"
import '/style.css'

document.querySelector('#app').innerHTML = `
${get_navbar("bm_collect")}
<div class="card">
    <h1>Collection of Bookmarklets</h1>
    <div id="bms"></div>
</div>
`

const bms = document.getElementById("bms");

function add_bookmark(name, href) {
    let bmElem = document.createElement("a");
    bmElem.setAttribute("href", href);
    bmElem.classList.add("bookmarklet");
    bmElem.innerHTML = name;
    bms.appendChild(bmElem);
}

const ls = localStorage.getItem("bookmarks");
if (ls) {
    let json = JSON.parse(ls);
    for (let i = 0; i < json.length; i++){
        let obj = json[i];
        add_bookmark(obj["name"], obj["href"]);
    }
}
"javascript:(function(){alert(%22Test!%22);})();"