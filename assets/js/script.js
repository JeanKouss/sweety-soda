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

function scrollToNextSoda() {
    sodaNameLayer.scrollBy({'top' : 0, 'left' : sodaNameLayer.scrollWidth/4, 'behavior' : 'smooth'})
}

function scrollToPreviousSoda() {
    sodaNameLayer.scrollBy({'top' : 0, 'left' : -sodaNameLayer.scrollWidth/4, 'behavior' : 'smooth'})
}

function onDocumentScroll(scrollEvent) {
    console.log(scrollEvent);
}

document.addEventListener('scroll', onDocumentScroll);