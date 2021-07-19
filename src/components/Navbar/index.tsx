
import { Link } from 'react-router-dom';
import './styles.css';
const Navbar = () => {
    return (
      <nav className="navbar bg-primary main-nav">
        <Link to="/" className="nav-logo-text">
          <h4>GitHub API</h4>
        </Link>
      </nav>
    );
  };
  
  export default Navbar;