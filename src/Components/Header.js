import "./style/Header.css";
import "./style/Ultility.css";

function Header() {
  return (
    <header className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="images/content/logoaja.png"
            alt="Logo"
            width="87"
            height="65"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                FEATURES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                COMMUNITY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary" href="/" role="button">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
