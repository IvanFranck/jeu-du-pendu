import {Component} from 'react'
import Keyboard from './Keyboard'
import './App.css';

const KEYBOARD = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const MOT_A_TROUVER = 'JAVA'

const INITIAL_STATE = {
  wordToFind: MOT_A_TROUVER,
  usedLetter: new Set(),
  won: false,
  guesses: 0
}
class App extends Component{
  state = {
    wordToFind: MOT_A_TROUVER,
    usedLetter: new Set(),
    won: false,
    guesses: 0
  }


  computedDisplay=(wordToFind, usedLetter)=>{
    const wordDisplayed =  wordToFind.toUpperCase().replace(/\w/g, 
      (letter)=>(usedLetter.has(letter) ? letter: "_"))
    return wordDisplayed.split('').map((letter, index) => {
      return <span key={index} className='word-to-find__letter'>{letter}</span>
    })
  }

  //arrow fx for binding
  handleKeyClick = (e) =>{
    const {usedLetter, guesses}= this.state 
    const newGeusses = guesses + 1
    const newUsedLetter = usedLetter.add(e.target.innerText)
    this.setState({
      usedLetter: newUsedLetter,
      guesses: newGeusses
    })

    this.handleNewLetterFind()
  }

  //arrow fx for binding

  handleNewgame= () =>{
    this.setState(INITIAL_STATE)
  }
  
  //arrow fx for binding
  handleNewLetterFind=()=>{
    const wordsDisplayed = document.querySelectorAll('.word-to-find__letter')
    const size = MOT_A_TROUVER.split('').length
    let letterMissmatched = size
    wordsDisplayed.forEach(item =>{
      if (item.innerText === '_'){
        letterMissmatched--
      }
    })
    const isAllMatched = letterMissmatched === size-1 
    console.log(letterMissmatched,isAllMatched)
    this.setState({won: isAllMatched})
  }

  render(){
    const {wordToFind, usedLetter, won, guesses} = this.state
    if (won){
      return(
        <div className="container">
          Vous avez gagnez
          <div className='keyboard'>
            <button
              onClick={this.handleNewgame}
            >
              rejouer
            </button>
          </div>
        </div>
      )
    }
    return(
      <div className="container">
        <span className='geusses'>{guesses}</span>
        <div className="word-to-find">
          {this.computedDisplay(wordToFind, usedLetter)}
        </div>
        <div className='keyboard'>
        <Keyboard letters={KEYBOARD} onClick={this.handleKeyClick}/>
        </div>
      </div>
    )
  }
}

export default App;
