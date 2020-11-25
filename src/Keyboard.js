const Keyboard = function ({letters, onClick}){
    return letters.map(letter=>{
        return (
            <span key={letter} onClick={onClick} className="keyboard-letter">
              {letter}
            </span>
        
        )
        })
    
  }
  
  export default Keyboard;