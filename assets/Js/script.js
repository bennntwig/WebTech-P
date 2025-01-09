function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}


const viewportWidth = getViewportWidth();
console.log(`Die Viewport-Breite beträgt: ${viewportWidth} Pixel.`);