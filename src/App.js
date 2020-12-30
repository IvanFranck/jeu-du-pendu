
import {useEffect, useState} from 'react';
import './index.css';

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase().split('');
const WORDTOFIND = "ivan".toUpperCase();


function App () {

    const [usedLetters, setUsedLetters] = useState(new Set())
    const [guesses , setGuesses] = useState(0);
    const [score, setScore] = useState(0);
    const initialStates = {
        score: 0,
        guesses: 0,
        usedLetters: new Set()
    }
    let won = false
    
    // const reg = /\w/g
    // let fallback = WORDTOFIND.replace(reg, '_');

    const handleClick = (event) =>{
        if (usedLetters.has(event.target.innerText)){
            console.log("deja utilisée")
            setScore(score-2)
        }else if(WORDTOFIND.split('').includes(event.target.innerText)){
            console.log("bingo")
            setScore(score+2)
        }else{
            console.log("raté")
            setScore(score-1)
        }
        setUsedLetters(usedLetters.add(event.target.innerText))
        setGuesses(guesses+1)
        
    }

    const handleReplay = () =>{
        setScore(initialStates.score)
        setGuesses(initialStates.guesses)
        setUsedLetters(initialStates.usedLetters)
    }

    
    let matchedLetter = 0
    WORDTOFIND.split('').forEach(letter=>{
        if (usedLetters.has(letter)) matchedLetter ++
    })
    if (matchedLetter === WORDTOFIND.split('').length) won = true
    console.log(matchedLetter)
    

    


   if (won){
       return (
           <div>
               vous avez gagné 
               <button onClick={handleReplay}>rejouer</button>
           </div>
       )
   }

   return(
       <div>
           {console.log(won)}
           <div>
                {'coups :' + guesses}
            </div>
            <div>
            {'score :'+score}
            </div>

            {WORDTOFIND.split('').map((letter, index)=>{
                if(!usedLetters.has(letter)) letter = "_"

                return (
                    <span key={index}>
                        {letter}
                    </span>
                )
            })}
            

            <div>
                {
                    ALPHABET.map((letter, index)=>{
                        return(
                            <button
                                key = {index}
                                onClick = {handleClick}
                            >   
                                {letter}
                            </button>
                        )
                    })
                }
            </div>
       </div>
   )

} 

export default App;