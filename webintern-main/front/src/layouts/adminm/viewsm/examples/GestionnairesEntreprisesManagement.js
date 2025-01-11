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
import Header from "components/Headers/Header.js";

const GestionnairesEntreprisesManagement = () => {
  // États
  const [gestionnaires, setGestionnaires] = useState([]);
  const [entreprises, setEntreprises] = useState([]); // Ajoutez cet état
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [newGestionnaire, setNewGestionnaire] = useState({
    nomGestionnaire: "",
    prenomGestionnaire: "",
    emailGestionnaire: "",
    motDePasseGestionnaire: "",
    entreprise: { raisonSocialeEntreprise: "" },
    siretEntreprise: ""
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Charger les gestionnaires et entreprises au montage du composant
  useEffect(() => {
    loadGestionnaires();
    loadEntreprises(); // Ajoutez cet useEffect
  }, []);

  // Fonctions de chargement des données
  const loadGestionnaires = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/gestionnaires-entreprise");
      setGestionnaires(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des gestionnaires:", error);
    }
  };

  const loadEntreprises = async () => { // Ajoutez cette fonction
    try {
      const response = await axios.get("http://localhost:8080/api/entreprises");
      setEntreprises(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des entreprises:", error);
    }
  };

  // Gestionnaires de modales
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      // Réinitialiser le formulaire à l'ouverture
      setNewGestionnaire({
        nomGestionnaire: "",
        prenomGestionnaire: "",
        emailGestionnaire: "",
        motDePasseGestionnaire: "",
        entreprise: { raisonSocialeEntreprise: "" },
        siretEntreprise: ""
      });
    }
  };

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  // Gestionnaires de formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "entreprise") {
      setNewGestionnaire({
        ...newGestionnaire,
        entreprise: { raisonSocialeEntreprise: value }
      });
    } else {
      setNewGestionnaire({ ...newGestionnaire, [name]: value });
    }
  };

  // Fonction d'ajout d'un gestionnaire
  const handleAddGestionnaire = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/gestionnaires-entreprise",
        newGestionnaire
      );
      await loadGestionnaires();
      toggleModal();
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un gestionnaire:", error);
      // Amélioration de l'affichage du message d'erreur
      let errorMessage = "Une erreur est survenue";
      if (error.response) {
        // Si l'erreur vient du serveur avec un message
        errorMessage = error.response.data.message || error.response.data;
      } else if (error.message) {
        // Si c'est une erreur JavaScript standard
        errorMessage = error.message;
      } else {
        // Si c'est une erreur réseau
        errorMessage = "Erreur réseau";
      }
      alert("Échec de l'ajout du gestionnaire: " + errorMessage);
    }
  };

  // Fonctions de suppression
  const handleDeleteGestionnaire = (id) => {
    setDeleteId(id);
    toggleDeleteModal();
  };

  const confirmDeleteGestionnaire = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/gestionnaires-entreprise/${deleteId}`);
      await loadGestionnaires();
      toggleDeleteModal();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      alert("Échec de la suppression du gestionnaire");
    }
  };

  // Gestionnaire d'import CSV
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const text = event.target.result;
        const rows = text.split("\n").slice(1); // Ignorer l'en-tête
        
        for (const row of rows) {
          if (row.trim()) {
            const [nomGestionnaire, prenomGestionnaire, emailGestionnaire, motDePasseGestionnaire, entreprise, siretEntreprise] = 
              row.split(",").map(val => val.trim());
            try {
              await axios.post("http://localhost:8080/api/gestionnaires-entreprise", {
                nomGestionnaire,
                prenomGestionnaire,
                emailGestionnaire,
                motDePasseGestionnaire,
                entreprise: { raisonSocialeEntreprise: entreprise },
                siretEntreprise
              });
            } catch (error) {
              console.error(`Erreur lors de l'ajout du gestionnaire ${nomGestionnaire}:`, error);
            }
          }
        }
        await loadGestionnaires();
      };
      reader.readAsText(file);
    }
  };

  // Filtrage des gestionnaires
  const filteredGestionnaires = gestionnaires.filter((gestionnaire) =>
    gestionnaire.nomGestionnaire.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gestionnaire.prenomGestionnaire.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gestionnaire.entreprise.raisonSocialeEntreprise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Rendu du composant
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Gestion des Gestionnaires d'Entreprises</h3>
                <div className="d-flex align-items-center">
                  <Input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginRight: "10px", width: "200px" }}
                  />
                  <Button color="primary" onClick={toggleModal} className="mr-2">
                    Ajouter Gestionnaire
                  </Button>
                  <Input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    style={{ display: "inline-block", width: "auto" }}
                  />
                </div>
              </CardHeader>
              <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nom</th>
                      <th scope="col">Prénom</th>
                      <th scope="col">Email</th>
                      <th scope="col">Entreprise</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredGestionnaires.map((gestionnaire) => (
                      <tr key={gestionnaire.idGestionnaire}>
                        <td>{gestionnaire.nomGestionnaire}</td>
                        <td>{gestionnaire.prenomGestionnaire}</td>
                        <td>{gestionnaire.emailGestionnaire}</td>
                        <td>{gestionnaire.entreprise.raisonSocialeEntreprise}</td>
                        <td>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => handleDeleteGestionnaire(gestionnaire.idGestionnaire)}
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

      {/* Modal d'ajout */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ajouter un Gestionnaire</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nomGestionnaire">Nom</Label>
              <Input
                type="text"
                name="nomGestionnaire"
                id="nomGestionnaire"
                value={newGestionnaire.nomGestionnaire}
                onChange={handleInputChange}
                placeholder="Entrez le nom"
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenomGestionnaire">Prénom</Label>
              <Input
                type="text"
                name="prenomGestionnaire"
                id="prenomGestionnaire"
                value={newGestionnaire.prenomGestionnaire}
                onChange={handleInputChange}
                placeholder="Entrez le prénom"
              />
            </FormGroup>
            <FormGroup>
              <Label for="emailGestionnaire">Email</Label>
              <Input
                type="email"
                name="emailGestionnaire"
                id="emailGestionnaire"
                value={newGestionnaire.emailGestionnaire}
                onChange={handleInputChange}
                placeholder="Entrez l'email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="motDePasseGestionnaire">Mot de passe</Label>
              <Input
                type="password"
                name="motDePasseGestionnaire"
                id="motDePasseGestionnaire"
                value={newGestionnaire.motDePasseGestionnaire}
                onChange={handleInputChange}
                placeholder="Entrez le mot de passe"
              />
            </FormGroup>
            <FormGroup>
              <Label for="entreprise">Entreprise</Label>
              <Input
                type="select"
                name="entreprise"
                id="entreprise"
                value={newGestionnaire.entreprise.raisonSocialeEntreprise}
                onChange={(e) => handleInputChange({
                  target: {
                    name: 'entreprise',
                    value: e.target.value
                  }
                })}
              >
                <option value="">Sélectionnez une entreprise</option>
                {entreprises.map((entreprise) => (
                  <option 
                    key={entreprise.raisonSocialeEntreprise} 
                    value={entreprise.raisonSocialeEntreprise}
                  >
                    {entreprise.raisonSocialeEntreprise}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="siretEntreprise">SIRET Entreprise</Label>
              <Input
                type="text"
                name="siretEntreprise"
                id="siretEntreprise"
                value={newGestionnaire.siretEntreprise}
                onChange={handleInputChange}
                placeholder="Entrez le SIRET de l'entreprise"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddGestionnaire}>
            Ajouter
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal de suppression */}
      <Modal isOpen={isDeleteModalOpen} toggle={toggleDeleteModal}>
        <ModalHeader toggle={toggleDeleteModal}>Confirmer la suppression</ModalHeader>
        <ModalBody>
          <p>Êtes-vous sûr de vouloir supprimer ce gestionnaire ? Cette action est irréversible.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDeleteGestionnaire}>
            Supprimer
          </Button>
          <Button color="secondary" onClick={toggleDeleteModal}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default GestionnairesEntreprisesManagement;