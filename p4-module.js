/*
    CIT 281 Project 3
    Name: Will Mosher
*/
const {data} = require('./p4-data.js');

function getQuestions() {
    let arr = data;
    let keyword = 'question';
    let arrayQ = arr.map(q => q[keyword]);
    return arrayQ;
}
// console.log(getQuestions(data, 'question'));

function getAnswers() {
    let arr = data;
    let keyword = 'answer';
    let arrayA = arr.map(a => a[keyword]);
    return arrayA;
}
//console.log(getAnswers(data, 'answer'));

function getQuestionsAnswers() {
    // const copy = JSON.parse(JSON.stringify(data));
    const copyData = [...data];
    return copyData;
}
// console.log(getQuestionsAnswers());

function getQuestion(number = "") {

    if (number === '') {
        let stupidObj = {
            error: 'Question number must be an integer',
            question: '',
            number: ''
          }
        return stupidObj;
    } else if (number === 0) {
        let dumbObj = { error: 'Question number must be >= 1', question: '', number: '' }
        return dumbObj;
    } else if (number > 3) {
        let whatTheHeckAreYouDoingObj = {
            error: 'Question number must be less than the number of questions (3)',
            question: '',
            number: ''
          }
          return whatTheHeckAreYouDoingObj;
    } else {

        let index = data[number-1];
        const {answer} = index;
    
    let questObj = {question: question, number: number, error: ''}
    return questObj
    }
}
// console.log(getQuestion(1));

function getAnswer(number = "") {

    if (number === '') {
        let stupidObj = {
            error: 'Answer number must be an integer',
            answer: '',
            number: ''
          }
        return stupidObj;
    } else if (number === 0) {
        let dumbObj = { error: 'Answer number must be >= 1', answer: '', number: '' }
        return dumbObj;
    } else if (number > 3) {
        let whatTheHeckAreYouDoingObj = {
            error: 'Answer number must be less than the number of questions (3)',
            answer: '',
            number: ''
          }
          return whatTheHeckAreYouDoingObj;
    } else {

        let index = data[number-1];
        const {answer} = index;
    
    let ansObj = {answer: answer, number: number, error: ''}
    return ansObj
    }
}
// console.log(getAnswer(2));

function getQuestionAnswer(number = "") {

    if (number === '') {
        let stupidObj = {
            error: 'Question number must be an integer',
            question: '',
            answer: '',
            number: ''
          }
        return stupidObj;
    } else if (number === 0) {
        let dumbObj = { error: 'Question number must be >= 1', question: '', answer: '', number: '' }
        return dumbObj;
    } else if (number > 3) {
        let whatTheHeckAreYouDoingObj = {
            error: 'Question number must be less than the number of questions (3)',
            question: '',
            answer: '',
            number: ''
          }
          return whatTheHeckAreYouDoingObj;
    } else {
       
        let index = data[number-1];
        const {question, answer} = index;

    let newObj = {question: question, answer: answer, number: number, error: ''}
    return newObj
    }
}
console.log(getQuestionAnswer(5));

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
  };
