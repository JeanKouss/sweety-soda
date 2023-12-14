// Layers select
let layersContainer = document.querySelector('#sodas-layers-container');
let sodaNameLayer = document.querySelector('#soda-name-layer');
let fruitPiecesLayer = document.querySelector('#fruit-pieces-layer');
let sodaBottleLayer = document.querySelector('#soda-bottle-layer');

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

// Listeners
previousSodaButtonContainer.addEventListener('click', (e) => {
    updateSodaLayersSide(sodaContextTree[currentSodaContext]['previous']);

});

nextSodaButtonContainer.addEventListener('click', (e) => {
    updateSodaLayersSide(sodaContextTree[currentSodaContext]['next']);
});