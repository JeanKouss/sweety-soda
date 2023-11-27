let sodaNameLayer = document.querySelector('#soda-name-layer');
let fruitPiecesLayer = document.querySelector('#fruit-pieces-layer');

function updateScrollPosition() {
    let sodaNameLayerHScrollRatio = sodaNameLayer.scrollLeft / sodaNameLayer.scrollWidth;
    // let fruitPiecesLayerVScrollRatio = fruitPiecesLayer.scrollTop / fruitPiecesLayer.scrollHeight
    // fruitPiecesLayer.scrollTop = sodaNameLayer.scrollLeft * sodaNameLayer.scrollWidth / fruitPiecesLayer.scrollHeight;
    fruitPiecesLayer.scroll(0, sodaNameLayerHScrollRatio * fruitPiecesLayer.scrollHeight);
    requestAnimationFrame(updateScrollPosition);
    // console.log('df');
}

requestAnimationFrame(updateScrollPosition);