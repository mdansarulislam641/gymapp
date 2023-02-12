import React, { useEffect, useState } from 'react';
import {getDocs, collection} from 'firebase/firestore';
import database from '../../firebase/firebaseDatabase/database';
const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(database , "users");
  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs?.map((doc)=>({...doc.data(), id: doc.id})));

    }
    getUsers()
  },[])
  console.log(users)  
    return (
        <div className="overflow-x-auto py-20">
  <table className="table table-zebra w-[1100px] mx-auto">
    <thead>
      <tr>
        <th>Sl</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
        {
          users?.map((user,idx) => <tr key={user.id}>
            <td>{idx + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>)
        }
    </tbody>
    <h2 className='text-xl font-bold font-serif mt-10'>Users : {users.length}</h2>
  </table>
</div>
    );
};

export default UserProfile;