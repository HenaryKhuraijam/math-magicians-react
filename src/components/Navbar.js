import { Outlet, Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="mobile">
      <h1 className="m-0 p-0 text-black pad1">Math Magicians</h1>
      <ul className="w-25 d-flex align-items-center justify-content-center m-0 p-0">
        <li className="border-end border-white border-3 px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="border-end border-white border-3 px-2">
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li className="px-2">
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default NavBar;
