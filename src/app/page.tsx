"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [generatedLetters, setGeneratedLetters] = useState<string[]>([]);
  const [showLetter, setshowLetter] = useState<string>();
  const [keyPressed, setKeyPressed] = useState<string>();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function RandomKey() {
    const RandomLetters: string[] = [];

    for (let i = 0; i < 6; i++) {
      const letter = alphabet[~~(Math.random() * alphabet.length)];
      RandomLetters.push(letter);
    }
    setGeneratedLetters(RandomLetters);
    const letters = RandomLetters.join("");
    setshowLetter(letters);
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
        setKeyPressed(keyPress)
        if (generatedLetters.includes(keyPress)) {
          alert("acertou");
          generatedLetters.shift();
        }
      }
    });
  }, [generatedLetters]);

  useEffect(() => {
    if (keyPressed) {
      showLetter
    }
  }, [keyPressed]);

  return (
    <main className="flex flex-wrap gap-10">
      <button onClick={RandomKey}>RANDOM</button>

      {showLetter}
    </main>
  );
}
