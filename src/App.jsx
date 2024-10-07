import './App.css'
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('black');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
     <div className='d-flex justify-content-center align-item-center mt-4'>
       <div className='text-center' style={{width:'500px',height:'500px',backgroundColor:bgColor}}>
        <h4 className='text-light mt-5'>BACKGROUND COLOR CHANGE</h4>
        <button onClick={() => changeColor('red')} className='button-style'>RED</button>
        <button onClick={() => changeColor('blue')} className='button-style'>BLUE</button>
        <button onClick={() => changeColor('green')} className='button-style'>GREEN</button>
        <button onClick={() => changeColor('purple')} className='button-style'>PURPLE</button>
        <button onClick={() => changeColor('orange')} className='button-style'>ORANGE</button>
       </div>
     </div>
    </>
  )
}

export default App
