import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import '/style.css'

document.querySelector('#app').innerHTML = `
<div class="navbar">
    <a class="navbar-item" href="/">Home</a>
    <a class="navbar-item active" href="/counter/">Counter</a>
</div>
<div>
    <h1>This is a counter!</h1>
    <h3>Everybody on this page can click it and they will all see 1 added.</h3>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
</div>
`

const firebaseConfig = {
    apiKey: "AIzaSyDISkQ8lbrwGlpVrhRKkrce1V9ASil02-Q",
    authDomain: "pasha-website.firebaseapp.com",
    databaseURL: "https://pasha-website-default-rtdb.firebaseio.com",
    projectId: "pasha-website",
    storageBucket: "pasha-website.firebasestorage.app",
    messagingSenderId: "196521440659",
    appId: "1:196521440659:web:0ee764053e7080e6dce466",
    measurementId: "G-5LPWDB0P15"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

const counter = document.querySelector('#counter');
let count = 0
const setCounter = (new_count) => {
    count = new_count;
    counter.innerHTML = `count is ${count}`;

    set(dbRef, {
        count: count
    }).then(r => console.log(r));
};
counter.addEventListener('click', () => setCounter(count + 1))
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
