import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import * as XLSX from "xlsx";
import Header from "components/Headers/Header.js";

const StudentsManagement = () => {
  const [etudiants, setEtudiants] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nouvelEtudiant, setNouvelEtudiant] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    promotion: "",
    filiere: "",
    motDePasse: "",
  });
  const [termeRecherche, setTermeRecherche] = useState("");
  const [messageErreur, setMessageErreur] = useState(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNouvelEtudiant({ ...nouvelEtudiant, [name]: value });
  };

  const handleAjoutEtudiant = () => {
    axios
      .post("http://localhost:8080/api/etudiants", nouvelEtudiant)
      .then((response) => {
        setEtudiants([...etudiants, response.data]);
        setNouvelEtudiant({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          promotion: "",
          filiere: "",
          motDePasse: "",
        });
        setMessageErreur(null);
        toggleModal();
      })
      .catch((error) => {
        const errorData = error.response?.data || { message: "Erreur inconnue" };
        console.error("Erreur lors de l'ajout de l'étudiant:", errorData);
        setMessageErreur(errorData);
      });
  };

  const handleSupprimerEtudiant = (id) => {
    axios
      .delete(`http://localhost:8080/api/etudiants/${id}`)
      .then(() => {
        setEtudiants(etudiants.filter((etudiant) => etudiant.numeroEtudiant !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'étudiant:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/etudiants")
      .then((response) => {
        setEtudiants(response.data || []);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des étudiants:", error);
      });
  }, []);

  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant?.nomEtudiant?.toLowerCase().includes(termeRecherche.toLowerCase())
  );

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Gestion des Étudiants</h3>
                <div className="d-flex align-items-center">
                  <Input
                    type="text"
                    placeholder="Rechercher par Nom"
                    value={termeRecherche}
                    onChange={(e) => setTermeRecherche(e.target.value)}
                    style={{ marginRight: "10px", width: "200px" }}
                  />
                  <Button color="primary" onClick={toggleModal} className="mr-2">
                    Ajouter un Étudiant
                  </Button>
                </div>
              </CardHeader>
              {messageErreur && (
                <div className="alert alert-danger" role="alert">
                  {typeof messageErreur === "string" ? (
                    messageErreur
                  ) : (
                    <div>
                      <p>
                        <strong>Erreur:</strong> {messageErreur.error || "Inconnue"}
                      </p>
                      <p>
                        <strong>Message:</strong> {messageErreur.message || "Pas de détails disponibles"}
                      </p>
                    </div>
                  )}
                </div>
              )}
              <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nom</th>
                      <th scope="col">Prénom</th>
                      <th scope="col">Email</th>
                      <th scope="col">Téléphone</th>
                      <th scope="col">Promotion</th>
                      <th scope="col">Filière</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {etudiantsFiltres.map((etudiant) => (
                      <tr key={etudiant.numeroEtudiant}>
                        <td>{etudiant.nomEtudiant}</td>
                        <td>{etudiant.prenomEtudiant}</td>
                        <td>{etudiant.emailEtudiant}</td>
                        <td>{etudiant.telephoneEtudiant}</td>
                        <td>{etudiant.promotionEtudiant}</td>
                        <td>{etudiant.filiere?.nomFiliere || "N/A"}</td>
                        <td>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => handleSupprimerEtudiant(etudiant.numeroEtudiant)}
                          >
                            Supprimer
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ajouter un Nouvel Étudiant</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nom">Nom</Label>
              <Input
                type="text"
                name="nom"
                id="nom"
                value={nouvelEtudiant.nom}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Prénom</Label>
              <Input
                type="text"
                name="prenom"
                id="prenom"
                value={nouvelEtudiant.prenom}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={nouvelEtudiant.email}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="telephone">Téléphone</Label>
              <Input
                type="text"
                name="telephone"
                id="telephone"
                value={nouvelEtudiant.telephone}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="promotion">Promotion</Label>
              <Input
                type="text"
                name="promotion"
                id="promotion"
                value={nouvelEtudiant.promotion}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="filiere">Filière</Label>
              <Input
                type="select"
                name="filiere"
                id="filiere"
                value={nouvelEtudiant.filiere}
                onChange={handleInputChange}
              >
                <option value="">-- Sélectionner une Filière --</option>
                <option value="GL">Génie Logiciel</option>
                <option value="GD">Génie de la Data</option>
                <option value="CCSC">Cybersécurité</option>
                <option value="D2S">Data and Software Sciences</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="motDePasse">Mot de passe</Label>
              <Input
                type="password"
                name="motDePasse"
                id="motDePasse"
                value={nouvelEtudiant.motDePasse}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAjoutEtudiant}>
            Ajouter
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default StudentsManagement;
