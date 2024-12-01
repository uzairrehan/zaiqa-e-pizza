import { Link, useLoaderData } from "react-router";
import { getAllUsers } from "../api/contactsApi";

export const usersLoader = async () => {
  const users = await getAllUsers();
  return { users };
};

function Contacts() {
  // with type that is returned from "usersLoader()"
  const { users } = useLoaderData() as Awaited<ReturnType<typeof usersLoader>>;
  return (
    <>
      <div className="flex flex-col p-3 gap-4">
      {users.map((user) => (
        <Link
          key={user.login.uuid}
          to={`/contacts/${user.login.uuid}`}
          className="pr-4"
        >
          {user.name.first} {user.name.last}
        </Link>
      ))}
      </div>
    </>
  );
}

export default Contacts;
