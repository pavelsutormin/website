import {get_navbar} from "/Users/pavelsutormin/WebstormProjects/website/utils.js"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import '/style.css'

document.querySelector('#app').innerHTML = `
${get_navbar("counter")}
<div>
    <h1>This is a counter!</h1>
    <h3>Everybody on this page can click it and they will all see 1 added.</h3>
    <div class="card">
        <p class="count-area" id="count-area">count is -</p>
        <br>
        <button id="counter-p">Add 1</button>
        <button id="counter-m">Subtract 1</button>
    </div>
</div>
`

const firebaseConfig = {
    authDomain: "pasha-website.firebaseapp.com",
    databaseURL: "https://pasha-website-default-rtdb.firebaseio.com",
    projectId: "pasha-website",
    storageBucket: "pasha-website.firebasestorage.app",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

const countArea = document.querySelector('#count-area');
const counterP = document.querySelector('#counter-p');
const counterM = document.querySelector('#counter-m');
let count = 0

const setCounter = (new_count) => {
    count = new_count;
    countArea.innerHTML = `count is ${count}`;

    set(dbRef, {
        count: count
    }).then(r => console.log(r));
};
counterP.addEventListener('click', () => setCounter(count + 1))
counterM.addEventListener('click', () => setCounter(count - 1))

onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        setCounter(data["count"])
        console.log("Data changed:", data);

    } else {
        console.log("No data available");
    }
}, (error) => {
    console.error("Error fetching data:", error);
});
