import React from "react";
import "./foundstyle.css";
import SecondDev from "./SecondDev";



class Thefoundation extends React.Component {
  constructor(props) {
    super(props);
    this.PortDevparallel = this.PortDevparallel.bind(this);
    this.PortDevsuccessively = this.PortDevsuccessively.bind(this);
    this.PortDevmixed = this.PortDevmixed.bind(this);
    const headingcascade ={
      color:'#444447',
      font:'700 25px monospace',
      letterSpacing:'2px',
      textAlign:'center',
      marginTop:'54px',
      lineHeight:'1.5'
    };
    this.radioparts = {
      data: <h1 style={headingcascade}>Формулы расчета радиодеталей</h1>
    };
    const stylescale={
      color:'#2a2b2b',
      font:'700 17px monospace',
      letterSpacing:'2px',
     lineHeight:'2',
     textAlign:'center'
  }; 
  
    this.resistor = {
      association: <h4 style={stylescale}>Р е з и с т о р</h4>
    };
    this.inductance ={
      region: <h4>Индуктивность</h4>
    }
  }
 
  
  PortDevparallel() {
    let fromblock_1 = document.getElementById("Devport_1").value;
    let fromblock_2 = document.getElementById("Devport_2").value;

    let scale_area_1 = fromblock_1 * fromblock_2;
    let scale_area_2 = Number(fromblock_1) + Number(fromblock_1);
    let naite = scale_area_1 / scale_area_2;
    document.getElementById("First_display").innerHTML = naite;
  }
  PortDevsuccessively() {
    let fromblock_3 = document.getElementById("Devport_3").value;
    let fromblock_4 = document.getElementById("Devport_4").value;
    let fromblock_5 = document.getElementById("Devport_5").value;
    let fromblock_6 = document.getElementById("Devport_6").value;

   
    let scale_area_3 = Number(fromblock_3) + Number(fromblock_4) 
    
    +Number(fromblock_5) + Number(fromblock_6);
   
    document.getElementById("Second_display").innerHTML = scale_area_3;
  }
  PortDevmixed(){
    let fromblock_7 = document.getElementById("Devport_7").value;
    let fromblock_8 = document.getElementById("Devport_8").value;
    let fromblock_9 = document.getElementById("Devport_9").value;
    let fromblock_10 = document.getElementById("Devport_10").value;
    

    let scale_area_4_1 = fromblock_8 * fromblock_9;
    let scale_area_4_2 = Number(fromblock_8) + Number(fromblock_9);

    let daite = scale_area_4_1 / scale_area_4_2;


    let scale_area_4 = Number(fromblock_7)+daite+ Number(fromblock_10); 
    
    
   
    document.getElementById("Third_display").innerHTML = scale_area_4;
          
   
  }

  render() {
   
    const stylescale1={
      color:'#454647',
      font:'700 24px Tachoma',
      letterSpacing:'2px'
};
const stylescale2={
  color:'#454647',
  font:'700 24px Tachoma',
  letterSpacing:'2px'
};  
const stylescale3={
  color:'#454647',
  font:'700 20px Tachoma',
  letterSpacing:'2px'
};
const inputcascade={
   width:'100%',
    textAlign:'center',
};
const butcascade = {
  width:'50%',
  padding: "27px",
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
const stylecascadeview ={
  font:'900 34px monospace',
color:'#37383d',
 letterSpacing:'4px',
lineHeight:'3.5',
 transition:'0.96s'
}
const inpblock={
  cursor:'pointer',
 
  height:'40px',
 font:'600 24px monospace',
     width:'17%',
     textAlign:'center',
    marginRight:'8px',


haight:'40px',
color:'#3d448f',
backgrond:'black'
}

    return (
    
      <div>
         {this.radioparts.data},
         {this.resistor.association}
        <div className="Dev_response_resistor-1">
           <h4 style={stylescale1}> R =R1*R2/R1+R2</h4>
           <h2 className="styleblock_cascade">
          <div style={inputcascade}>
                <input type="text" id="Devport_1" name="R1" style={inpblock} placeholder="R1" />&#8194;
                <input type="text" id="Devport_2" style={inpblock} name="R2" placeholder="R2" />
          </div>
          <button onClick={this.PortDevparallel} style={butcascade}>вывод</button>
             <div id="First_display" style={stylecascadeview}></div>
             </h2>
        </div>

        <div className="Dev_response_resistor-2">
           <h4 style={stylescale2}> R =R1+R2+R3+R4</h4>
            
                  <div className="styleblock_cascade">
                        <div style={inputcascade}>
                         <h6> <input type="text" id="Devport_3"  style={inpblock} name="R1" placeholder="R1" /></h6>
                         <h6> <input type="text" id="Devport_4" name="R2" style={inpblock} placeholder="R2" /></h6>
                         <h6> <input type="text" id="Devport_5" style={inpblock} name="R3" placeholder="R3" /></h6>
                         <h6> <input type="text" id="Devport_6" name="R4" placeholder="R4" style={inpblock}/></h6>
                        </div>
                  
                <button onClick={this.PortDevsuccessively} style={butcascade}>вывод</button>


            
                  <div id="Second_display" style={stylecascadeview}></div>
             </div>
        </div>
 
        <div className="Dev_response_resistor-3">
           <h4 style={stylescale3}> R =R5+(R6*R7/R6+R7)+R8</h4>
       <div className="styleblock_cascade">
              <div style={inputcascade}>
                        <h6><input type="text" style={inpblock} id="Devport_7" name="R5" placeholder="R5" /></h6>
                        <h6><input type="text" id="Devport_8"  style={inpblock} name="R6" placeholder="R6" /></h6>
                        <h6><input type="text" style={inpblock} id="Devport_9" name="R7" placeholder="R7" /></h6>
                      <h6>  <input type="text" id="Devport_10"style={inpblock} name="R8" placeholder="R8" /></h6>
                </div>
       
          <button onClick={this.PortDevmixed} style={butcascade}>вывод</button>
             <div id="Third_display" style={stylecascadeview}></div>
       </div>
        </div>
                <SecondDev/>
           
      </div>
    );
  }
}

export default Thefoundation;
