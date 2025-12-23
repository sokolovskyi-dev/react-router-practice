let users = [
  { id: 'u1', name: 'Alice' },
  { id: 'u2', name: 'Bob' },
  { id: 'u3', name: 'Charlie' },
];

export function getUsers() {
  return [...users];
}

export function getUserStats() {
  return {
    totalUsers: users.length,
    lastUser: users[users.length - 1]?.name ?? null,
  };
}

export function getUserById(id) {
  return users.find(u => u.id === id) ?? null;
}
