//...................................................WRAPPER+HEADER
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

var header = document.createElement('div');
header.classList.add('header');

var h1 = document.createElement('h1');
h1.classList.add('header_h1');
h1.innerHTML = 'Тест по программированию';
//...................................................WRAPPER+HEADER


//...................................................QUASTIONS
var question = document.createElement('div');
question.classList.add('question');

var question2 = question.cloneNode(true);

var question3 = question.cloneNode(true);


var h1Question = document.createElement('h1');
h1Question.classList.add('question_h1');
h1Question.innerHTML = '1. Вопрос № 1';

var h1Question2 = h1Question.cloneNode(true);
h1Question2.innerHTML = '2. Вопрос № 2';

var h1Question3 = h1Question.cloneNode(true);
h1Question3.innerHTML = '3. Вопрос № 3';


var questionAnswer = document.createElement('form');
questionAnswer.setAttribute('action', '#');

var questionAnswer2 = questionAnswer.cloneNode(true);

var questionAnswer3 = questionAnswer.cloneNode(true);
//...................................................QUASTIONS


//..........................................................FORMS
//...................................................INPUT
var formQuestionInput = document.createElement('input');
formQuestionInput.classList.add('form_question_input');
formQuestionInput.setAttribute('type', 'checkbox');
formQuestionInput.setAttribute('id', 'question1');

var formQuestionInput2 = formQuestionInput.cloneNode(true);
formQuestionInput2.setAttribute('id', 'question2');

var formQuestionInput3 = formQuestionInput.cloneNode(true);
formQuestionInput3.setAttribute('id', 'question3');

var formQuestionInput4 = formQuestionInput.cloneNode(true);
formQuestionInput4.setAttribute('id', 'question4');

var formQuestionInput5 = formQuestionInput.cloneNode(true);
formQuestionInput5.setAttribute('id', 'question5');

var formQuestionInput6 = formQuestionInput.cloneNode(true);
formQuestionInput6.setAttribute('id', 'question6');

var formQuestionInput7 = formQuestionInput.cloneNode(true);
formQuestionInput7.setAttribute('id', 'question7');

var formQuestionInput8 = formQuestionInput.cloneNode(true);
formQuestionInput8.setAttribute('id', 'question8');

var formQuestionInput9 = formQuestionInput.cloneNode(true);
formQuestionInput9.setAttribute('id', 'question9');
//.........................................................INPUT


//.........................................................LABEL
var formQuestionLabel = document.createElement('label');
formQuestionLabel.setAttribute('for', 'question1');

var formQuestionLabel2 = formQuestionLabel.cloneNode(true);
formQuestionLabel2.setAttribute('for', 'question2');

var formQuestionLabel3 = formQuestionLabel.cloneNode(true);
formQuestionLabel3.setAttribute('for', 'question3');

var formQuestionLabel4 = formQuestionLabel.cloneNode(true);
formQuestionLabel4.setAttribute('for', 'question4');

var formQuestionLabel5 = formQuestionLabel.cloneNode(true);
formQuestionLabel5.setAttribute('for', 'question5');

var formQuestionLabel6 = formQuestionLabel.cloneNode(true);
formQuestionLabel6.setAttribute('for', 'question6');

var formQuestionLabel7 = formQuestionLabel.cloneNode(true);
formQuestionLabel7.setAttribute('for', 'question7');

var formQuestionLabel8 = formQuestionLabel.cloneNode(true);
formQuestionLabel8.setAttribute('for', 'question8');

var formQuestionLabel9 = formQuestionLabel.cloneNode(true);
formQuestionLabel9.setAttribute('for', 'question9');
//..........................................................LABEL


//..........................................................TEXT
var formQuestionAnswerText = document.createElement('span');
formQuestionAnswerText.classList.add('answer_text');
formQuestionAnswerText.innerHTML = 'Вариант ответа № 1';

var formQuestionAnswerText2 = formQuestionAnswerText.cloneNode(true);
formQuestionAnswerText2.innerHTML = 'Вариант ответа № 2';

var formQuestionAnswerText3 = formQuestionAnswerText.cloneNode(true);
formQuestionAnswerText3.innerHTML = 'Вариант ответа № 3';

var formQuestionAnswerText4 = formQuestionAnswerText.cloneNode(true);
formQuestionAnswerText4.innerHTML = 'Вариант ответа № 1';

var formQuestionAnswerText5 = formQuestionAnswerText.cloneNode(true);
formQuestionAnswerText5.innerHTML = 'Вариант ответа № 2';

var formQuestionAnswerText6 = formQuestionAnswerText.cloneNode(true);
formQuestionAnswerText6.innerHTML = 'Вариант ответа № 3';

var formQuestionAnswerText7 = formQuestionAnswerText.cloneNode(true);
formQuestionAnswerText7.innerHTML = 'Вариант ответа № 1';

