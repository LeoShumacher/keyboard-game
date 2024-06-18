"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Rules from "@/components/Rules";
import { useEffect, useState } from "react";

export default function Home() {
  const [generatedLetters, setGeneratedLetters] = useState<string[]>([]);
  const [time, setTime] = useState(0);
  const [startCountdown, setStartCountdown] = useState(false);
  const [letterBoolean, setLetterBoolean] = useState(false);
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
        console.log(keyPress);
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
    setTime(5);
    setLetterBoolean(true);
    setStartCountdown(true);
  };

  return (
    <main className="w-full h-full flex flex-col bg-main-background">
      <div className="w-full h-full flex flex-col sm:items-center justify-center">
        <Container>
          <Rules />
          <div className="bg-white/40 w-[95%] h-20 rounded-lg flex justify-center">
            <div className="flex items-center justify-center gap-3 ">
              {letterBoolean === true
                ? generatedLetters.length === 0
                  ? (<h2 className="text-2xl text-secondary font-semibold">Você ganhou!!!</h2>)
                  : time === 0
                  ? (<h2 className="text-2xl text-secondary font-semibold">O tempo acabou!!</h2>)
                  : generatedLetters.map((index, letters) => (
                      <span
                        className="w-12 h-12 flex items-center justify-center bg-violet-500 text-white rounded-xl font-bold"
                        key={letters}
                      >
                        {index}
                      </span>
                    ))
                : ""}
            </div>
          </div>
          {letterBoolean === true && time === 0 ? (
            <button
              className="w-56 h-14 rounded-md font-semibold text-white bg-violet-500  hover:bg-violet-500/90"
              onClick={StartGame}
            >
              RECOMEÇAR
            </button>
          ) : time > 0 ? (
            <h1 className="text-2xl text-secondary font-semibold">Tempo: {time}</h1>
          ) : (
            <button
              className="w-56 h-14 rounded-md font-semibold text-white bg-violet-500  hover:bg-violet-500/90"
              onClick={StartGame}
            >
              COMEÇAR
            </button>
          )}
        </Container>
      </div>
      <Footer />
    </main>
  );
}
