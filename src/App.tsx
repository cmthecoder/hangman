import { useState } from "react"
import words from './wordList.json'


function App() {
  const [wordToGuess, setWordToGues] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)

  return (
    <div>Hi</div>
  )
}

export default App
