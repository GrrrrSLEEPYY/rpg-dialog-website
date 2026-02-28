// RPG Dialog System
class Dialog {
    constructor() {
        this.dialogs = {};
    }
    addDialog(id, lines) {
        this.dialogs[id] = lines;
    }
    getDialog(id) {
        return this.dialogs[id];
    }
}

class Character {
    constructor(name) {
        this.name = name;
    }
    speak(dialog) {
        console.log(`${this.name}: ${dialog}`);
    }
}

class RPGDialogSystem {
    constructor() {
        this.dialog = new Dialog();
    }
    startDialog(characterName, dialogId) {
        const character = new Character(characterName);
        const lines = this.dialog.getDialog(dialogId);
        if (lines) {
            lines.forEach(line => {
                character.speak(line);
            });
        } else {
            console.log("Dialog not found.");
        }
    }
}

// Usage Example
const rpgSystem = new RPGDialogSystem();

// Add dialogs
rpgSystem.dialog.addDialog('greeting', ["Hello, traveler!", "Welcome to our village."]);

// Start dialog
rpgSystem.startDialog('Eldrin', 'greeting');