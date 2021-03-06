/*
    This code will live in the <iframe> within Figma.
    It has access to all the browser APIs.
*/

import {
  html,
  render,
  TemplateResult,
} from '../node_modules/lit-html/lit-html.js'
import './libs/figma-ds/figma-plugin-ds.css'
import './libs/figma-ds/figma-plugin-ds.js'
import './ui.css'

const pluginServer = 'https://figma-open-graph-server.jagtalon.workers.dev/'
let cachedResponse = {}

// Example buttons
// These provide example URLs that the user can use to try out the plugin.
let crawlUrl: HTMLInputElement = document.querySelector('.url input')
let exampleTags = document
  .querySelectorAll('.examples span')
  .forEach((example: HTMLSpanElement) => {
    example.addEventListener('click', (event: MouseEvent) => {
      crawlUrl.value = example.dataset.url
      crawlUrl.focus()
    })
  })

// Submit button
// Once this is clicked, the plugin sends the URL to the server and waits for
// a response back.
let submitButton: HTMLButtonElement = document.querySelector('.url button')
submitButton.addEventListener('click', () => {
  var request = new XMLHttpRequest()

  if (crawlUrl.value.length > 0) {
    request.open('GET', `${pluginServer}?url=${crawlUrl.value}`)
    request.responseType = 'json'
    request.onload = () => {
      window.parent.postMessage(
        {
          pluginMessage: {
            type: 'resize',
            width: 460,
            height: 400,
          },
        },
        '*',
      )
      cachedResponse = request.response
      renderElements(request.response, {
        showImage: true,
      })
    }
    request.send()
  }
})

// Encode the ImageData into Uint8Array
async function encode(canvas, context, imageData) {
  context.putImageData(imageData, 0, 0)
  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader()
      reader.onload = () =>
        resolve(new Uint8Array(reader.result as ArrayBuffer))
      reader.onerror = () => reject(new Error('Could not read from blob'))
      reader.readAsArrayBuffer(blob)
    })
  })
}

// Encode the image then send it to Figma.
async function sendImage() {
  let canvas = document.createElement('canvas')
  canvas.width = this.naturalWidth
  canvas.height = this.naturalHeight

  let context = canvas.getContext('2d')
  context.drawImage(this, 0, 0)

  let imageData = context.getImageData(
    0,
    0,
    this.naturalWidth,
    this.naturalHeight,
  )
  let encodedImage = await encode(canvas, context, imageData)

  window.parent.postMessage(
    {
      pluginMessage: {
        type: 'import-image',
        bytes: encodedImage,
        width: this.naturalWidth,
        height: this.naturalHeight,
      },
    },
    '*',
  )
}

// Re-render the elements without showing the images.
function noImage() {
  renderElements(cachedResponse, {
    showImage: false,
  })
}

// Define the templates for displaying the data.
const mainTemplate = (templates: Array<TemplateResult>) => html`${templates}`
const textTemplate = (data: string) =>
  html`<div class="text-data" @click="${copyContent}">${data}</div>`
const imageTemplate = (data: string) =>
  html`<div class='image-data'>
            <img src='${data}' @click="${sendImage}" crossorigin='' @error="${noImage}"></img>
         </div>`

// Display the data that we got.
async function renderElements(response, options) {
  let container = document.querySelector('.result')
  let dataTemplates: Array<TemplateResult> = []
  let result = response.result || {}

  if (result['og:site_name']) {
    dataTemplates.push(textTemplate(result['og:site_name']))
  }

  if (result['og:title']) {
    dataTemplates.push(textTemplate(result['og:title']))
  }

  if (result['twitter:site']) {
    dataTemplates.push(textTemplate(result['twitter:site']))
  }

  if (result['twitter:description']) {
    dataTemplates.push(textTemplate(result['twitter:description']))
  }

  let ogImage = result['og:image'] || result['twitter:image']
  if (ogImage && options.showImage) {
    try {
      let proxyImageResponse = await fetch(`${pluginServer}?url=${ogImage}`)

      if (proxyImageResponse.ok) {
        let proxyImage = await proxyImageResponse.json()
        dataTemplates.push(imageTemplate(proxyImage.result))
      }
    } catch (err) {
      dataTemplates.push(imageTemplate(ogImage))
      console.error(err)
    }
  }

  render(mainTemplate(dataTemplates), container)
}

// Select the text and copy it to the clipboard.
// Snippet is from https://stackoverflow.com/a/6150060
function copyContent() {
  let range: Range = document.createRange();
  range.selectNodeContents(this);
  
  let sel: Selection = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

  document.execCommand('copy');

  // Tell the plugin about it.
  parent.postMessage({pluginMessage: {type: 'notification', message: 'Copied Text'}}, '*');
}