import { Link } from 'react-router-dom';
import './styles.css';
const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
        <Link to="/profilesearch">
          <button className="btn btn-primary">
            <h6>Começar</h6>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
