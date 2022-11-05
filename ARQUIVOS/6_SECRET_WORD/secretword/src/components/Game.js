import './Game.css'
import { useState, useRef } from 'react';

function Game(
    {   
        verifyLetter,
        pickedWord,
        pickedCategory,
        letters,
        guessedLetters,
        wrongLetters,
        guesses,
        score,
    }
    ) {


      
        

    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('A ', letter)

        verifyLetter(letter)

        setLetter('')

        letterInputRef.current.focus()
    }
    
    return (
        
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Advinhe a palavra</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className='letter'>{letter}</span>
                    ) : (
                        <span key={i} className='blankSquare'></span>
                    )
                ))}
            </div>
            <div className="letterContainer">
                <p>Tente advinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        value={letter}
                        type="text"
                        name="letter"
                        maxLength="1"
                        ref={letterInputRef}
                        required
                        onChange={(e) => setLetter(e.target.value)}
                    />
                    <button>Jogar!</button>
                </form>inalizar o jogo
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utlizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        
        </div>);
}

export default Game;