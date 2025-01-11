import React, { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Button,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Header from "../../components/Headers/Headercompany.js";

const InternshipOffersTable = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [modal, setModal] = useState(false);
  const [currentOffer, setCurrentOffer] = useState({
    idOffreStage: "",
    titreOffre: "",
    statutOffre: "active",
  });

  // Fetch Offers from the API
  const fetchOffers = () => {
    setLoading(true);
    fetch("/api/offres/voirOffresEtudiant")
      .then((response) => {
        console.log("API Response Status:", response.status);
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Failed to fetch data: ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data (Parsed):", data);
        setOffers(Array.isArray(data) ? data : []);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load offers. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  useEffect(() => {
    fetchOffers();
  }, []);

  // Toggle Modal
  const toggleModal = () => {
    setModal(!modal);
  };

  // Handle Opening Edit Modal
  const handleEditModal = (offer) => {
    setCurrentOffer(offer);
    toggleModal();
  };

  // Handle Form Submission (Edit Offer)
  const handleEditSubmit = () => {
    fetch(`/api/offres/editOffre/${currentOffer.idOffreStage}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentOffer),
    })
      .then((response) => {
        if (response.ok) {
          fetchOffers();
          toggleModal();
        } else {
          throw new Error("Failed to edit offer.");
        }
      })
      .catch((error) => {
        console.error("Error editing offer:", error);
        alert("Failed to edit offer. Please try again.");
      });
  };

  // Toggle Offer Status
  const toggleStatus = (idOffreStage) => {
    if (!idOffreStage) {
      alert("Invalid offer ID. Please try again.");
      return;
    }
    fetch(`/api/offres/toggleStatut/${idOffreStage}`, {
      method: "PUT",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to toggle status.");
        }
        fetchOffers();
      })
      .catch((error) => {
        console.error("Error toggling status:", error);
        alert("Failed to toggle status. Please try again.");
      });
  };

  // Delete Offer
  const handleDelete = (idOffreStage) => {
    if (!idOffreStage) {
      alert("Invalid offer ID. Please try again.");
      return;
    }
    if (window.confirm("Are you sure you want to delete this offer?")) {
      fetch(`/api/offres/deleteOffre/${idOffreStage}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            fetchOffers();
          } else {
            throw new Error("Failed to delete offer.");
          }
        })
        .catch((error) => {
          console.error("Error deleting offer:", error);
          alert("Failed to delete offer. Please try again.");
        });
    }
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0 d-flex justify-content-between">
                <h3 className="mb-0">Manage Internship Offers</h3>
                {loading && <Spinner color="primary" />}
              </CardHeader>

              {error ? (
                <div className="text-center my-5 text-danger">{error}</div>
              ) : (
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Status</th>
                      <th scope="col">Applications</th>
                      <th scope="col">Publication Date</th>
                      <th scope="col">Student</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(offers) && offers.length > 0 ? (
                      offers.map((offer) => (
                        <tr key={offer.idOffreStage}>
                          <th scope="row">
                            <Media>
                              <span className="mb-0 text-sm">
                                {offer.titreOffre}
                              </span>
                            </Media>
                          </th>
                          <td>
                            <Badge
                              color=""
                              className={`badge-dot mr-4 ${
                                offer.statutOffre === "active"
                                  ? "bg-success"
                                  : "bg-warning"
                              }`}
                            >
                              {offer.statutOffre}
                            </Badge>
                          </td>
                          <td>{offer.nombrePostulations || 0}</td>
                          <td>{offer.datePublication}</td>
                          <td>
                            {offer.etudiantNom} {offer.etudiantPrenom}
                          </td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle className="btn-icon-only text-light" size="sm">
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu right>
                                <DropdownItem onClick={() => handleEditModal(offer)}>
                                  Edit
                                </DropdownItem>
                                <DropdownItem onClick={() => handleDelete(offer.idOffreStage)}>
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                            <Button
                              color="link"
                              className="text-danger"
                              onClick={() => toggleStatus(offer.idOffreStage)}
                            >
                              Toggle Status
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No offers available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              )}
            </Card>
          </div>
        </Row>

        {/* Modal for Editing Offers */}
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Edit Offer</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="titreOffre">Title</Label>
                <Input
                  type="text"
                  id="titreOffre"
                  value={currentOffer.titreOffre}
                  onChange={(e) =>
                    setCurrentOffer({ ...currentOffer, titreOffre: e.target.value })
                  }
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleEditSubmit}>
              Save Changes
            </Button>
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </>
  );
};

export default InternshipOffersTable;
