import * as css from "../css/output.css";
// import * as css from "../css/style.css";

import { Quiz } from "./Quiz.js";
import {Questions} from './Questions.js'

const startBtn = document.getElementById('start');
const submitBtn = document.getElementById('submit')

const questions = new Questions();
const quiz = new Quiz({
  questions: questions.questions,
  qContainer: document.getElementById('qContainer'),
  rContainer: document.getElementById('rContainer')
});

startBtn.addEventListener('click', () => {
  quiz.init();
  startBtn.classList.add('hidden');
  submitBtn.classList.remove('hidden');
  rContainer.innerHTML = '';
})

submitBtn.addEventListener('click', () => {
  quiz.showResult();
  startBtn.classList.remove('hidden');
  submitBtn.classList.add('hidden');
})