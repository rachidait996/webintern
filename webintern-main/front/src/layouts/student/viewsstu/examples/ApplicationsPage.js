import React, { useState } from "react";
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import Header from "../../components/Headers/Header.js";

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      internshipTitle: "Software Engineer Intern",
      status: "Pending",
      appliedDate: "2025-01-02",
      description: "An exciting opportunity to work on cutting-edge software projects at a leading company.",
    },
    {
      id: 2,
      internshipTitle: "Data Analyst Intern",
      status: "Accepted",
      appliedDate: "2025-01-01",
      description: "Join our team to analyze data and provide insights for strategic decisions.",
    },
    {
      id: 3,
      internshipTitle: "Web Developer Intern",
      status: "Rejected",
      appliedDate: "2024-12-30",
      description: "Build and maintain web applications in a collaborative environment.",
    },
  ]);

  const [modal, setModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const toggleModal = (application) => {
    setSelectedApplication(application);
    setModal(!modal);
  };

  const statusColors = {
    Pending: "warning",
    Accepted: "success",
    Rejected: "danger",
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">My Applications</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Internship Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">Applied Date</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id} onClick={() => toggleModal(application)} style={{ cursor: "pointer" }}>
                      <th scope="row">{application.internshipTitle}</th>
                      <td>
                        <Badge
                          color=""
                          className={`badge-dot mr-4 bg-${statusColors[application.status]}`}
                        >
                          <i className={`bg-${statusColors[application.status]}`} />
                          {application.status}
                        </Badge>
                      </td>
                      <td>{application.appliedDate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {/* Pagination */}
              <Pagination className="pagination justify-content-end mb-0">
                <PaginationItem>
                  <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
              </Pagination>
            </Card>
          </div>
        </Row>
      </Container>

      {/* Modal for viewing full internship details */}
      {selectedApplication && (
        <Modal isOpen={modal} toggle={() => toggleModal(null)} backdrop="static">
          <ModalHeader toggle={() => toggleModal(null)}>{selectedApplication.internshipTitle}</ModalHeader>
          <ModalBody>
            <p><strong>Status:</strong> {selectedApplication.status}</p>
            <p><strong>Applied Date:</strong> {selectedApplication.appliedDate}</p>
            <p><strong>Description:</strong></p>
            <p>{selectedApplication.description}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => toggleModal(null)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export default ApplicationsPage;
