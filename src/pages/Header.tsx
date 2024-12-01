import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-black w-full h-[50px] flex items-center justify-between p-5">
      <div>
        <Link to={"/"}>Logo</Link>
      </div>
      <div>
        <Link to={"/contacts"}>Contacts Page</Link>
      </div>
    </header>
  );
}

export default Header;
