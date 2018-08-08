// adds a view to the app
function addView(view){
  $(".js-app-container").append(view);
}

// renders the start page to app
function renderStartPage() {
  addView(startPage());
}

// remove elements from current view
function removeLastView(){
   $(".js-app-container").children().remove();
}

function renderNextQuestion() {
  addView(generateQuestion());
  window.scrollTo(0, 0);
  
}

function renderFinalPage(passingGrade) {
  //remove view
  removeLastView();
  //
  if(passingGrade){
    //render passed view
    addView(quizPassed());
  } else {
    //render the failed view
    addView(quizFailed());
  }
}

function isQuizDone() {
  const pass = correctAnswers >= passingGrade ? true : false;
  renderFinalPage(pass);
  
}

function nextQuestionButton(){
   //event listener on nex button
   $(".js-app-container").on("click", ".js-button", function(event)
   {
     //remove last view
    removeLastView();
    //generate the nex question
    
    if(currentQuestionNumber+0 === numberOfQuestions){
      // checck and see if it is last question
      isQuizDone();
    } else {
      renderNextQuestion();
      
    } 
   });
  
}

function handleAnswer() {
  //event listener on form submit
  $(".js-app-container").on("submit" , ".js-form", function(event) {
    event.preventDefault();
    //log what the answer was 
    const userAnswer = $("input[name='answer']:checked").val();
    // cheks to see if answer is right or wrong
    gradeAnswer(userAnswer);
  });
}

function gradeAnswer(userAnswer){
  if(userAnswer === STORE[currentQuestionNumber].correctAnswer){
    // increment correct answers count
    correctAnswers++;
    //increase current question number
    currentQuestionNumber++;
    //display correct answer page
    renderCorrectAnswerPage();
  } else {
    //increase current question number
    currentQuestionNumber++;
    //display incorrect answer page
    renderWrongAnswerPage();
  }
}

function renderCorrectAnswerPage(){
  //remove last view
  removeLastView();
  //render correctAnswerPage
  addView(correctAnswerPage());
}

function renderWrongAnswerPage(){
  //remove last view
  removeLastView();
  //render WrongAnswerPage
  addView(wrongAnswerPage());
}

function restartQuiz() {
  $(".js-app-container").on("click", ".js-restart", function(event) {
    // refresh page and quiz
    removeLastView();
    // reset correct questions
    correctAnswers = 0;
    // reset question number
    currentQuestionNumber = 0;
    addView(generateQuestion());
  });
}

function answerClick() {
  $(".js-app-container").on("click", ".js-answer", function(event) {
    $(this).find("input").prop("checked", true);
  });
}

// start quiz function
function appInstance(){
  //renders the start page
  renderStartPage();
  // handle answer selection
  answerClick();
  //waits for button click
  nextQuestionButton();
  // checks answer
  handleAnswer();
  // wait for restart button
  restartQuiz();
}
// loads function when dom is fully loaded
$(appInstance);