type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none p-0">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="border border-gray-400 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {user.name}
            </h2>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
