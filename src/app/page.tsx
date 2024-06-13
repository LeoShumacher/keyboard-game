"use client";

import { useState } from "react";

export default function Home() {
  const [showLetter, setshowLetter] = useState<String>();
  const alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function RandomKey() {
    const RandomLetters: string[] = [];

    for (let i = 0; i < 5; i++) {
      const letter = alphabet[~~(Math.random() * alphabet.length)];
      RandomLetters.push(letter);
    }
    const letters = RandomLetters.join("");
    setshowLetter(letters);
    console.log(letters);
  }

  function getKey() {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      const keyCode = event.keyCode || event.which;

      if (
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122)
      ) {
        const keyPress = String.fromCharCode(keyCode);
        console.log("Letra:", keyPress);
        return keyPress;
      }
    });
  }



  return (
    <main className="flex gap-10">
      <button onClick={RandomKey}>RANDOM</button>
      <button onClick={getKey}>KEY</button>

      {showLetter ? <p>{showLetter}</p> : ""}
    </main>
  );
}
