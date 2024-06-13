"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [generatedLetters, setGeneratedLetters] = useState<string[]>([]);
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

  return (
    <main className="flex flex-wrap gap-10">
      <button onClick={RandomKey}>RANDOM</button>


      {generatedLetters.length === 1 ? (
        <p>ganhou</p>
      ) : (
        generatedLetters.map((index, letters) => (
          <span key={letters}> {index}</span>
        ))
      )}
    </main>
  );
}
