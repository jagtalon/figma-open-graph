/*
    This code will live in the <iframe> within Figma.
    It has access to all the browser APIs.
*/

import './libs/figma-ds/figma-plugin-ds.css'
import './libs/figma-ds/figma-plugin-ds.js'
import './ui.css'

let serverUrl = 'http://localhost:8080/';
let crawlUrl: HTMLInputElement = document.querySelector('.url input');
let submitButton: HTMLButtonElement = document.querySelector('.url button');

// Add event handlers on each example tag.
let exampleTags = document.querySelectorAll('.examples span').forEach((example: HTMLSpanElement) => {
    example.addEventListener('click', (event: MouseEvent) => {
        console.log(example.dataset.url);
        crawlUrl.value = example.dataset.url;
    });
});

submitButton.addEventListener('click', () => {
    var request = new XMLHttpRequest()

    if(crawlUrl.value.length > 0) {
        request.open('GET', serverUrl + crawlUrl.value);
        request.responseType = 'text';
        request.onload = () => {
            window.parent.postMessage({pluginMessage: request.response}, '*')
        };
        request.send()
    }
})

