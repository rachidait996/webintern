// MainPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

const MainPage = function () {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="6" md="8">
                  <h1 className="text-white">Bienvenue à WebIntern!</h1>
                  <p className="text-lead text-light">
                    Bienvenue sur WebIntern, votre plateforme dédiée à la gestion des stages, conçue pour simplifier l'expérience des entreprises et des étudiants de l'ENSIAS !
                  </p>
                  <div className="mt-4">
                    <Button
                      color="primary"
                      size="lg"
                      className="mr-3"
                      onClick={() => handleNavigate("/espace-entreprise")}
                    >
                      Espace Entreprise
                    </Button>
                    <Button
                      color="success"
                      size="lg"
                      className="mr-3"
                      onClick={() => handleNavigate("/espace-etudiant")}
                    >
                      Espace Étudiant
                    </Button>
                    <Button
                      color="info"
                      size="lg"
                      className="mr-3"
                      onClick={() => handleNavigate("/espace-gestionnaire-ensias")}
                    >
                      Espace Gestionnaire ENSIAS
                    </Button>
                    <Button
                      color="warning"
                      size="lg"
                      onClick={() => handleNavigate("/espace-admin")}
                    >
                      Espace Admin
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="8" md="10">
              <p className="text-center text-muted">
                Sélectionnez un espace pour continuer.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default MainPage;
