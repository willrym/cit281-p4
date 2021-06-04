const fastify = require("fastify")();
const {getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer} = require('./p4-module.js');
const {data} = require('./p4-data.js');

    fastify.get("/cit/question", (request, reply) => {
        reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({
            "error": "",
            "statusCode": 200,
            "questions": getQuestions()
          });
      });

      fastify.get("/cit/answer", (request, reply) => {
        reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({
            "error": "",
            "statusCode": 200,
            "answers": getAnswers()
          });
      });

      fastify.get("/cit/questionanswer", (request, reply) => {
        reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({
            "error": "",
            "statusCode": 200,
            "question_answer": getQuestionsAnswers()
          });
      });

      fastify.get("/cit/question/:number", (request, reply) => {
          let numberFromClient = request.params.number;
          numberFromClient = parseInt(numberFromClient);
          // console.log(typeof(numberFromClient))
          let numObj = getQuestion(numberFromClient);

          const {question, number} = numObj;

          let returnObj = {"error": "",
          "statusCode": 200, "question": question, "number": number}
        
        reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(returnObj);
      });

      fastify.get("/cit/answer/:number", (request, reply) => {
        let numberFromClient = request.params.number;
        numberFromClient = parseInt(numberFromClient);
        // console.log(typeof(numberFromClient))
        let numObj = getAnswer(numberFromClient);

        const {answer, number} = numObj;

        let returnObj = {"error": "",
        "statusCode": 200, "answer": answer, "number": number}
      
      reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(returnObj);
    });

    fastify.get("/cit/questionanswer/:number", (request, reply) => {
        let numberFromClient = request.params.number;
        numberFromClient = parseInt(numberFromClient);
        // console.log(typeof(numberFromClient))
        let numObj = getQuestionAnswer(numberFromClient);

        const {question, answer, number} = numObj;

        let returnObj = {"error": "",
        "statusCode": 200, "question": question, "answer": answer, "number": number}
      
      reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(returnObj);
    });

      const listenIP = "localhost";
      const listenPort = 8080;
      fastify.listen(listenPort, listenIP, (err, address) => {
        if (err) {
          console.log(err);
          process.exit(1);
        }
        console.log(`Server listening on ${address}`);
      });

      fastify.get("*", (request, reply) => {
        reply
          .code(200)
          .header("Content-Type", "text/html; charset=utf-8")
          .send("<h1>At Unmatched Route</h1>");
      });