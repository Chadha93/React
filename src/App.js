import React from "react"; 
 
function App() {   

  const sayHello = () => {
    console.log("Say Hello")
  }
  return(
     <div>                         {/*this is not actually HTML its the JSX*/} 
      <h1>Hello World React</h1>
      <button onClick={sayHello}></button>
    </div>
  );
}

export default App;