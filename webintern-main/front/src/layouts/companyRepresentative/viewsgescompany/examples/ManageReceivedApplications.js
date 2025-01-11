import React, { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  Collapse,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Header from "components/Headers/Header.js";

const ApplicationsManagement = () => {
  const [applications, setApplications] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch applications from backend
  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/offres/applications");
      if (!response.ok) {
        throw new Error("Failed to fetch applications");
      }
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Update status of application
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/offres/applications/${id}/updateStatus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ statut: newStatus }),
      });
      if (response.ok) {
        fetchApplications(); // Refresh data
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const viewApplicationDetails = (application) => {
    setSelectedApplication(application);
    toggleModal();
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow mb-4">
              <CardHeader className="border-0">
                <h3 className="mb-0">Gestion des Applications</h3>
              </CardHeader>
              <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Titre de l'offre</th>
                      <th scope="col">Nom du candidat</th>
                      <th scope="col">Email</th>
                      <th scope="col">Statut</th>
                      <th scope="col">Date de postulation</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(applications) && applications.length > 0 ? (
                      applications.map((app) => (
                        <React.Fragment key={app.postulationId}>
                          <tr onClick={() => toggleRow(app.postulationId)}>
                            <td>{app.titreOffre || "N/A"}</td>
                            <td>{app.applicantName || "N/A"}</td>
                            <td>{app.email || "N/A"}</td>
                            <td>
                              <Badge
                                color=""
                                className={`badge-dot mr-4 ${
                                  app.statut === "ENCOURS"
                                    ? "bg-warning"
                                    : app.statut === "ACCEPTE"
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {app.statut || "N/A"}
                              </Badge>
                            </td>
                            <td>{app.dateDePostulation || "N/A"}</td>
                            <td>
                              <Button
                                color="info"
                                size="sm"
                                onClick={() => viewApplicationDetails(app)}
                              >
                                Voir Détails
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="6">
                              <Collapse isOpen={expandedRow === app.postulationId}>
                                <div className="p-4 bg-light">
                                  <h5>Détails de la Candidature</h5>
                                  <p>
                                    <strong>Lettre de motivation:</strong>{" "}
                                    {app.lettreDeMotivation || "N/A"}
                                  </p>
                                
                                  <p>
                                    <strong>CV:</strong>{" "}
                                    <a
                                      href={app.cvUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Télécharger le CV
                                    </a>
                                  </p>
                                  <Button
                                  
                                    color="success"
                                    size="sm"
                                    onClick={() => updateStatus(app.postulationId, "ACCEPTE")}
                                  >
                                    Accepter
                                  </Button>{" "}
                                  <Button
                                    color="danger"
                                    size="sm"
                                    onClick={() => updateStatus(app.postulationId, "REFUSE")}
                                  >
                                    Refuser
                                  </Button>
                                </div>
                              </Collapse>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          Aucune candidature disponible
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

      {/* Modal for Application Details */}
      {selectedApplication && (
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Détails de la Candidature</ModalHeader>
          <ModalBody>
            <p>
              <strong>Nom:</strong> {selectedApplication.applicantName || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {selectedApplication.email || "N/A"}
            </p>
            <p>
              <strong>Statut:</strong> {selectedApplication.statut || "N/A"}
            </p>
            <p>
              <strong>Lettre de motivation:</strong>{" "}
              {selectedApplication.lettreDeMotivation || "N/A"}
            </p>
            <p>
              <strong>CV:</strong>{" "}
              <a
                href={selectedApplication.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger le CV
              </a>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export default ApplicationsManagement;
