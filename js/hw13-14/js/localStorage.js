'use strict';

var testProgram = {

  questions: [
    {
      title: '1.Вопрос №1',
      answers: [
        {
          text: 'Верно',
          correct: true
        },
        {
          text: 'Не верно',
          correct: false
        },
        {
          text: 'Не верно',
          correct: false
        }
      ]
    },
    {
      title: '2.Вопрос №2',
      answers: [
        {
          text: 'Не верно',
          correct: false
        },
        {
          text: 'Не верно',
          correct: false
        },
        {
          text: 'Верно',
          correct: true
        }
      ]
    },
    {
      title: '3.Вопрос №3',
      answers: [
        {
          text: 'Верно',
          correct: true
        },
        {
          text: 'Не верно',
          correct: false
        },
        {
          text: 'Не верно',
          correct: false
        }
      ]
    }
  ]
};

localStorage.setItem('questions', JSON.stringify(testProgram));