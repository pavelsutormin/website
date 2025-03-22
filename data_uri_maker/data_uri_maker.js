import { get_navbar } from "/utils.js"
import '/style.css'

document.querySelector('#app').innerHTML = `
${get_navbar("data_uri_maker")}
<div class="card">
    <label for="data-in">HTML: </label>
    <br>
    <textarea id="data-in" style="width: 400px; height: 200px;"></textarea>
    <br><br>
    <label for="name-in">Bookmarklet name: </label>
    <input id="name-in" type="text">
    <br><br>
    <button id="make">Make bookmark!</button>
    <br><br>
    <label for="out">Drag this to your bookmarks:</label>
    <br>
    <a id="out" class="bookmarklet" href=""></a>
</div>
`

let name = "";
let html = "";

const createDataUri = () => {
    html = document.getElementById("data-in").value;
    name = document.getElementById("name-in").value;
    const uri = `data:text/html;base64,${btoa(html)}`;
    document.getElementById("out").href = uri;
    document.getElementById("out").innerHTML = name;
    let newJson = JSON.parse(localStorage.getItem("bookmarks"));
    newJson.push({name, uri});
    localStorage.setItem("bookmarks", JSON.stringify(newJson));
}

document.getElementById("make").addEventListener("click", createDataUri);
