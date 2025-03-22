import {get_navbar} from "/Users/pavelsutormin/WebstormProjects/website/utils.js"
import {LoremIpsum} from "lorem-ipsum";
import '/style.css'

document.querySelector('#app').innerHTML = `
${get_navbar("lorem")}
<p id="lorem"></p>
`

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

document.getElementById("lorem").innerHTML = lorem.generateParagraphs(20);