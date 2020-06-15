figma.showUI(__html__, { visible: false })
figma.ui.postMessage({ type: 'networkRequest' })

figma.ui.onmessage = async (msg) => {
  const text = figma.createText()
  // Make sure the new text node is visible where we're currently looking
  text.x = figma.viewport.center.x
  text.y = figma.viewport.center.y

  await figma.loadFontAsync(text.fontName as FontName)
  text.characters = msg

  figma.closePlugin()
}