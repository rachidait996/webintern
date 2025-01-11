import React, { useState } from "react";
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Header from "../../components/Headers/Header.js";

const AcceptedApplicationsPage = () => {
  const [acceptedApplications, setAcceptedApplications] = useState([
    {
      id: 1,
      internshipTitle: "Software Engineer Intern",
      interviewDate: "2025-01-10",
      interviewTime: "10:00 AM",
      location: "Virtual (Zoom Link: https://zoom.us/example)",
      appliedDate: "2025-01-02",
    },
    {
      id: 2,
      internshipTitle: "Data Analyst Intern",
      interviewDate: "2025-01-12",
      interviewTime: "2:00 PM",
      location: "Company Office, Floor 3, Room 12",
      appliedDate: "2025-01-01",
    },
  ]);

  const [modal, setModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const toggleModal = (application) => {
    setSelectedApplication(application);
    setModal(!modal);
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
                <h3 className="mb-0">Accepted Applications</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Internship Title</th>
                    <th scope="col">Interview Date</th>
                    <th scope="col">Interview Time</th>
                    <th scope="col">Applied Date</th>
                  </tr>
                </thead>
                <tbody>
                  {acceptedApplications.map((application) => (
                    <tr
                      key={application.id}
                      onClick={() => toggleModal(application)}
                      style={{ cursor: "pointer" }}
                    >
                      <th scope="row">{application.internshipTitle}</th>
                      <td>{application.interviewDate}</td>
                      <td>{application.interviewTime}</td>
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

      {/* Modal for viewing interview details */}
      {selectedApplication && (
        <Modal isOpen={modal} toggle={() => toggleModal(null)} backdrop="static">
          <ModalHeader toggle={() => toggleModal(null)}>
            {selectedApplication.internshipTitle} - Interview Details
          </ModalHeader>
          <ModalBody>
            <p>
              <strong>Interview Date:</strong> {selectedApplication.interviewDate}
            </p>
            <p>
              <strong>Interview Time:</strong> {selectedApplication.interviewTime}
            </p>
            <p>
              <strong>Location:</strong> {selectedApplication.location}
            </p>
            <p>
              <strong>Applied Date:</strong> {selectedApplication.appliedDate}
            </p>
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

export default AcceptedApplicationsPage;
