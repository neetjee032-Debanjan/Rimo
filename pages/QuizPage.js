import { quizzes }
from "../data/quizzes.js";

import {
  renderQuiz
}
from "../components/Quiz.js";

export function openQuiz(
  container,
  lessonId
){

  const questions =
    quizzes[lessonId];

  if(!questions){

    container.innerHTML =
      `
      <h2>
        No quiz available.
      </h2>
      `;

    return;
  }

  renderQuiz(
    container,
    questions,
    lessonId
  );
}
