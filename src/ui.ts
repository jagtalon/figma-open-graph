import './ui.css'

window.onmessage = async (event) => {
    if (event.data.pluginMessage.type === 'networkRequest') {
      var request = new XMLHttpRequest()
      // This link has random lorem ipsum text
      request.open('GET', 'http://localhost:8080/spotify.com')
      request.responseType = 'text'
      request.onload = () => {
        window.parent.postMessage({pluginMessage: request.response}, '*')
      };
      request.send()
    }
  }