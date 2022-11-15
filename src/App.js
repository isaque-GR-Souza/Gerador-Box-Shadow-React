import React, { useState } from 'react';
import './App.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState("black")
  const [CheckOn, setCheckOn] = useState(false)
  return (
    <div className="App">
      <div className="controles">
        <div className="caixa">
        <label>Comprimeto Horizontal:</label>
           <input type="range" min="-200" max="200" value={Hori} onChange={(e) => setHori(e.target.value)}/>
           <label>Comprimeto Vertical:</label>
           <input type="range" min="-200" max="200" value={Veri} onChange={(e) => setVeri(e.target.value)}/>
           <label>Efeito de Blur:</label>
           <input type="range" min="0" max="200" value={Blur} onChange={(e) => setBlur(e.target.value)}/>
           <label>Cores: </label>
           <input type="color" value={Color} onChange={(e) => setColor(e.target.value)}/>
           <div className="switch">
              <label>
                Outline
                <input type="checkbox" checked={CheckOn} onChange={() => setCheckOn(!CheckOn)}/>
                <span className="lever"></span>
                Inset
              </label>
           </div>
      </div>
        </div>   
      <div className="output">
        <div className="box" style={{boxShadow:`${CheckOn ?"inset":""} ${Hori}px ${Veri}px ${Blur}px ${Color}`}}>
            <p>Box-Shadow:{Hori}px {Veri}px {Blur}px {Color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
