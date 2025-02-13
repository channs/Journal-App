import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav-header">
          <Link to="/" className="nav-brand">
            Technology Leadership Journal
          </Link>
          
          <div>
            <Link to="/entries/new" className="btn">
              ✏️ New Entry
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
