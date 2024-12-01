import { Link } from "react-router";

function UserNotFound() {
  return (
    <div>
      UserNotFound
      <br />
      <Link to={"/contacts"}>go to contact page</Link>
    </div>
  );
}

export default UserNotFound;
