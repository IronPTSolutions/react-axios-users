import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/users">
          Navbar
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
