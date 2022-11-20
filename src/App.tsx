import React from 'react';
import './App.css';
import TextField from './TextField';


//props
//hooks
//render props


const App:React.FC =() =>{
  return (
    <div>
      <TextField text='hello' person={{firstName: "", lastName:""}}></TextField>
    </div>
  );
}

export default App;
