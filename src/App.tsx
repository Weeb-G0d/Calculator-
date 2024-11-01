import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer]= useState("");
const buttonPress = (symbol: string)=>{
    if(symbol==="="){
      try{
        setAnswer(eval(display).toString());
      }
      catch(error){
        setAnswer("error");
      }
    }
    else if(symbol==="c"){
      setDisplay("");
      setAnswer("")
;    }
    else
    setDisplay(display + symbol);
}

  return (
    <>
    <div className='container'>
      <h1>Calculator Application</h1>
      <div id="calculator">
        <div id="display" style={{textAlign:"right"}}>
               
               <div id="expression">{display}</div>
               <div id="answer">{answer}</div>
        </div>
        <br/>
<div className="button-pads">
<button className="light-gray" onClick={()=> buttonPress("c")} id="clear">Clear</button>
<button className="light-gray" onClick={()=> buttonPress("7")} id="seven">7</button>
<button className="light-gray" onClick={()=> buttonPress("8")} id="eight">8</button>
<button className="light-gray" onClick={()=> buttonPress("9")} id="nine">9</button>
<button className="light-gray" onClick={()=> buttonPress("=")} id="equals">=</button>

<button className="light-gray" onClick={()=> buttonPress("4")} id="four">4</button>
<button className="light-gray" onClick={()=> buttonPress("5")} id="five">5</button>
<button className="light-gray" onClick={()=> buttonPress("6")} id="six">6</button>
<button className="light-gray" onClick={()=> buttonPress("/")} id="divide">/</button>

<button className="light-gray" onClick={()=> buttonPress("1")} id="one">1</button>
<button className="light-gray" onClick={()=> buttonPress("2")} id="two">2</button>
<button className="light-gray" onClick={()=> buttonPress("3")} id="three">3</button>
<button className="light-gray" onClick={()=> buttonPress("*")} id="multiply">x</button>

<button className="light-gray" onClick={()=> buttonPress("-")} id="subtract">-</button>
<button className="light-gray" onClick={()=> buttonPress("0")} id="zero">0</button>
<button className="light-gray" onClick={()=> buttonPress(".")} id="decimal">.</button>
<button className="light-gray" onClick={()=> buttonPress("+")} id="add">+</button>

<button className="light-gray" onClick={()=> buttonPress("(")} id="(">(</button>
<button className="light-gray" onClick={()=> buttonPress(")")} id=")">)</button>
<button className="light-gray" onClick={()=> buttonPress("%")} id="modulus">%</button>
<button className="light-gray" onClick={()=> buttonPress("^")} id="power">^</button>


</div>
       
      </div>
    </div>
    </>
  )
   
}

export default App
