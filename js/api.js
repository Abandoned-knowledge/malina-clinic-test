export let chunk = 5;

export async function fetchUsers() {
  const url = "https://dummyjson.com/users";
  const response = await fetch(url);
  const { users } = await response.json();

  const filteredUsers = await users.map(
    ({ id, firstName, lastName, age, gender, email, phone }) => ({
      id,
      fullName: `${lastName} ${firstName}`,
      age,
      gender,
      email,
      phone,
    })
  );
  return filteredUsers;
}

export async function getUserKeys() {
  const users = await fetchUsers();
  const userKeys = Object.keys(users[0]);
  return userKeys;
}