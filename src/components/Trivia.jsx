import React, { useState, useRef } from "react";

const Trivia = ({ trivia, getApiTrivia }) => {
  const inputRef = useRef(null);
  const [answer, setAnswer] = useState("");
  const [isTrue, setIsTrue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [lastTrivia, setLastTrivia] = useState("");
  const [reset, setReset] = useState(true);

  function isCorrect(newAnswer) {
    if (lastTrivia === trivia.question) {
      setIsTrue(3);
      return;
    }
    if (newAnswer === trivia.answer) {
      if (answer !== newAnswer) {
        setIsTrue(1);
        setCounter(counter + 1);
      }
    } else {
      setIsTrue(2);
    }
  }

  function saveLastTrivia() {
    setLastTrivia(trivia.question);
  }

  function handleClick() {
    const newAnswer = inputRef.current.value;
    setAnswer(newAnswer);
    isCorrect(newAnswer);
    saveLastTrivia();
  }

  function handleClear() {
    inputRef.current.value = "";
    setIsTrue(0);
  }

  function restart() {
    setTimeout(() => {
      setReset(false);
    }, 2000);
  }

  function handleReset() {
    setAnswer("");
    setIsTrue(0);
    setCounter(0);
    setReset(true);
    handleClear();
  }

  return (
    <div className="mt-4 flex flex-col items-center">
      <button
        className="rounded bg-cyan-500 p-2 font-bold text-white mb-8"
        onClick={() => {
          getApiTrivia();
          handleClear();
          restart();
        }}
      >
        Preguntar
      </button>
      <p className="mb-10">
        {reset ? (
          <span className="text-slate-400">Pregunta...</span>
        ) : (
          trivia.question
        )}
      </p>
      <div className="mb-6">
        <p>Respuesta: </p>
        <input
          className="border-b-2 border-b-cyan-900 outline-0 shadow-md p-2"
          ref={inputRef}
          name="answer"
          type="text"
          id="answer"
          autoComplete="off"
        />
        <button
          className="rounded bg-green-600 p-2 font-bold text-white ml-4"
          onClick={handleClick}
        >
          Enviar
        </button>
      </div>
      {isTrue === 0 ? (
        <></>
      ) : isTrue === 1 ? (
        <h3>¡Correcto!</h3>
      ) : isTrue === 3 ? (
        <h3>Epa, esa ya la respondiste, tramposo</h3>
      ) : (
        <>
          <h3>¡Perdiste! La respuesta correcta es: {trivia.answer}</h3>
        </>
      )}

      <h3>Respuestas correctas: {counter}</h3>
      <button
        className="rounded bg-cyan-500 p-2 font-bold text-white mt-8"
        onClick={handleReset}
      >
        Reiniciar
      </button>
      <p>{trivia.answer}</p>
    </div>
  );
};

export default Trivia;
