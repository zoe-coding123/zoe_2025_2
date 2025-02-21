import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Npc from './Npc.js';
import Character from './Character.js';
import Player from './Player.js';

class GameLevelWater {
  constructor(path) {
    this.name = 'GameLevelWater';
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data
    const image_src_water = path + "/images/gamify/deepseadungeon.jpeg";
    const image_data_water = {
        id: 'Water',
        src: image_src_water,
        pixels: {height: 597, width: 340}
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
        INIT_POSITION: { x: width * 1 / 3, y: height * 11 / 20 }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
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
        INIT_POSITION: { x: (width * 11 / 20), y: (height * 7 / 10)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
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
    /* const sprite_src_octopus = path + "/images/gamify/octopus.png"; // be sure to include the path
    const OCTOPUS_SCALE_FACTOR = 5;
    const sprite_data_octopus = {
        id: 'Octopus',
        greeting: "Hi I am Octopus, the water wanderer. I am looking for wisdome and adventure!",
        src: sprite_src_octopus,
        SCALE_FACTOR: OCTOPUS_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/OCTOPUS_SCALE_FACTOR) }, 
        pixels: {height: 250, width: 167},
        orientation: {rows: 3, columns: 2 },
        down: {row: 0, start: 0, columns: 2 },
        left: {row: 1, start: 0, columns: 2 },
        right: {row: 1, start: 0, columns: 2 },
        up: {row: 0, start: 0, columns: 2},
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // NPC Data for Byte Nomad (Smaller Version)
    const sprite_src_nomad = path + "/images/gamify/animwizard.png"; // be sure to include the path
    const sprite_data_nomad = {
        id: 'Javanomad',
        greeting: "Hi I am Java Nomad, the Java mascot.  I am very happy to spend some linux shell time with you!",
        src: sprite_src_nomad,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 100,
        pixels: {height: 307, width: 813},
        INIT_POSITION: { x: (width * 3 / 4), y: (height * 3 / 4)},
        orientation: {rows: 3, columns: 7 },
        down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
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
      }; */


    // List of objects definitions for this level
    this.objects = [
      { class: Background, data: image_data_water },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_octocat },
    ];
  }
}

export default GameLevelWater;