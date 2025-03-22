import { get_navbar } from "/utils.js"
import '/style.css'

document.querySelector('#app').innerHTML = `
${get_navbar("blank")}
`
