
// this is the start up page 
function startPage(){
  return `
    <header role="banner">
      <img role="presentation" class="js-logo logo" src="https://www.cyberpunk.net/img/4b1d760d1ce7081d/logo-en.12.png" alt="Cyberpunk 2077 logo: text reads cyberpunk 2077"/>
    </header> 
       <section class="quiz-intro js-quiz-intro">
          <h1>About the Quiz: </h1>
          <p>
            This quiz was made to test you about the upcoming Cyberpunk 2077 video game, some of its lore 
            and characters.
          </p>
       </section>  
       <button class="button js-button">
         <p class="button-text">Start quiz now </p>
       </button>
       <section class="more-info js-more-info" role="textbox">
        <h1>The world of Cyberpunk 2077:</h1>
        <p>Cyberpunk 2077 is set in a dystopian metropolis of Night City, California. Night City is located south of San Francisco around the area of Monterey, CA. During the setting of 2020, it is said to have a population of more than five million inhabitants, however the number is suspected to be considerably more in 2077.</p>

        <p>Following an economic collapse sometime in the early 21st century, the United States has to rely on the Mega corporations to survive. These corporations deal in a wide range of areas, such as weapons, robotics, cybernetics, pharmaceuticals, communications and biotechnology and many companies operate above the law.</p>

        <p>The game follows the story of V — a hired gun on the rise in Night City, the most violent and dangerous metropolis of the corporate-ruled future. A robust character creator will allow players to choose V’s gender, visual appearance, character class, as well as historical background — all of which may influence the shape of the game.</p>

        <p>The world is inspired by the works of authors such as William Gibson (author of Neuromancer) and Phillip K Dick, whose novel Do Androids Dream of Electric Sheep, and subsequent movie adaption Blade Runner heavily influenced creator Mike Pondsmith in creating the original pen-and-paper RPG.</p>
       </section>`;
}

function generateQuestion()
{
  return `<div class="question-view">
            
        <header role="banner" class="header-info">
          <img role="presentation" class="logo-question-view" src="https://www.cyberpunk.net/img/4b1d760d1ce7081d/cyberpunk.12.png" alt="Cyberpunk 2077 official logo"/>
          <div class="text-box">
            <p class="quiz-progress alignleft">
            Question ${currentQuestionNumber + 1} out of ${numberOfQuestions}</p>
            <p class="alignright">
            Correct answers: ${correctAnswers}
            </p>
          </div>
        </header>
      
        <h1 class="question">${STORE[currentQuestionNumber].question}</h1>
        <form class="js-form answers">
          <fieldset role="radiogroup">
          <legend>Select an answer:</legend>
          <ul class="list">
          
          <li class="js-answer answer-item">
            <input type="radio"   id="answer1"
            name="answer" value="${STORE[currentQuestionNumber].answer1}" required>
            <label  class="label" for="answer1"><span class="answer-btn">${STORE[currentQuestionNumber].answer1}</span>
            </label>
          </li>
          
          <li class="js-answer answer-item">
            <label class="js-label" for="answer2"><input type="radio" id="answer2"
            name="answer" value="${STORE[currentQuestionNumber].answer2}"><span class="answer-btn" >${STORE[currentQuestionNumber].answer2}</span>
            </label>
          </li>
          
          <li class="js-answer answer-item">
            <label class="js-label" for="answer3"><input type="radio" id="answer3"
            name="answer" value="${STORE[currentQuestionNumber].answer3}"><span class="answer-btn" >${STORE[currentQuestionNumber].answer3}</span>
            </label>
          </li>  
          
          <li class="js-answer answer-item">
            <label class="js-label" for="answer4"><input type="radio" id="answer4"
            name="answer" value="${STORE[currentQuestionNumber].answer4}"><span class="answer-btn" >${STORE[currentQuestionNumber].answer4}</span>
            </label>
          </li>

          </ul>

          <input  class="button submit-button"type="submit" value="Submit">
          </fieldset>
        </form>
      </div>`;
}

function correctAnswerPage() {
  return `
    <div class="feedback-view">
        <section role="dialog" class="answer-box">
        <h2 class="right-answer-message">You Got It right!</h2>
          <div class="text-box">
            <p class="quiz-progress alignleft">
            Question ${currentQuestionNumber + 0} out of ${numberOfQuestions}</p>
            <p class="alignright">
            Correct answers: ${correctAnswers}
            </p>
        </div>
          <img role="presentation" class="answer-img" src="https://cdn-l-cyberpunk.cdprojektred.com/gallery/1080p/screen-just-around-the-corner-en.jpg" alt="Cyberpunk character hidding and holding gun">
          <p class="correct-answer">The correct answer was: ${STORE[currentQuestionNumber-1].correctAnswer}.</p>
        </section>
        <button class="js-button next-question-button button">Next Question</button>
      </div>`;
}

function wrongAnswerPage() {
  return `
      <div class="feedback-view">
        <section role="dialog" class="answer-box">
          <h2 class="right-answer-message">You Got It Wrong</h2>
          <div class="text-box">
            <p class="quiz-progress alignleft">
            Question ${currentQuestionNumber + 0} out of ${numberOfQuestions}</p>
            <p class="alignright">
            Correct answers: ${correctAnswers}
            </p>
         </div>
          <img role="presentation" class="answer-img" src="https://cdn-l-cyberpunk.cdprojektred.com/gallery/1080p/screen-its-a-deal-en.jpg" alt="Cyberpunk militia characyers ">
          <p class="correct-answer">The correct asnwer was: ${STORE[currentQuestionNumber-1].correctAnswer}.</p>
        </section>
        <button class="js-button next-question-button button">Next Question</button>
      </div>`;
}

function quizPassed() {
  return `
  <section role="dialog" class="feedback-final">
        <div class="feedback-box">
          <h1>You Passed the quiz!</h1>
          
          <div class="text-box">
            <p class="quiz-progress alignleft">
            Questions asked :${numberOfQuestions}</p>
            <p class="alignright">
            Correct answers: ${correctAnswers}
            </p>
          </div>

          <img
           role="presentation" class="feedback-img" src="https://cdn-l-cyberpunk.cdprojektred.com/gallery/1080p/screen-high-speed-high-stakes-en.jpg" alt="black car driving away fast">
          <p>Congratulations</p>
          <p>You got ${correctAnswers} correct answers</p>
          <button class="js-restart restart-quiz button">Try quiz Again</button>
        </div>
      </section>`;
}

function quizFailed() {
  return `
    <section role="dialog" class="feedback-final">
        <div class="feedback-box">
          <h1>You failed the quiz</h1>

          <div class="text-box">
            <p class="quiz-progress alignleft">
            Questions asked :${numberOfQuestions}</p>
            <p class="alignright">
            Correct answers: ${correctAnswers}
            </p>
          </div>

          <img
           role="presentation" class="feedback-img" src="https://cdn-l-cyberpunk.cdprojektred.com/gallery/1080p/screen-trauma-team-en.jpg" alt="cyberpunk doctor using a defibrillator">
          <p>You got ${correctAnswers} correct answers</p>
          <p>Better luck nex time!</p>
          <button class="js-restart restart-quiz button">Retry Quiz</button>
        </div>
      </section>`;
}