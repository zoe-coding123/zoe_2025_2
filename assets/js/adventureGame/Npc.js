import GameEnv from "./GameEnv.js";
import Character from "./Character.js";
import Prompt from "./Prompt.js";
class Npc extends Character {
    constructor(data = null) {
        super(data);
        this.id = data.id || 'NPC_' + Math.random().toString(36).substring(7);
        console.log('%[GameControl] New NPC created: ' + this.id, 'color: green; font-weight: bold;');
        //console.log('Npc constructor called with data:', data);

        this.targetLevel = data.targetLevel;
        this.position = data.INIT_POSITION;
        this.hitbox = {
            widthPercentage: data.hitbox.widthPercentage || 1,
            heightPercentage: data.hitbox.heightPercentage || 1
        };
        this.collisionWidth = data.pixels.width * this.hitbox.widthPercentage;
        this.collisionHeight = data.pixels.height * this.hitbox.heightPercentage;

        if (isNaN(this.collisionWidth) || isNaN(this.collisionHeight)) {
            //console.warn('Hitbox dimensions resulted in NaN, defaulting to pixel dimensions.');
            this.collisionWidth = data.pixels.width;
            this.collisionHeight = data.pixels.height;
        }

        //console.log('Initialized Npc with data:', data);
        //console.log('Npc position:', this.position);
       // console.log('Npc hitbox:', this.hitbox);
        //console.log('Npc collision dimensions:', this.collisionWidth, this.collisionHeight);

        //console.log('Final NPC collision dimensions:', this.collisionWidth, this.collisionHeight);
        GameEnv.gameObjects.push(this);

        this.quiz = data?.quiz?.title; // Quiz title
        this.questions = Prompt.shuffleArray(data?.quiz?.questions || []); // Shuffle questions
        this.currentQuestionIndex = 0; // Start from the first question
        this.alertTimeout = null;
        this.bindEventListeners();
    }
    /**
     * Override the update method to draw the NPC.
     * This NPC is stationary, so the update method only calls the draw method.
     */
    update() {
        this.draw();
    }
    /**
     * Bind key event listeners for proximity interaction.
     */
    bindEventListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }
    /**
     * Handle keydown events for interaction.
     * @param {Object} event - The keydown event.
     */
    handleKeyDown({ key }) {
        switch (key) {
            case 'e': // Player 1 interaction
            case 'u': // Player 2 interaction
                this.shareQuizQuestion();
                break;
        }
    }
    /**
     * Handle keyup events to stop player actions.
     * @param {Object} event - The keyup event.
     */
    handleKeyUp({ key }) {
        if (key === 'e' || key === 'u') {
            // Clear any active timeouts when the interaction key is released
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
                this.alertTimeout = null;
            }
        }
    }
    /**
     * Get the next question in the shuffled array.
     * @returns {string} - The next quiz question.
     */
    getNextQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length; // Cycle through questions
        return question;
    }
    /**
     * Handle proximity interaction and share a quiz question.
     */
    shareQuizQuestion() {
        const players = GameEnv.gameObjects.filter(obj => obj.state.collisionEvents.includes(this.spriteData.id));
        const hasQuestions = this.questions.length > 0;
        if (players.length > 0 && hasQuestions) {
            players.forEach(player => {
                if (!Prompt.isOpen) {
                    // Assign this NPC as the current NPC in the Prompt system
                    Prompt.currentNpc = this;
                    // Open the Prompt panel with this NPC's details
                    Prompt.openPromptPanel(this);
                }
            });
        }
    }
}
export default Npc;