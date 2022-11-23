import React, {FormEvent, useState} from 'react';

interface User{
    name?:string,
    job?:string
}
const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    const handleIncrease = () : void=>{
        setCounter(counter + 1)

    }
    const handleSubmit =(e: FormEvent)=>{
        e.preventDefault();
        const userData ={

        }
         setUser(userData)

    }


  return (
    <div>
      <h2>This is Counter:{counter}</h2>
      <button onClick={handleIncrease}>Press to count</button>
    </div>
  )
}

export default Counter
