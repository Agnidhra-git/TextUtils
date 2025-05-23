import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const changeTheme = (theme) => {
    document.body.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger');
    document.body.classList.add(theme);
    props.showAlert(`Theme changed to ${theme}`, "success");
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" to="/">{props.home}</Link> */}
              <a className="nav-link active" href="">{props.home}</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li> */}
          </ul>

          <div className="d-flex">
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDark"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDark">
                Dark Mode
              </label>
            </div>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                onClick={props.turnGreen}
                type="checkbox"
                id="flexSwitchCheckGreen"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckGreen">
                Light/Dark Green
              </label>
            </div>
            <div className="theme-buttons" style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary" onClick={() => changeTheme('bg-primary')}>Primary</button>
              <button className="btn btn-secondary" onClick={() => changeTheme('bg-secondary')}>Secondary</button>
              <button className="btn btn-success" onClick={() => changeTheme('bg-success')}>Success</button>
              <button className="btn btn-danger" onClick={() => changeTheme('bg-danger')}>Danger</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string
};

Navbar.defaultProps = {
  title: "Set title here",
  home: "Set home here",
  about: "Set about here"
};
