import React, {ChangeEvent, FormEvent, useState} from 'react';
import UserModel from '../types/models';

interface User{
    name?:string,
    job?:string,
    counter: number
}
const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    // const [user, setUser] = useState<User | null>(null);

    const handleIncrease = () : void=>{
        setCounter(counter + 1)

    }
    // const handleSubmit =(e: FormEvent<HTMLFormElement>)=>{
    //     e.preventDefault();
    //     const userData ={

    //     }
    //      setUser(userData)

    // }

    // const handleNameChange =(e: ChangeEvent<HTMLInputElement>)=>{

    // }


  return (
    <div>
      <h2>This is Counter:{counter}</h2>
      <button onClick={handleIncrease}>Press to count</button>
    </div>
  )
}

export default Counter
