import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';
//import TextField from './TextField';



let student :string ='Abir';
let age: number = 88;
let students : string[] = ['abir', 'goni'];
let fees: number[] = [8,89,76,54];

const person:{name:string, age:number,profession:string} ={
  name:'Bill',
  age:87,
  profession:'engineer'
}
 const handleUser = (firstName: string, age: number, employed: boolean):number=>{
  const total:number =78;
  console.log(firstName, age);
  return age;
 }



const App:React.FC =() =>{
  return (
    <div>
      <Users />
      <Counter />
    </div>
  );
}

export default App;
