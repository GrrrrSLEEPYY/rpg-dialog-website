// Game State Object
const gameState = {
    currentSceneIndex: 0,
    isGameRunning: false,
    soundEnabled: true,
};

// Scenes Array with 21 Scenes
const scenes = [
    {
        title: 'Scene 1',
        description: 'Welcome to the RPG world!'
    },
    {
        title: 'Scene 2',
        description: 'You encounter a fierce monster!'
    },
    {
        title: 'Scene 3',
        description: 'You find a magical item!'
    },
    {
        title: 'Scene 4',
        description: 'You meet a wise sage.'
    },
    {
        title: 'Scene 5',
        description: 'You enter a dark cave. '
    },
    {
        title: 'Scene 6',
        description: 'You are chased by a dragon!'
    },
    {
        title: 'Scene 7',
        description: 'You discover a hidden village.'
    },
    {
        title: 'Scene 8',
        description: 'A storm approaches!'
    },
    {
        title: 'Scene 9',
        description: 'You approach the final boss!'
    },
    {
        title: 'Scene 10',
        description: 'You have won the battle!'
    },
    {
        title: 'Scene 11',
        description: 'You venture into the unknown.'
    },
    {
        title: 'Scene 12',
        description: 'Your journey begins anew.'
    },
    {
        title: 'Scene 13',
        description: 'You find an ancient relic.'
    },
    {
        title: 'Scene 14',
        description: 'You must choose your path.'
    },
    {
        title: 'Scene 15',
        description: 'Revisiting the past.'
    },
    {
        title: 'Scene 16',
        description: 'You gather allies for the fight.'
    },
    {
        title: 'Scene 17',
        description: 'A betrayal occurs.'
    },
    {
        title: 'Scene 18',
        description: 'You face the consequences of your actions.'
    },
    {
        title: 'Scene 19',
        description: 'You discover the truth.'
    },
    {
        title: 'Scene 20',
        description: 'Final preparations for battle begin.'
    },
    {
        title: 'Scene 21',
        description: 'The epic conclusion of your journey.'
    }
];

// Display Functions
function displayScene(sceneIndex) {
    const scene = scenes[sceneIndex];
    console.log(scene.title);
    console.log(scene.description);
}

// Sound Functions
function playSound(soundFile) {
    if (gameState.soundEnabled) {
        const audio = new Audio(soundFile);
        audio.play();
    }
}

// Menu Functions
function showMenu() {
    console.log('1: Start Game');
    console.log('2: Load Game');
    console.log('3: Settings');
    console.log('4: Exit');
}

// Settings Functions
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
}

// Example of Starting the Game
function startGame() {
    gameState.isGameRunning = true;
    displayScene(gameState.currentSceneIndex);
}