var formQuestionAnswerText8 = formQuestionAnswerText.cloneNode(true);
formQuestionAnswerText8.innerHTML = 'Вариант ответа № 2';

var formQuestionAnswerText9 = formQuestionAnswerText.cloneNode(true);
formQuestionAnswerText9.innerHTML = 'Вариант ответа № 3';
//...................................................................TEXT
//........................................................................FORMS


//...........................................................FOOTER(BUTTOM)
var buttom = document.createElement('input');
buttom.classList.add('buttom_result');
buttom.setAttribute('type', 'submit');
buttom.setAttribute('value', 'Отправить мои результаты');
//...........................................................FOOTER(BUTTOM)


//..................................................................LOCATION
var body = document.querySelector('body');
//...................................................WRAPPER+HEADER
body.insertBefore(wrapper, body.children[0]);
wrapper.insertBefore(header, wrapper.children[0]);
header.insertBefore(h1, header.children[0]);
//...................................................WRAPPER+HEADER

//...................................................QUASTIONS
wrapper.insertBefore(question, wrapper.children[1]);
wrapper.insertBefore(question2, wrapper.children[2]);
wrapper.insertBefore(question3, wrapper.children[3]);
wrapper.insertBefore(buttom, wrapper.children[4]);

question.insertBefore(h1Question, question.children[1]);
question.insertBefore(questionAnswer, question.children[2]);

question2.insertBefore(h1Question2, question2.children[2]);
question2.insertBefore(questionAnswer2, question2.children[3]);

question3.insertBefore(h1Question3, question3.children[3]);
question3.insertBefore(questionAnswer3, question3.children[4]);
//................................................................QUASTIONS

//..................................................................................FORMS
//...........................................................................INPUT
questionAnswer.insertBefore(formQuestionInput, questionAnswer.children[1]);
questionAnswer.insertBefore(formQuestionInput2, questionAnswer.children[2]);
questionAnswer.insertBefore(formQuestionInput3, questionAnswer.children[3]);
//...........................................................................INPUT

//................................................................................LABEL
questionAnswer.insertBefore(formQuestionLabel, questionAnswer.children[1]);
questionAnswer.insertBefore(formQuestionLabel2, questionAnswer.children[3]);
questionAnswer.insertBefore(formQuestionLabel3, questionAnswer.children[5]);
//................................................................................LABEL

//...........................................................................,INPUT
questionAnswer2.insertBefore(formQuestionInput4, questionAnswer2.children[1]);
questionAnswer2.insertBefore(formQuestionInput5, questionAnswer2.children[2]);
questionAnswer2.insertBefore(formQuestionInput6, questionAnswer2.children[3]);
//............................................................................INPUT

//................................................................................LABEL
questionAnswer2.insertBefore(formQuestionLabel4, questionAnswer2.children[1]);
questionAnswer2.insertBefore(formQuestionLabel5, questionAnswer2.children[3]);
questionAnswer2.insertBefore(formQuestionLabel6, questionAnswer2.children[5]);
//................................................................................LABEL

//............................................................................INPUT
questionAnswer3.insertBefore(formQuestionInput7, questionAnswer3.children[1]);
questionAnswer3.insertBefore(formQuestionInput8, questionAnswer3.children[2]);
questionAnswer3.insertBefore(formQuestionInput9, questionAnswer3.children[3]);
//............................................................................INPUT

//................................................................................LABEL
questionAnswer3.insertBefore(formQuestionLabel7, questionAnswer3.children[1]);
questionAnswer3.insertBefore(formQuestionLabel8, questionAnswer3.children[3]);
questionAnswer3.insertBefore(formQuestionLabel9, questionAnswer3.children[5]);
//............................................................................,...LABEL

//.......................................................................................TEXT
formQuestionLabel.insertBefore(formQuestionAnswerText, formQuestionLabel.children[1]);
formQuestionLabel2.insertBefore(formQuestionAnswerText2, formQuestionLabel2.children[3]);
formQuestionLabel3.insertBefore(formQuestionAnswerText3, formQuestionLabel3.children[5]);

formQuestionLabel4.insertBefore(formQuestionAnswerText4, formQuestionLabel4.children[1]);
formQuestionLabel5.insertBefore(formQuestionAnswerText5, formQuestionLabel5.children[3]);
formQuestionLabel6.insertBefore(formQuestionAnswerText6, formQuestionLabel6.children[5]);

formQuestionLabel7.insertBefore(formQuestionAnswerText7, formQuestionLabel7.children[1]);
formQuestionLabel8.insertBefore(formQuestionAnswerText8, formQuestionLabel8.children[3]);
formQuestionLabel9.insertBefore(formQuestionAnswerText9, formQuestionLabel9.children[5]);
//........................................................................................TEXT
//.............................................................................................FORMS
//...................................................................................................LOCATION











