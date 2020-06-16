/*
    This code will live in the <iframe> within Figma.
    It has access to all the browser APIs.
*/

import './libs/figma-ds/figma-plugin-ds.css'
import './libs/figma-ds/figma-plugin-ds.js'
import './ui.css'

window.onmessage = async (event) => {
    if (event.data.pluginMessage.type === 'networkRequest') {
        var request = new XMLHttpRequest()

        request.open('GET', 'http://localhost:8080/spotify.com')
        request.responseType = 'text'
        request.onload = () => {
        window.parent.postMessage({pluginMessage: request.response}, '*')
        };
        request.send()
    }
}