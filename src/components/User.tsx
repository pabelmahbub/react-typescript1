import React,{FC} from 'react'
import UserModel from '../types/models'

/*props defining:
1.const User=(props:{age:number})=> {
2.const User: FC<{age: number}> = (props)=> {
    3.const User: FC<{age?: number, name?:string}> = (props)=> {
4. interface Props{
    age?: number,
    name?:string
//
*/
//  interface Props{
//      age?: number,
//      name?:string,
//      addUser:() => void
//  }
 interface Props{
  user: UserModel,
  addUser: (user:UserModel)=> void
 }

const User: FC<Props> = ({user,addUser})=> {
   
  return (
    <div style={{backgroundColor:'cyan', margin:"10px",padding:'10px'}}>
        <h2>Hello from {user.name}</h2>
        <h3>Email is  {user.email}</h3>
        <button onClick={()=> addUser(user)}> Add User</button>
    </div>
  )
}

export default User;