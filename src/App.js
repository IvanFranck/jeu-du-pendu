import {Component} from 'react'
import Keyboard from './Keyboard'
import './App.css';

const KEYBOARD = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const MOT_A_TROUVER = 'JAVA'
class App extends Component{
  state = {
    wordToFind: MOT_A_TROUVER,
    usedLetter: new Set(),
    won: false
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
    const usedLetter = this.state.usedLetter
    const newUsedLetter = usedLetter.add(e.target.innerText)
    this.setState({usedLetter: newUsedLetter})

    this.handleNewLetterFind()
  }

  //arrow fx for binding

  handleNewgame= () =>{
    this.setState({
      wordToFind: MOT_A_TROUVER,
      usedLetter: new Set(),
      won: false
    })
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
    const {wordToFind, usedLetter, won} = this.state
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
