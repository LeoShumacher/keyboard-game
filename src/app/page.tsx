"use client";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Rules from "@/components/Rules";
import { useEffect, useState } from "react";

export default function Home() {
  const [generatedLetters, setGeneratedLetters] = useState<string[]>([]);
  const [time, setTime] = useState(8);
  const [startCountdown, setStartCountdown] = useState(false);
  const [keyPressed, setKeyPressed] = useState<string>();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function RandomKey() {
    const RandomLetters: string[] = [];
    for (let i = 0; i < 6; i++) {
      const letter = alphabet[~~(Math.random() * alphabet.length)];
      RandomLetters.push(letter);
    }
    const letters = RandomLetters.join("");
    setGeneratedLetters(RandomLetters);
    return letters;
  }

  useEffect(() => {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      const keyCode = event.keyCode || event.which;

      if (
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122)
      ) {
        const keyPress = String.fromCharCode(keyCode).toUpperCase();
        console.log("Letra:", keyPress);
        setKeyPressed(keyPress);
        if (generatedLetters.includes(keyPress)) {
          generatedLetters.shift();
        }
      }
    });
  }, [generatedLetters]);

  useEffect(() => {
    if (startCountdown && time > 0) {
      const timerId = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [startCountdown, time]);

  const StartGame = () => {
    RandomKey();
    setStartCountdown(true);
  };

  return (
    <main className="w-full h-full flex flex-col sm:items-center justify-center">
      {/* {time === 0 ? (
        <p> Perdeu</p>
        ) : generatedLetters.length === 0 ? (
          <p>ganhou</p>
          ) : (
            generatedLetters.map((index, letters) => (
              <span key={letters}> {index}</span>
              ))
              )}  
        */}

      <Container>
        <Rules />
        <div className="bg-gray-300 w-[370px] h-20 rounded-lg flex justify-center">
          <div className="flex items-center justify-center gap-3 ">
            {generatedLetters.length === 0
              ? "ganhou"
              : time === 0
              ? "perdeu"
              : generatedLetters.map((index, letters) => (
                  <span
                    className="w-12 h-12 flex items-center justify-center bg-gray-500 text-white rounded-xl font-bold"
                    key={letters}
                  >
                    {index}
                  </span>
                ))}
          </div>
        </div>
        {time}

        <button
          className="w-40 h-12 rounded-md font-semibold text-white bg-gray-800  hover:bg-slate-800/90"
          onClick={StartGame}
        >
          COMEÇAR
        </button>
      </Container>
    </main>
  );
}
