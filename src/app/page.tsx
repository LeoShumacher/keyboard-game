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

  return (
    <main>
      <button onClick={RandomKey}>RANDOM</button>
      {showLetter ? <p>{showLetter}</p> : ""}
    </main>
  );
}
