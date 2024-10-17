import { useState, useEffect } from "react";
import { useApi } from "../apiV3";

export default function Pages() {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);

      useEffect(() => {
      const fetchUsers = async () => {
        const users = await useApi('users').getAll();
        setUsers(users);
      }
      setIsLoading(true);
      fetchUsers();
      setIsLoading(false);
    }, []);

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Pages!</h2>
      <ul>
        {console.log("users:", users)}
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
        </ul>
    </div>
  );
}