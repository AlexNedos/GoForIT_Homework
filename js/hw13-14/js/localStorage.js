'use strict;'
var testProgram = {

  questions: 
  [
    {
      title: '1.Вопрос №1',
      answers: [
        {
          text: 'Вариант ответа №1'
        },
        {
          text: 'Вариант ответа №2'
        },
        {
          text: 'Вариант ответа №3'
        }
      ]
    },
    {
      title: '2.Вопрос №2',
      answers: [
        {
          text: 'Вариант ответа №1'
        },
        {
          text: 'Вариант ответа №2'
        },
        {
          text: 'Вариант ответа №3'
        }
      ]
    },
    {
      title: '3.Вопрос №3',
      answers: [
        {
          text: 'Вариант ответа №1'
        },
        {
          text: 'Вариант ответа №2'
        },
        {
          text: 'Вариант ответа №3'
        }
      ]
    }	   
  ]
};

  localStorage.setItem('questions',  JSON.stringify(testProgram));

var question = localStorage.getItem('questions');
question = JSON.parse(question);
console.log(question);