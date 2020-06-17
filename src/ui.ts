/*
    This code will live in the <iframe> within Figma.
    It has access to all the browser APIs.
*/

import './libs/figma-ds/figma-plugin-ds.css'
import './libs/figma-ds/figma-plugin-ds.js'
import './ui.css'

const pluginServer = 'http://localhost:8080/';

// Example buttons
// These provide example URLs that the user can use to try out the plugin.
let crawlUrl: HTMLInputElement = document.querySelector('.url input');
let exampleTags = document.querySelectorAll('.examples span').forEach((example: HTMLSpanElement) => {
    example.addEventListener('click', (event: MouseEvent) => {
        console.log(example.dataset.url);
        crawlUrl.value = example.dataset.url;
        crawlUrl.focus();
    });
});

// Submit button
// Once this is clicked, the plugin sends the URL to the server and waits for
// a response back.
let submitButton: HTMLButtonElement = document.querySelector('.url button');
submitButton.addEventListener('click', () => {
    var request = new XMLHttpRequest()

    if(crawlUrl.value.length > 0) {
        request.open('GET', pluginServer + crawlUrl.value);
        request.responseType = 'json';
        request.onload = () => {
            renderElements(request.response);
        };
        request.send()
    }
})

// Display the data that we got.
function renderElements(response) {
    console.log(response);
}

function resultElementHTML() {

}

