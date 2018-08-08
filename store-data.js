'use strict';
  let correctAnswers = 0;
  let currentQuestionNumber = 0;
// questions and answers hard coded
const STORE = [
  {
    question: "Who is the developer making Cybepunk 2077?",
    answer1: "Bethesda",
    answer2: "CD Projekt",
    answer3: "ELectronic Arts",
    answer4: "Ubisoft",
    correctAnswer: "CD Projekt"
    },
  {
    question: "Who was the original creator of Cyberpunk?",
    answer1: "Marcin Iwiński",
    answer2: "Adam Kicinski",
    answer3: "Mike Pondsmiths",
    answer4: "Adam Badowski",
    correctAnswer: "Mike Pondsmiths"
    },
  {
    question: "What kind of game of Cybepunk, before it was a videogame?",
    answer1: "A pen and paper role playing game",
    answer2: "A trading card game",
    answer3: "A game inside a magazine",
    answer4: "A board game",
    correctAnswer: "A pen and paper role playing game"
    },
  {
    question: "In what year was the original Cybepunk game released?",
    answer1: "1990",
    answer2: "2077",
    answer3: "2000",
    answer4: "1988",
    correctAnswer: "1988"
    },
  {
    question: "What kind of videogame is Cyberpunk 2077?",
    answer1: "An adventure game",
    answer2: "A first person shooter",
    answer3: "A role-playing game",
    answer4: "A point and click game",
    correctAnswer: "A role-playing game"
    },
    {
    question: "In what city does Cyberpunk 2077 takes place?",
    answer1: "New York City",
    answer2: "Night City",
    answer3: "Raccoon City",
    answer4: "Megaton",
    correctAnswer: "Night City"
    },
    {
    question: "What is the name of Cybepunk's 2077 main character?",
    answer1: "V",
    answer2: "Ciri",
    answer3: "Elliot",
    answer4: "Richard",
    correctAnswer: "V"
    },
    {
    question: "Cyberpunk was inpired by the following movies and novles, except: ",
    answer1: "Neuromancer",
    answer2: "Blade Runner",
    answer3: "The Terminator",
    answer4: "Do Androids Dream of Electric Sheep",
    correctAnswer: "The Terminator"
    }
  ];
  // stored question number 
  const numberOfQuestions = STORE.length;
  // need to get around 60% to pass
  const passingGrade = Math.floor(60 * numberOfQuestions/100);
