/* 
  This code is specific to Figma.
  It doesn't have any access to browser APIs, but it does
  have access to the Figma document itself and Figma APIs.
*/

figma.showUI(__html__);
figma.ui.resize(450, 110);

// These are the messages received from ui.ts
figma.ui.onmessage = async (message) => {
  if (message.type === 'resize') {
    figma.ui.resize(message.width, message.height);
  }

  if (message.type === 'import-image') {
    const bytes: Uint8Array = message.bytes;

    // See if we're selecting anyting at all.
    if (figma.currentPage.selection.length > 0) {
      console.log("We have things selected.")
      // See if any of them have fills.
      figma.currentPage.selection.map(selected => canInsertImage(selected, bytes))
    }
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

async function insertImage(paint, bytes) {
  console.log(paint);
  if (paint.type === 'IMAGE') {
    // Create a new paint for the new image.
    const newPaint = JSON.parse(JSON.stringify(paint));
    newPaint.imageHash = figma.createImage(bytes).hash;
    return newPaint;
  }
}