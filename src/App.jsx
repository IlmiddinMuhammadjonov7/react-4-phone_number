import React, { useState } from "react";

const App = () => {
  const [malumot, setMalumot] = useState("");
  const [active, setActive] = useState("Beeline");
  function handleChange(e) {
    setMalumot(e.target.value);
    if (malumot.length == 1) {
      if (e.target.value=="90" || e.target.value=="91") {
        setActive("Beeline")
      }else if(e.target.value=="33"){
        setActive("Humans")
      }else if(e.target.value=="93" || e.target.value=="94" || e.target.value=="97"){
        setActive("Ucell")
      }else if(e.target.value=="99"){
        setActive("Uzmobile")
      }
      setMalumot(e.target.value+" " );
    } else if (malumot.length == 5 || malumot.length == 8) {
      setMalumot(e.target.value+"-");
    } else {
      setMalumot(e.target.value);
    }
  }
  function handleSubmit(e) {
    if (malumot.length == 2) {
      if (malumot=="90" || malumot=="91") {
        setActive("Beeline")
      }else if(malumot=="33"){
        setActive("Humans")
      }else if(malumot=="93" || malumot=="94" || malumot=="97"){
        setActive("Ucell")
      }else if(malumot=="99"){
        setActive("Uzmobile")
      }
      setMalumot(malumot + " " + e);
    } else if (malumot.length == 6 || malumot.length == 9) {
      setMalumot(malumot + "-" + e);
    } else {
      setMalumot(malumot + e);
    }
  }
  function handleClear(){
    setMalumot("")
  }
  return (
    <div className="main">
      <div className="main_list">
        <h1 className="qism">Raqamni shu holda kiriting: <span>901234567</span></h1>
        <div className="joy">
          {/* <h1>{malumot}</h1> */}
          {active=="Beeline"?<img src="/Beeline.png" alt="" />:active=="Ucell"?<img src="/Ucell.png" alt="" />:active=="Uzmobile"?<img src="/Uzmobile.png" alt="" />:active=="Humans"?<img src="/Humans.png" alt="" />:<img src="/Beeline.png" alt="" />}
          <input type="text" onChange={handleChange} value={malumot} disabled/>
        </div>
        <div className="tugmalar">
          <button onClick={(e) => handleSubmit(e.target.innerText)}>1</button>
          <button onClick={(e) => handleSubmit(e.target.innerText)}>2</button>
          <button onClick={(e) => handleSubmit(e.target.innerText)}>3</button>
          <button onClick={(e) => handleSubmit(e.target.innerText)}>4</button>
          <button onClick={(e) => handleSubmit(e.target.innerText)}>5</button>
          <button onClick={(e) => handleSubmit(e.target.innerText)}>6</button>
          <button onClick={(e) => handleSubmit(e.target.innerText)}>7</button>
          <button onClick={(e) => handleSubmit(e.target.innerText)}>8</button>
          <button onClick={(e) => handleSubmit(e.target.innerText)}>9</button>
        </div>
        <div className="bottom">
          <button className="tugma_nol" onClick={(e) => handleSubmit(e.target.innerText)}>0</button>
          <button className="tugma_clear" onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
