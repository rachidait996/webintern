import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import routes from "routes.js";

const EspaceEntrepriseAuth = () => {
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
          <Route path={route.path} element={route.component} key={index} exact />
        );
      }
      return null;
    });
  };

  const handleRedirect = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/admingescompany/indexgescompany" />;
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
                  <h1 className="text-white">Welcome to Espace Entreprise</h1>
                  <p className="text-lead text-light">
                  Bienvenue dans l’Espace Entreprise, votre interface dédiée pour gérer et publier vos offres de stage en toute simplicité !                  </p>
                  <Button
                    color="primary"
                    onClick={handleRedirect}
                    className="mt-4"
                  >
                    Go 
                  </Button>
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

export default EspaceEntrepriseAuth;
