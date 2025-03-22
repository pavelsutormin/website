import { get_navbar } from "/Users/pavelsutormin/WebstormProjects/website/utils.js"
import '/style.css'

document.querySelector('#app').innerHTML = `
${get_navbar("blank")}
`
