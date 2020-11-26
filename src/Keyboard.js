const Keyboard = function ({letters, onClick}){
    return letters.map((letter, index)=>{
        return (
            <span key={index} onClick={onClick} className="keyboard-letter">
              {letter}
            </span>
        
        )
        })
    
  }
  
  export default Keyboard;