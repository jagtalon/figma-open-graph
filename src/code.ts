/* 
  This code is specific to Figma.
  It doesn't have any access to browser APIs, but it does
  have access to the Figma document itself and Figma APIs.
*/

figma.showUI(__html__);
figma.ui.resize(450, 110);

figma.ui.onmessage = async (message) => {
  console.log(message);
}