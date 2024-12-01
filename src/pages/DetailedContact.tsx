import { useLoaderData } from "react-router";
import { getbyUuid } from "../api/contactsApi";
import { userType } from "../types/contactsType";

// eslint-disable-next-line react-refresh/only-export-components
export const userDetailsLoader = async ({ params }: userType) => {
  if (!params.contactID) {
    throw new Error("ID not Found");
  }

  const user = await getbyUuid(params.contactID);
  if (!user) {
    throw new Error()
  }
  return { user };
};

function DetailedContact() {
  // with type that is returned from "userDetailsLoader()" 
  const { user } = useLoaderData() as Awaited<ReturnType<typeof userDetailsLoader>>;

  return (
    <>
      <div>Detailed Contact</div>
      <img src={user?.picture.large} alt="picture" />
      <div>
        {user?.name.first} {user?.name.last}
      </div>
      <div>{user?.email}</div>
    </>
  );
}

export default DetailedContact;