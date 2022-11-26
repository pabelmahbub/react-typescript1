import React,{useState, useEffect} from 'react';
import User from './User';
import UserModel from '../types/models';

const Users = () => {
  const [users, setUsers] = useState<UserModel[]>([])
  const [myTeam, setMyTeam] = useState<UserModel[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data));
  }, [])
  
  const handleAddUser =(user: UserModel): void=>{
    const newTeam = [...myTeam, user];
    setMyTeam(newTeam);

  }
  return (
    <div>
      <h2>My Users</h2>
      <h4>Team Member:{myTeam.length}</h4>
      {/* <User name={'Hira'} addUser={handleAddUser}></User> */}
      {
        users.map(user => <User user={user} addUser={handleAddUser}></User>)
      }
    </div>
  )
}

export default Users
