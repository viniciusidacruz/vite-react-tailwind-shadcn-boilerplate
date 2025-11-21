import { Title } from "@/shared/components";
import { useGetAllUsers } from "@public/hooks";

export const HomePage = () => {
  const { data: users, isLoading } = useGetAllUsers();
  return (
    <main>
      <Title className="mb-8">Home Page - React Boilerplate</Title>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {users?.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
    </main>
  );
};
