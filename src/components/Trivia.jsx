import React, { useState, useRef } from "react";

const Trivia = ({ trivia, getApiTrivia }) => {
  const inputRef = useRef(null);
  const [answer, setAnswer] = useState("");
  const [isTrue, setIsTrue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [lastTrivia, setLastTrivia] = useState("");
  const [reset, setReset] = useState(true);

  function isCorrect(newAnswer) {
    if (trivia.question === undefined) {
      return;
    }
    if (lastTrivia === trivia.question) {
      setIsTrue(3);
      return;
    }

    if (newAnswer === trivia.answer.toLowerCase()) {
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
    const newAnswer = inputRef.current.value.toLowerCase().trim();
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <button
        className="rounded bg-secondary p-2 font-bold text-white mb-8 hover:bg-fourth transition-all ease-in-out duration-500"
        onClick={() => {
          getApiTrivia();
          handleClear();
          restart();
        }}
      >
        Preguntar
      </button>
      <p className="mb-10 font-semibold text-secondary text-2xl w-4/5">
        {reset ? "" : trivia.question}
      </p>
      <div className="my-6">
        <p className="font-bold mb-3">Respuesta: </p>
        <input
          className="border-b-2 border-b-secondary outline-0 shadow-md p-2"
          ref={inputRef}
          name="answer"
          type="text"
          id="answer"
          autoComplete="off"
          onKeyDown={handleKeyDown}
        />
        <button
          className="rounded bg-secondary p-2 font-bold text-white ml-4 hover:bg-fourth transition-all ease-in-out duration-500"
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

      <h3 className="font-semibold text-center">
        Respuestas correctas: <br />
        <span className="text-third text-xl">{counter}</span>
      </h3>
      <button
        className="rounded bg-fourth p-2 font-bold text-white mt-8 hover:bg-main transition-all ease-in-out duration-500"
        onClick={handleReset}
      >
        Reiniciar
      </button>
      <p className="mt-10 font-semibold">
        Respuesta oculta (bueno... no tan oculta):{" "}
        <span className="text-fifth bg-slate-300">{trivia.answer}</span>
      </p>
    </div>
  );
};

export default Trivia;
