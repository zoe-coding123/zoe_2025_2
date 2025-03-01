// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import GameObject from './GameObject.js';
import Character from './Character.js';
import BackgroundObject from './BackgroundObject.js';

class GameLevelMap {
  constructor(path) {
    console.log('GameLevelMap constructor called');
    alert('Talk to and take the quizzes of the different characters to escape this world.')
    this.path = path;
    this.name = 'GameLevelMap';
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;


    // Background data
    const image_src_map = path + "/images/gamify/map.png"; // be sure to include the path
    const image_data_map = {
        name: 'map',
        greeting: "Welcome to the desert!  It is hot and dry here, but there are many adventures to be had!",
        src: image_src_map,
        pixels: {height: 580, width: 1038}
    };

    // additional ice for background
    const image_src_icesheet = path + "/images/gamify/icesheet.png";
    const image_data_icesheet = {
      name: 'icesheet',
      src: image_src_icesheet,
      pixels: {height: 70, width: 107},
      INIT_POSITION: { x: (width * 8 / 9), y: (height * 11 / 20) },
      SCALE_FACTOR: 5
    };

    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdome and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };


    // NPC data for Tux 
    const sprite_src_tux = path + "/images/gamify/tux.png"; // be sure to include the path
    const sprite_data_tux = {
        id: 'Tux',
        greeting: "Hi I am Tux, the Linux mascot.  I am very happy to spend some linux shell time with you!",
        src: sprite_src_tux,
        SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: (width * 9 / 10), y: (height/2)},
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        targetLevel: 'GameLevelIce',
        // Linux command quiz
        quiz: { 
          title: "Linux Command Quiz",
          questions: [
            "Which command is used to list files in a directory?\n1. ls\n2. dir\n3. list\n4. show",
            "Which command is used to change directories?\n1. cd\n2. chdir\n3. changedir\n4. changedirectory",
            "Which command is used to create a new directory?\n1. mkdir\n2. newdir\n3. createdir\n4. makedir",
            "Which command is used to remove a file?\n1. rm\n2. remove\n3. delete\n4. erase",
            "Which command is used to remove a directory?\n1. rmdir\n2. removedir\n3. deletedir\n4. erasedir",
            "Which command is used to copy files?\n1. cp\n2. copy\n3. duplicate\n4. xerox",
            "Which command is used to move files?\n1. mv\n2. move\n3. transfer\n4. relocate",
            "Which command is used to view a file?\n1. cat\n2. view\n3. show\n4. display",
            "Which command is used to search for text in a file?\n1. grep\n2. search\n3. find\n4. locate",
            "Which command is used to view the contents of a file?\n1. less\n2. more\n3. view\n4. cat" 
          ] 
        }
      };



      // NPC data for Octocat
      const sprite_src_octocat = path + "/images/gamify/octocat.png"; // be sure to include the path
      const sprite_data_octocat = {
        id: 'Octocat',
        greeting: "Hi I am Octocat! I am the GitHub code code code collaboration mascot",
        src: sprite_src_octocat,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 301, width: 801},
        INIT_POSITION: { x: (width * 6 / 7), y: (height * 17 / 20)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        targetLevel: 'GameLevelWater',
        // GitHub command quiz 
        quiz: { 
          title: "GitHub Command Quiz",
          questions: [
            "Which command is used to clone a repository?\n1. git clone\n2. git fork\n3. git copy\n4. git download",
            "Which command is used to add changes to the staging area?\n1. git add\n2. git stage\n3. git commit\n4. git push",
            "Which command is used to commit changes?\n1. git commit\n2. git add\n3. git save\n4. git push",
            "Which command is used to push changes to a remote repository?\n1. git push\n2. git upload\n3. git send\n4. git commit",
            "Which command is used to pull changes from a remote repository?\n1. git pull\n2. git fetch\n3. git receive\n4. git update",
            "Which command is used to check the status of the working directory and staging area?\n1. git status\n2. git check\n3. git info\n4. git log",
            "Which command is used to create a new branch?\n1. git branch\n2. git create-branch\n3. git new-branch\n4. git checkout",
            "Which command is used to switch to a different branch?\n1. git checkout\n2. git switch\n3. git change-branch\n4. git branch",
            "Which command is used to merge branches?\n1. git merge\n2. git combine\n3. git join\n4. git integrate",
            "Which command is used to view the commit history?\n1. git log\n2. git history\n3. git commits\n4. git show"
          ] 
        }
    }
    
    // NPC Data for Byte Nomad (Smaller Version)
    const sprite_src_nomad = path + "/images/gamify/animwizard.png"; // be sure to include the path
    const sprite_data_nomad = {
        id: 'Javanomad',
        greeting: "Hi I am Java Nomad, the Java mascot.  I am very happy to spend some linux shell time with you!",
        src: sprite_src_nomad,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 100,
        pixels: {height: 307, width: 813},
        INIT_POSITION: { x: (width * 1 / 4), y: (height * 1 / 5)},
        orientation: {rows: 3, columns: 7 },
        down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        targetLevel: 'GameLevelMountain',
        // Linux command quiz
        quiz: { 
          title: "Jupyter Notebook Command Quiz",
          questions: [
            "Which keyword is used to define a class in Java?\n1. define\n2. class\n3. Class\n4. struct",
            "Which data type is used to store a single character in Java?\n1. String\n2. char\n3. Character\n4. ch",
            "What is the default value of an int variable in Java?\n1. 0\n2. null\n3. undefined\n4. -1",
            "Which of these is NOT a Java access modifier?\n1. public\n2. private\n3. protected\n4. external",
            "What is the purpose of the 'final' keyword in Java?\n1. It defines a constant variable\n2. It prevents method overriding\n3. It prevents class inheritance\n4. All of the above",
            "Which Java loop is guaranteed to execute at least once?\n1. for loop\n2. while loop\n3. do-while loop\n4. foreach loop",
            "What is the parent class of all Java classes?\n1. Object\n2. BaseClass\n3. Root\n4. Core",
            "How do you correctly create a new object in Java?\n1. Object obj = Object();\n2. Object obj = new Object();\n3. Object obj = new();\n4. new Object obj;",
            "Which Java keyword is used to handle exceptions?\n1. throw\n2. try\n3. error\n4. exception",
            "Which Java collection allows key-value pairs?\n1. ArrayList\n2. HashMap\n3. HashSet\n4. LinkedList"
          ] 
        }
      };

    const sprite_src_robot = path + "/images/gamify/robot.png"; // be sure to include the path
    const sprite_data_robot = {
        id: 'Robot',
        greeting: "Hi I am Robot, the Jupyter Notebook mascot.  I am very happy to spend some linux shell time with you!",
        src: sprite_src_robot,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 100,
        pixels: {height: 316, width: 627},
        INIT_POSITION: { x: (width * 1 / 7), y: (height * 11 / 16)},
        orientation: {rows: 3, columns: 6 },
        down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        targetLevel: 'GameLevelDesert',
        // Linux command quiz
        quiz: { 
          title: "Jupyter Notebook Command Quiz",
          questions: [
            "Which shortcut is used to run a cell in Jupyter Notebook?\n1. Shift + Enter\n2. Ctrl + Enter\n3. Alt + Enter\n4. Tab + Enter",
            "Which shortcut adds a new cell above the current cell?\n1. A\n2. B\n3. C\n4. D",
            "Which shortcut adds a new cell below the current cell?\n1. B\n2. A\n3. C\n4. D",
            "Which shortcut changes a cell to Markdown format?\n1. M\n2. Y\n3. R\n4. K",
            "Which shortcut changes a cell to Code format?\n1. Y\n2. M\n3. C\n4. D",
            "Which shortcut deletes the current cell?\n1. D, D\n2. X\n3. Del\n4. Ctrl + D",
            "Which shortcut saves the current notebook?\n1. Ctrl + S\n2. Alt + S\n3. Shift + S\n4. Tab + S",
            "Which shortcut restarts the kernel?\n1. 0, 0\n2. R, R\n3. K, K\n4. Shift + R",
            "Which shortcut interrupts the kernel?\n1. I, I\n2. Ctrl + C\n3. Shift + I\n4. Alt + I",
            "Which shortcut toggles line numbers in a cell?\n1. L\n2. N\n3. T\n4. G"
          ] 
        }
      };

  /*  // NPC data for HTML Hank
const sprite_src_htmlhank = path + "/images/gamify/htmlhank.png"; // be sure to include the path
const sprite_data_htmlhank = {
    id: 'HTML Hank',
    greeting: "Hey there! I'm HTML Hank, the web architect. Let's build some awesome webpages together!",
    src: sprite_src_html_hank,
    SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
    ANIMATION_RATE: 60,
    pixels: { height: 350, width: 550 },
    INIT_POSITION: { x: (width / 2), y: (height / 2) },
    orientation: { rows: 2, columns: 4 },
    down: { row: 0, start: 0, columns: 3 },  // This is the stationary NPC, down is default
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },

    // HTML & CSS quiz
    quiz: { 
        title: "HTML & CSS Mastery Quiz",
        questions: [
            "What does HTML stand for?\n1. HyperText Markup Language\n2. HighText Machine Learning\n3. Hyper Transfer Markup Language\n4. Hyper Tool Markup Language",
            "Which HTML tag is used to define the largest heading?\n1. <h1>\n2. <h6>\n3. <header>\n4. <h0>",
            "Which tag is used to create a hyperlink in HTML?\n1. <a>\n2. <link>\n3. <href>\n4. <url>",
            "Which CSS property is used to change text color?\n1. color\n2. text-color\n3. font-color\n4. bgcolor",
            "Which unit is relative to the font size of the root element in CSS?\n1. rem\n2. em\n3. px\n4. vh",
            "What is the correct way to reference an external CSS file?\n1. <link rel='stylesheet' href='styles.css'>\n2. <style src='styles.css'>\n3. <css file='styles.css'>\n4. <script href='styles.css'>",
            "How do you center an element horizontally using CSS?\n1. margin: auto;\n2. align: center;\n3. text-align: middle;\n4. float: center;",
            "Which HTML tag is used for creating an unordered list?\n1. <ul>\n2. <ol>\n3. <list>\n4. <li>",
            "What is the purpose of the <meta> tag in HTML?\n1. To provide metadata about the document\n2. To create a navigation menu\n3. To define the main content area\n4. To embed images"
        ]
    }
}; */

    // List of objects defnitions for this level
    this.objects = [
      { class: Background, data: image_data_map },
      { class: BackgroundObject, data: image_data_icesheet },
      { class: Player, data: sprite_data_chillguy },
     // { class: Npc, data: sprite_data_htmlhank }, 
    ];

    this.transitionNPCS = [
      { class: Npc, data: sprite_data_tux },
      { class: Npc, data: sprite_data_nomad },
      { class: Npc, data: sprite_data_octocat },
      { class: Npc, data: sprite_data_robot },
    ].map(npcData => {
      const npcDataFormatted = {
        ...npcData.data,
        targetLevel: npcData.data.targetLevel,
        INIT_POSITION: npcData.data.INIT_POSITION,
        hitbox: npcData.data.hitbox,
        pixels: npcData.data.pixels
      };

      console.log('Initializing NPC with data:', npcDataFormatted);
      const npc = new npcData.class(npcDataFormatted);
      console.log('Initialized NPC:', npc);

      return npc;
    
    });
    console.log('Initialized transitionNPCS in GameLevelMap:', this.transitionNPCS);
  };
}

export default GameLevelMap;