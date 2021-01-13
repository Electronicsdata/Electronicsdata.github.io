import React from "react";
import "./foundstyle.css";


function SecondDev() {
  function Scale(props) {
    return (
      <div className="blockst">
        <h6 style={stylescale1}>{props.cascade_1}</h6>
        <h5 style={stylescale2}>{props.cascade_3}</h5>
        <h6 style={stylescale3}>{props.cascade_2}</h6>
      </div>
    );
  }
  const stylescale1={
           color:'#454647',
           font:'700 24px Tachoma',
           letterSpacing:'2px'
  };
  const stylescale2={
    color:'#2a2b2b',
    font:'700 17px monospace',
    transition: "1.4s",
    letterSpacing:'2px',
   lineHeight:'2'
};  
const stylescale3={
  color:'#2a2b2b',
  font:'700 17px monospace',
  lineHeight:'2',
  transition: "1.4s",
  letterSpacing:'2px'
}  
  
  this.inver = {
    stips: (
      <Scale
        cascade_1="
        L=r2*N2/9*r+10*l
        "
        cascade_2="
              L = индуктивность в мкГн
              r = внешний радиус катушки
              N = число витков
              l = длина катушки

        "
      />
    ),
    useds: (
      <Scale
        cascade_3="
    Индуктивность катушки с воздушным сердечником"
     />
    )
  };

  const butcascade = {
    width:'50%',
    padding: "27px",
    backgrond: "grey",
    border: "0",
    background: "#e4e7f5",
    font: "600 16px Arial",
    lineHaight: "2.5",
    color: "#454a4d",
    letterSpacing:"2px",
    transition: "1.4s",
    textAlign:'center',
    marginTop: "15px",
    
  };

  const inputcascade={
  float:'right',
  
    width:'100%',
    textAlign:'center',
}
const stylecascadeview ={
  font:'900 34px monospace',
color:'#37383d',
 letterSpacing:'4px',
lineHeight:'3.5',
 transition:'0.96s',
 margin:'20px'
}
const inpblock={
  cursor:'pointer',
  height:'40px',
 font:'600 24px monospace',
     width:'17%',
     textAlign:'center',
    haight:'40px',
color:'#3d448f',
backgrond:'black'

}
  return (
    <h2 className="styleblock_cascade">
      {this.inver.useds}
      <div id="Indblock" style={stylecascadeview} >{this.inver.stips}</div>
      <div style={inputcascade}>
             <h6> <input type="text" id="inductance_1" placeholder="r" style={inpblock}/></h6>
             <h6> <input type="text" id="inductance_2" placeholder="N" style={inpblock}/></h6>
             <h6> <input type="text" id="inductance_3" style={inpblock} placeholder="r"  /></h6>
             <h6> <input type="text" id="inductance_4" placeholder="I" style={inpblock}/></h6>
      </div>

      <button onClick={tup} style={butcascade}>
            вывод
      </button>
    </h2>
  );

  function tup() {
    let variablecascade_1 = document.getElementById("inductance_1").value;

    let variablecascade_2 = document.getElementById("inductance_2").value;
    let variablecascade_3 = document.getElementById("inductance_3").value;
    let variablecascade_4 = document.getElementById("inductance_4").value;

    let blockvariable_cascade_1 =
      variablecascade_1 *
      variablecascade_1 *
      (variablecascade_2 * variablecascade_2);

    let blockvariable_cascade_2 =
      Number(9 * variablecascade_3) + Number(10 * variablecascade_4);

    const mainCascaDe = blockvariable_cascade_1 / blockvariable_cascade_2;

    document.getElementById("Indblock").innerHTML = mainCascaDe;
  }
}

export default SecondDev;
