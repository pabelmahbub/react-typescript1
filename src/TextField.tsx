import React from 'react';
import './App.css';


//props
//hooks
//render props
interface Person{
    firstName: string;
    lastName: string;
}

interface Props{
    text:string;
    ok?:boolean;
    i?:number;
    fn?:(bob: string)=> string;
    person: Person;

}

const TextField:React.FC<Props> = () =>{
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default TextField;