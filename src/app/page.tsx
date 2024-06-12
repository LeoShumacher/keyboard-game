"use client"
export default function Home() {
  let alphabet = [ 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z'
  ]

  function RandomKey() {
    const letter = alphabet[~~(Math.random() * alphabet.length)];
    console.log(letter)
    return letter
  }

  return (
    <main>
      <button onClick={RandomKey}>RANDOM</button>
    </main>
  );
}
