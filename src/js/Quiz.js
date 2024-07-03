export class Quiz {
  constructor(config) {
    this.questions = config.questions,
    this.qContainer = config.qContainer,
    this.rContainer = config.rContainer
  }

  init() {
    this.qContainer.innerHTML = '';

    this.questions.forEach((question, qIndex) => {
      let output = `
      <div class="card bg-base-100 w-full shadow-xl my-4">
        <div class="card-body">
        <span class="badge badge-primary hidden">Correct</span>
        <span class="badge badge-secondary hidden">secondary</span>

          <h2 class="card-title">Q${qIndex + 1})  ${question.title}</h2
          
          <div class="card-body">
          ${this.showAnwer(question, qIndex)}
          </div>
        </div>
      </div>
      `;

      this.qContainer.innerHTML += output;
    });

  }

  showAnwer(question,  qIndex) {
    const answers = question.answers;
    let output = ``;

    for (const key in answers) {
      output += `
      <div>
        <input type="radio" name="${qIndex}" class="radio" data-answer="${key}" id="q${qIndex}${key}"/>
        <label for="q${qIndex}${key}"">${answers[key]}</label>
      </div>
      `
    }

    return output;
  }

  correctAnswers() {
    let result = 0;
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
      const userAnswer = input.getAttribute('data-answer');
      const questionIndex = +input.getAttribute('name');
      const correctAnswer = this.questions[questionIndex].correct;
      if (userAnswer == correctAnswer) {
        result++;
        input.closest('.card-body').querySelector('.badge-primary').classList.remove('hidden')
      } else {
        input.closest('.card-body').querySelector('.badge-secondary').classList.remove('hidden')
      }
    })
    return result;
  }

  showResult() {
    this.rContainer.innerHTML = 
    `<div class="stats shadow my-4">
      <div class="stat">
        <div class="stat-title">Result</div>
        <div class="stat-value">${this.correctAnswers()} / ${this.questions.length}</div>
      </div>
    </div>`;
  }
}