/* 
  This code is specific to Figma.
  It doesn't have any access to browser APIs, but it does
  have access to the Figma document itself and Figma APIs.
*/

figma.showUI(__html__)
figma.ui.resize(460, 110)

// These are the messages received from ui.ts
figma.ui.onmessage = async (message) => {
  // Resize the window.
  if (message.type === 'resize') {
    figma.ui.resize(message.width, message.height)
  }

  // Import the external image to Figma.
  if (message.type === 'import-image') {
    const bytes: Uint8Array = message.bytes

    // See if we're selecting anyting at all.
    // If not, we put the image in ourselves.
    if (figma.currentPage.selection.length > 0) {
      // See if any of them have fills.
      figma.currentPage.selection.map((selected) =>
        canInsertImage(selected, bytes),
      )
    } else {
      // Create a rectangle with the dimensions of our image
      // Then we fill this rectangle with bytes from the image.
      const rectangle = figma.createRectangle()
      rectangle.x = figma.viewport.center.x
      rectangle.y = figma.viewport.center.y
      rectangle.resizeWithoutConstraints(message.width, message.height)

      canInsertImage(rectangle, bytes)
      figma.viewport.scrollAndZoomIntoView([rectangle])
    }
  }

  if (message.type === 'notification') {
    figma.notify(message.message, {timeout: 5});
  }
}

// Adapted from figma/plugin-samples
// https://github.com/figma/plugin-samples/blob/master/invert-image/code.ts
async function canInsertImage(selected, bytes) {
  // Look for fills on node types that have fills.
  // An alternative would be to do `if ('fills' in node) { ... }
  switch (selected.type) {
    case 'RECTANGLE':
    case 'ELLIPSE':
    case 'POLYGON':
    case 'STAR':
    case 'VECTOR':
    case 'TEXT': {
      // Create a new array of fills, because we can't directly modify the old one
      const newFills = []
      for (const paint of selected.fills) {
        newFills.push(await insertImage(paint, bytes))
      }
      selected.fills = newFills
      break
    }

    default: {
      // not supported, silently do nothing
    }
  }
}

// Insert the image into a shape.
async function insertImage(paint, bytes) {
  if (paint.type === 'IMAGE' || paint.type === 'SOLID') {
    // Create a new paint for the new image.
    const newPaint = JSON.parse(JSON.stringify(paint))
    newPaint.imageHash = figma.createImage(bytes).hash

    // Convert a SOLID into an IMAGE
    if (newPaint.type === 'SOLID') {
      delete newPaint.color
      newPaint.type = 'IMAGE'
      newPaint.scaleMode = 'FILL'
    }

    return newPaint
  }
}
