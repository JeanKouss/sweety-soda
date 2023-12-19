// Layers select
let layersContainer = document.querySelector('#sodas-layers-container');

// Buttons select
let previousSodaButtonContainer = document.getElementById('previous-soda-button-container');
let nextSodaButtonContainer = document.getElementById('next-soda-button-container');

// Vars
let sodaContextTree = {
    'apple-context' : {
        'previous' : 'apple-context',
        'next' : 'lemon-context',
    },
    'lemon-context' : {
        'previous' : 'apple-context',
        'next' : 'grappe-context',
    },
    'grappe-context' : {
        'previous' : 'lemon-context',
        'next' : 'cherry-context',
    },
    'cherry-context' : {
        'previous' : 'grappe-context',
        'next' : 'cherry-context',
    }
};
let currentSodaContext = 'apple-context';

// Functions
function updateSodaLayersSide(context) {
    layersContainer.classList.remove('apple-context', 'lemon-context', 'grappe-context', 'cherry-context');
    layersContainer.classList.add(context);
    currentSodaContext = context;
}

function stopPressInteractionShowing() {
    previousSodaButtonContainer.querySelector('button').classList.remove('show_pressing_interaction');
    nextSodaButtonContainer.querySelector('button').classList.remove('show_pressing_interaction');
}

function placePreviousSodaButtonAt(touchX, touchY) {
    let button = previousSodaButtonContainer.querySelector('button');
    button.classList.remove('pressed');
    let buttonCoords = {
        x : touchX - previousSodaButtonContainer.getBoundingClientRect().left,
        y : touchY - previousSodaButtonContainer.getBoundingClientRect().top,
    };
    button.style.top = buttonCoords.y + 'px';
    button.style.left = buttonCoords.x + 'px';
    button.classList.add('pressed');
}

function placeNextSodaButtonAt(touchX, touchY) {
    let button = nextSodaButtonContainer.querySelector('button');
    button.classList.remove('pressed');
    let buttonCoords = {
        x : touchX - nextSodaButtonContainer.getBoundingClientRect().left,
        y : touchY - nextSodaButtonContainer.getBoundingClientRect().top,
    };
    button.style.top = buttonCoords.y + 'px';
    button.style.left = buttonCoords.x + 'px';
    button.classList.add('pressed');
}

// Listeners
previousSodaButtonContainer.addEventListener('click', (e) => {
    e.preventDefault();
    stopPressInteractionShowing();
    placePreviousSodaButtonAt(e.clientX, e.clientY);
    updateSodaLayersSide(sodaContextTree[currentSodaContext]['previous']);
});

nextSodaButtonContainer.addEventListener('click', (e) => {
    e.preventDefault();
    stopPressInteractionShowing();
    placeNextSodaButtonAt(e.clientX, e.clientY);
    updateSodaLayersSide(sodaContextTree[currentSodaContext]['next']);
});