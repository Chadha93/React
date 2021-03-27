import React from "react"; 
import Tweet from "./tweet";

 
function App() {   

  return(
     <div className="app">
       <h1>Hello React</h1>                      {/*this is not actually HTML its the JSX*/} 
    <Tweet name="Gora" message ="This is a random tweet"/>
    <Tweet name="Palli" message ="This is not a random tweet"/>
    <Tweet name="Nanu" message ="This all is a random tweet"/>
    </div>
  );
}

export default App;