import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  Input,
} from "reactstrap";
import Header from "components/Headers/Header";

const GestionnairesEnsiasManagement = () => {
  const [gestionnaires, setGestionnaires] = useState([]);
  const [newGestionnaire, setNewGestionnaire] = useState({
    nomAdminEnsias: "",
    prenomAdminEnsias: "",
    emailAdminEnsias: "",
    motDePasseAdminEnsias: "",
  });
  const [addingRow, setAddingRow] = useState(false);

  useEffect(() => {
    loadGestionnaires();
  }, []);

  const loadGestionnaires = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/gestionnaires-ensias");
      if (response.ok) {
        const data = await response.json();
        setGestionnaires(data);
      } else {
        console.error("Erreur lors du chargement des gestionnaires");
      }
    } catch (error) {
      console.error("Erreur lors du chargement des gestionnaires:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGestionnaire({ ...newGestionnaire, [name]: value });
  };

  const handleAddGestionnaire = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/gestionnaires-ensias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGestionnaire),
      });

      if (response.ok) {
        const savedGestionnaire = await response.json();
        setGestionnaires([...gestionnaires, savedGestionnaire]); // Ajouter à la liste locale
        setNewGestionnaire({
          nomAdminEnsias: "",
          prenomAdminEnsias: "",
          emailAdminEnsias: "",
          motDePasseAdminEnsias: "",
        }); // Réinitialiser le formulaire
      } else {
        console.error("Erreur lors de l'ajout du gestionnaire");
        alert("Erreur lors de l'ajout du gestionnaire");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du gestionnaire:", error);
      alert("Erreur lors de l'ajout du gestionnaire");
    }
  };

  const handleDeleteGestionnaire = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/gestionnaires-ensias/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setGestionnaires(gestionnaires.filter((gestionnaire) => gestionnaire.idAdminEnsias !== id));
      } else {
        console.error("Erreur lors de la suppression du gestionnaire");
        alert("Erreur lors de la suppression du gestionnaire");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du gestionnaire:", error);
      alert("Erreur lors de la suppression du gestionnaire");
    }
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Gestion des Gestionnaires ENSIAS</h3>
                <Button color="primary" onClick={() => setAddingRow(true)}>
                  Ajouter Gestionnaire
                </Button>
              </CardHeader>
              <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nom</th>
                      <th scope="col">Prénom</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mot de passe</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gestionnaires.map((gestionnaire) => (
                      <tr key={gestionnaire.idAdminEnsias}>
                        <td>{gestionnaire.nomAdminEnsias}</td>
                        <td>{gestionnaire.prenomAdminEnsias}</td>
                        <td>{gestionnaire.emailAdminEnsias}</td>
                        <td>{gestionnaire.motDePasseAdminEnsias}</td>
                        <td>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => handleDeleteGestionnaire(gestionnaire.idAdminEnsias)}
                          >
                            Supprimer
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {addingRow && (
                      <tr>
                        <td>
                          <Input
                            type="text"
                            name="nomAdminEnsias"
                            value={newGestionnaire.nomAdminEnsias}
                            onChange={handleInputChange}
                            placeholder="Nom"
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="prenomAdminEnsias"
                            value={newGestionnaire.prenomAdminEnsias}
                            onChange={handleInputChange}
                            placeholder="Prénom"
                          />
                        </td>
                        <td>
                          <Input
                            type="email"
                            name="emailAdminEnsias"
                            value={newGestionnaire.emailAdminEnsias}
                            onChange={handleInputChange}
                            placeholder="Email"
                          />
                        </td>
                        <td>
                          <Input
                            type="password"
                            name="motDePasseAdminEnsias"
                            value={newGestionnaire.motDePasseAdminEnsias}
                            onChange={handleInputChange}
                            placeholder="Mot de passe"
                          />
                        </td>
                        <td>
                          <Button color="success" size="sm" onClick={handleAddGestionnaire}>
                            Ajouter
                          </Button>
                          <Button
                            color="secondary"
                            size="sm"
                            onClick={() => setAddingRow(false)}
                          >
                            Annuler
                          </Button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default GestionnairesEnsiasManagement;