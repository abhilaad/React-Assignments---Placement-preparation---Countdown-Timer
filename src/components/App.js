import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  let [counter, setCount] = useState(0);
 
  let yo;
  let z = 0;
  let interval;
 
  let y = () =>{
   
    interval = setInterval(() => {
      console.log(counter + "inside");
      
      setCount(counter--);
        
      if (counter < 0 || counter == "NaN") {
        clearInterval(interval);
        
      }
    }, 1000);
    console.log(interval + "  yuuooiii")
    
    
  }

            
      useEffect(
        ()=>{
          
          console.log("effected")
        return () => {clearInterval(interval); };
        },[interval]
      )
     
    
    
 
  const onKeyPressed = (e)=> {
    
     yo = Number(e.key);
     if(typeof(yo)=="number" && !Number.isNaN(yo)){
      setCount(counter= counter?counter.toString()+yo.toString() : yo);

      
      console.log(counter);  
       

       }
       if(e.key=="Enter"){
         
         y()
       
       }

     else console.log("elseeee");
     

     } 
     let changes = (e)=>{
      setCount(e.target.value); 
    
      
    
  }
  

  return (
    <div className="wrapper">   HI
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={onKeyPressed} onChange={changes} /> sec.
        </h1>
      </div>
      <div id="current-time">{counter?counter:z}</div>
    </div>
  )
}

export default App;



