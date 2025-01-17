import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('');

  const buttonClick = (value) => {
    setInput(newval => newval+value)
  };

  const clearInput = () => {
    setInput('');
  };

  const deleteInput =() =>{
    setInput(input.slice(0,-1))
  }

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      alert('Invalid expression');
    }
  };

  return (
    <>
         <h4 className='text-center fw-bolder mt-4'>Calculator</h4>
    
        <div  className='container text-center bg-light shadow  w-25  ' style={{height:"450px"}}>
        <input className='border rounded p-2 m-3 display' value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder='0'  readOnly />
      
          <div className='but ms-5'  >
            <button style={{ backgroundColor: 'lightblue', }} className='btn' onClick={clearInput}  >AC </button>
            <button style={{ backgroundColor: 'lightblue',  }}className='btn 'onClick={deleteInput}>Del</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('/')}>/</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('9')} >9</button>
            <button style={{ backgroundColor: 'lightblue', }} className='btn'onClick={()=>buttonClick('8')}>8</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('7')}>7</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('6')}>6</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('5')}>5</button>
            <button style={{ backgroundColor: 'lightblue', }} className='btn'onClick={()=>buttonClick('4')} >4</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('3')}>3</button>
            <button style={{ backgroundColor: 'lightblue', }} className='btn'onClick={()=>buttonClick('2')}>2</button>
            <button style={{ backgroundColor: 'lightblue', }} className='btn'onClick={()=>buttonClick('1')}>1</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('0')}>0</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('+')}>+</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn'onClick={()=>buttonClick('-')}>-</button>
            <button style={{ backgroundColor: 'lightblue',  }} className='btn 'onClick={()=>buttonClick('*')}>*</button>


            <button style={{ backgroundColor: 'lightblue', color: 'white' }} className='equal btn ' onClick={calculateResult}>=</button>
          </div>
         </div>
       
  
  
   
 
    
   
    
    </>
  )
}

export default App
