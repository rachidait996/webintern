import React from "react";
import { useLocation, Route, Routes, Navigate} from "react-router-dom";
import { Container, Row, Col ,Button} from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import routes from "routes.js";

// StudentLoginForm component
const StudentLoginForm = ({ onLoginSuccess }) => {
  const handleSubmit = () => {
    // Simulate a successful login
    onLoginSuccess();
  };

  return (
    <div className="login-form">
      <h2>Login to Your Account</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

const EspaceEtudiantAuth = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainContent.current) mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((route, index) => {
      if (route.layout === "/auth") {
        return (
          <Route
            path={route.path}
            element={route.component}
            key={index}
            exact
          />
        );
      }
      return null;
    });
  };

  const handleLoginSuccess = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/adminstu/indexstu" />;
  }

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome to Espace Etudiant</h1>
                  <p className="text-lead text-light">
                    Explorez des opportunités passionnantes et construisez votre
                    avenir !
                  </p>
                  {/* Ajout du formulaire à la place du bouton */}
                  <StudentLoginForm onLoginSuccess={handleLoginSuccess} />
                  // Dans StudentLoginForm.js, ajoutez ce bouton après le bouton de connexion
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 2560 100"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default EspaceEtudiantAuth;
