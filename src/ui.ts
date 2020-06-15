import './ui.css'

window.onmessage = async (event) => {
    if (event.data.pluginMessage.type === 'networkRequest') {
      var request = new XMLHttpRequest()
      // This link has random lorem ipsum text
      request.open('GET', 'https://figma-open-graph-scraper.glitch.me/spotify.com')
      request.responseType = 'text'
      request.onload = () => {
        window.parent.postMessage({pluginMessage: request.response}, '*')
      };
      request.send()
    }
  }