import { get_navbar } from "/Users/pavelsutormin/WebstormProjects/website/utils.js"
import '/style.css'

document.querySelector('#app').innerHTML = `
${get_navbar("bml_maker")}
<div class="card">
    <label for="bml-js-in">Bookmarklet javascript: </label>
    <br>
    <textarea id="bml-js-in" style="width: 400px; height: 200px;"></textarea>
    <br><br>
    <label for="bml-name-in">Bookmarklet name: </label><input id="bml-name-in" type="text">
    <br><br>
    <button id="bml-make">Make bookmarklet!</button>
    <br><br>
    <label for="bml-out">Drag this to your bookmarks: </label>
    <br>
    <a id="bml-out" class="bookmarklet" href=""></a>
</div>
`

let name = "";
let js = "";

const createBookmarklet = () => {
    js = document.getElementById("bml-js-in").value;
    name = document.getElementById("bml-name-in").value;
    document.getElementById("bml-out").href = `javascript:(function(){${encodeURI(js)}})();`;
    document.getElementById("bml-out").innerHTML = name;
}

document.getElementById("bml-make").addEventListener("click", createBookmarklet);