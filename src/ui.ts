/*
    This code will live in the <iframe> within Figma.
    It has access to all the browser APIs.
*/

import {html, render, TemplateResult} from '../node_modules/lit-html/lit-html.js';
import './libs/figma-ds/figma-plugin-ds.css'
import './libs/figma-ds/figma-plugin-ds.js'
import './ui.css'

const pluginServer = 'http://localhost:8080/';
let globalResponse = {};

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

    if (crawlUrl.value.length > 0) {
        request.open('GET', pluginServer + crawlUrl.value);
        request.responseType = 'json';
        request.onload = () => {
            window.parent.postMessage({pluginMessage: {type: 'resize', width: 450, height: 400}}, '*');
            globalResponse = request.response;
            renderElements(request.response, {
                showImage: true
            });
        };
        request.send()
    }
})


// Encode the ImageData into Uint8Array
async function encode(canvas, ctx, imageData) {
    ctx.putImageData(imageData, 0, 0)
    return await new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
        const reader = new FileReader()
        reader.onload = () => resolve(new Uint8Array(reader.result))
        reader.onerror = () => reject(new Error('Could not read from blob'))
        reader.readAsArrayBuffer(blob)
        })
    })
}

// Send the image to code.ts
async function sendImage() {
    let canvas = document.createElement('canvas');
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;

    let context = canvas.getContext("2d");
    context.drawImage(this, 0, 0);

    let imageData = context.getImageData(0, 0, this.naturalWidth, this.naturalHeight);
    let encodedImage = await encode(canvas, context, imageData);

    window.parent.postMessage({pluginMessage: {type: 'import-image', bytes: encodedImage}}, '*');
}

// Re-render the elements but don't show the image.
function noImage() {
    renderElements(globalResponse, {
        showImage: false
    })
}

// Define the templates for displaying the data.
const mainTemplate = (templates: Array<TemplateResult>) => html`${templates}`;
const textTemplate = (data: string) => html`<div class='text-data'>${data}</div>`;
const imageTemplate = (data: string) => 
    html`<div class='image-data'>
            <img src='${data}' @click="${sendImage}" crossorigin='' @error="${noImage}"></img>
         </div>`;

// Display the data that we got.
function renderElements(response, options) {
    let container = document.querySelector('.result');
    let dataTemplates: Array<TemplateResult> = [];

    if (response.ogImage && response.ogImage.url && options.showImage) {
        dataTemplates.push(imageTemplate(response.ogImage.url));
    }
    
    if (response.ogSiteName) {
        dataTemplates.push(textTemplate(response.ogSiteName));
    }

    if (response.ogTitle) {
        dataTemplates.push(textTemplate(response.ogTitle));
    }

    if (response.twitterSite) {
        dataTemplates.push(textTemplate(response.twitterSite));
    }

    if(response.twitterDescription) {
        dataTemplates.push(textTemplate(response.twitterDescription));
    }

    render(mainTemplate(dataTemplates), container);
}
