import '/style.css'

document.querySelector('#app').innerHTML = `
<div>
    <h1>This is a counter!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
</div>
`

const counter = document.querySelector('#counter');
let count = 0
const setCounter = (new_count) => {
    count = new_count
    counter.innerHTML = `count is ${count}`
}
counter.addEventListener('click', () => setCounter(count + 1))
setCounter(0)
