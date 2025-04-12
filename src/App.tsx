import { useState } from 'react'
import './App.css'

function App() {
    const [num,setNum] = useState<number>(0);
    const [customizing,setCustomizing] = useState<boolean>(false);
    const [cusValue,setCusValue] = useState<string>(''); 

    function handleSubmit(){
      if (cusValue.trim() !== '' && Number(cusValue.trim())){
        setNum(Number(cusValue.trim()))
        setCustomizing(false)
      }else{
        alert('invalid number!Please try again!')
      }
      setCusValue('')
    }

    return <div className='counter'>
      <span className='screen'>
        {customizing?
        <div className='customize-box'>
          <input placeholder='Value' value={cusValue} onChange={(e) => setCusValue(e.target.value)}/>
          <button onClick={handleSubmit} className='sbm-btn'>submit</button>
        </div>
        :num}
      </span>  
      <div className='btn'>
        <button onClick={() => setNum(num-1)}>-</button>
        <button onClick={()=> setCustomizing(true)}>customize</button>
        <button onClick={() => setNum(num+1)}>+</button>
      </div>   
    </div>  
}

export default App