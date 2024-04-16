async function fetchUsers() {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    const data = await response.json();
    const users = await data.users;
    const filteredUsers = await users.map((el) => ({
      id: el.id,
      fullName: `${el.lastName} ${el.firstName}`,
      age: el.age,
      gender: el.gender,
      phone: el.phone,
      username: el.username,
    }));
  
    return filteredUsers;
  }
  
  export async function getUserKeys() {
    const users = await fetchUsers();
    const user = await users[0];
    const userKeys = await Object.keys(user);
  
    return userKeys;
  }