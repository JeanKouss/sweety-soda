// Layers select
let sodaNameLayer = document.querySelector('#soda-name-layer');
let fruitPiecesLayer = document.querySelector('#fruit-pieces-layer');
let sodaBottleLayer = document.querySelector('#soda-bottle-layer');

// Buttons select
let previousSodaButtonContainer = document.getElementById('previous-soda-button-container');
let nextSodaButtonContainer = document.getElementById('next-soda-button-container');

// Vars
let sodaSideTree = {
    'apple-side' : {
        'previous' : 'apple-side',
        'next' : 'lemon-side',
    },
    'lemon-side' : {
        'previous' : 'apple-side',
        'next' : 'grappe-side',
    },
    'grappe-side' : {
        'previous' : 'lemon-side',
        'next' : 'cherry-side',
    },
    'cherry-side' : {
        'previous' : 'grappe-side',
        'next' : 'cherry-side',
    }
};
let currentSodaSide = 'apple-side';

// Functions
function updateScrollPosition() {
    let sodaNameLayerHScrollRatio = sodaNameLayer.scrollLeft / sodaNameLayer.scrollWidth;
    // let fruitPiecesLayerVScrollRatio = fruitPiecesLayer.scrollTop / fruitPiecesLayer.scrollHeight
    // fruitPiecesLayer.scrollTop = sodaNameLayer.scrollLeft * sodaNameLayer.scrollWidth / fruitPiecesLayer.scrollHeight;
    fruitPiecesLayer.scroll(0, sodaNameLayerHScrollRatio * fruitPiecesLayer.scrollHeight);
    requestAnimationFrame(updateScrollPosition);
    // console.log('df');
}

function updateSodaLayersSide(side) {
    sodaNameLayer.classList.remove('apple-side', 'lemon-side', 'grappe-side', 'cherry-side');
    fruitPiecesLayer.classList.remove('apple-side', 'lemon-side', 'grappe-side', 'cherry-side');
    sodaBottleLayer.classList.remove('apple-side', 'lemon-side', 'grappe-side', 'cherry-side');
    sodaNameLayer.classList.add(side);
    fruitPiecesLayer.classList.add(side);
    sodaBottleLayer.classList.add(side);
    currentSodaSide = side;
}

// requestAnimationFrame(updateScrollPosition);


function scrollToNextSoda() {
    sodaNameLayer.scrollBy({'top' : 0, 'left' : sodaNameLayer.scrollWidth/4, 'behavior' : 'smooth'})
}

function scrollToPreviousSoda() {
    sodaNameLayer.scrollBy({'top' : 0, 'left' : -sodaNameLayer.scrollWidth/4, 'behavior' : 'smooth'})
}

previousSodaButtonContainer.addEventListener('click', (e) => {
    // scrollToPreviousSoda();
    updateSodaLayersSide(sodaSideTree[currentSodaSide]['previous']);

});

nextSodaButtonContainer.addEventListener('click', (e) => {
    // scrollToNextSoda();
    updateSodaLayersSide(sodaSideTree[currentSodaSide]['next']);
});