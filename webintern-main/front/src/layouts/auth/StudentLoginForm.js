import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, FormGroup, Input, Button, Alert } from "reactstrap";

const StudentLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailEtudiant: "",
    motDePasseEtudiant: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    console.log("Tentative de connexion avec:", formData); // Log des données envoyées

    try {
        const response = await fetch("/api/etudiants/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Réponse du serveur:", data); // Log de la réponse

        if (response.ok) {
            localStorage.setItem("token", data.token);
            // Stocker aussi l'ID de l'étudiant si nécessaire
            if (data.etudiantId) {
                localStorage.setItem("etudiantId", data.etudiantId);
            }
            navigate("/adminstu/indexstu");
        } else {
            setError(data.message || "Email ou mot de passe incorrect.");
        }
    } catch (err) {
        console.error("Erreur lors de la connexion:", err);
        setError("Une erreur s'est produite. Veuillez réessayer plus tard.");
    } finally {
        setLoading(false);
    }
};
  return (
    <Container className="mt-lg-7">
      <Row className="justify-content-center">
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <h2>Connexion Étudiant</h2>
              </div>
              {error && <Alert color="danger">{error}</Alert>}
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Input
                    type="email"
                    name="emailEtudiant"
                    placeholder="Email"
                    value={formData.emailEtudiant}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="motDePasseEtudiant"
                    placeholder="Mot de passe"
                    value={formData.motDePasseEtudiant}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <div className="text-center">
                  <Button color="primary" type="submit" disabled={loading}>
                    {loading ? "Connexion..." : "Se connecter"}
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentLoginForm;
