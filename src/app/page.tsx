"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [generatedLetters, setGeneratedLetters] = useState<string[]>([]);
  const [time, setTime] = useState(10);
  const [ startCountdown, setStartCountdown ] = useState(false)
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
    console.log(RandomLetters);
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
    RandomKey()
    setStartCountdown(true);
  };

  return (
    <main className="flex flex-wrap gap-10">
      <button onClick={StartGame}>GERAR</button>
      {time === 0 ? (
        <p> Perdeu</p>
      ) : generatedLetters.length === 1 ? (
        <p>ganhou</p>
      ) : (
        generatedLetters.map((index, letters) => (
          <span key={letters}> {index}</span>
        ))
      )}
      {time}
    </main>
  );
}
