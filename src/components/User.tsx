import React,{FC} from 'react'

//props defining:
//const User=(props:{age:number})=> {
//const User: FC<{age: number}> = (props)=> {

const User: FC<{age?: number, name?:string}> = (props)=> {
    const age = props.age;
    const name = props.name;

  return (
    <div>
        <h2>Hello: {name}</h2>
        <User></User>
    </div>
  )
}

export default User;