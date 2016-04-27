'use strict';

var questionStorage = localStorage.getItem('questions');
questionStorage = JSON.parse(questionStorage);

var testProgram = {

  testBody: document.body,
  testWrapper: document.createElement('div'),
  testHeader: document.createElement('h1'),
  testContent: document.createElement('content'),
  testForm: document.createElement('form'),
  testButton: document.createElement('button'),


  createdTest: function () {
    this.testWrapper.classList.add('wrapper');

    this.testHeader.classList.add('header__h1');
    this.testHeader.innerHTML = 'Тест по программированию';

    this.testButton.classList.add('button__result');
    this.testButton.setAttribute('type', 'submit');
    this.testButton.innerHTML = 'Отправить мои результаты';

    this.testBody.appendChild(this.testWrapper);
    this.testWrapper.appendChild(this.testHeader);
    this.testWrapper.appendChild(this.testContent);
    this.testContent.appendChild(this.testForm);
    this.testForm.appendChild(this.testButton);
  },

  generateElement: function () {
    var q = 0;

    for (var i = 0; i < questionStorage.questions.length; i++) {

      var testBoxQuestion = document.createElement('div');
      var testQuestionH2 = document.createElement('h2');

      testQuestionH2.innerHTML = questionStorage.questions[i].title;

      testBoxQuestion.classList.add('question__box');
      testQuestionH2.classList.add('question__h2');

      this.testForm.appendChild(testBoxQuestion);
      testBoxQuestion.appendChild(testQuestionH2);


      for (var y = 0; y < questionStorage.questions[i].answers.length; y++) {

        var answerBox = document.createElement('div');
        var formQuestionInput = document.createElement('input');
        var formQuestionLabel = document.createElement('label');
     
        formQuestionInput.classList.add('form__question__input');
        formQuestionInput.setAttribute('type', 'radio');
        formQuestionInput.setAttribute('name', 'answer ' + i);
        formQuestionInput.setAttribute('id', 'question' + q);
        formQuestionLabel.setAttribute('for', 'question' + q);

        var formQuestionAnswer = document.createElement('span');
        formQuestionAnswer.classList.add('answer__text');
        formQuestionAnswer.innerHTML = questionStorage.questions[i].answers[y].text;

        testBoxQuestion.appendChild(answerBox);
        answerBox.appendChild(formQuestionInput);
        answerBox.appendChild(formQuestionLabel);
        formQuestionLabel.appendChild(formQuestionAnswer);

        q++;
      }
    }
  }
};

testProgram.createdTest();
testProgram.generateElement();



$(function () {
  var $result = $('.button__result');
  
  $result.on('click', function () {
    
    for ( var i = 0; i < 9; i++) {
      if ($('#question' + i).prop("checked")){
      alert('Верно');
    } else {
    alert('Не верно');
      }
//    if ($('#question4').prop("checked")){
//      alert('Верно');
//    } else {
//      alert('Не верно');
//      }
//    if ($('#question8').prop("checked")){
//      alert('Верно');
//    } else {
//      alert('Не верно');
//      }
    }
    
  });
  

  
});