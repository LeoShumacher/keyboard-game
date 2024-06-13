"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [generatedLetters, setGeneratedLetters] = useState<string[]>([]);
  const [showLetter, setshowLetter] = useState<String>();
  const alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      const keyCode = event.keyCode || event.which;

      if (
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122)
      ) {
        const keyPress = String.fromCharCode(keyCode).toUpperCase();
        console.log("Letra:", keyPress);

        if (generatedLetters.includes(keyPress)) {
          alert("Acertou a letra!");
        }
      }
    });
  }, [generatedLetters]);

  function RandomKey() {
    const RandomLetters: string[] = [];

    for (let i = 0; i < 5; i++) {
      const letter = alphabet[~~(Math.random() * alphabet.length)];
      RandomLetters.push(letter);
    }
    setGeneratedLetters(RandomLetters);
    const letters = RandomLetters.join("");
    setshowLetter(letters);
    console.log(letters);
    return letters;
  }

  return (
    <main className="flex flex-wrap gap-10">
      <button onClick={RandomKey}>RANDOM</button>

      {showLetter ? <p className="text-red-500">{showLetter}</p> : ""}
    </main>
  );
}
