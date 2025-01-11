import React, { useState } from "react";
import {
  Badge,
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
import Papa from "papaparse";
import Header from "components/Headers/Header.js";

const StudentsManagement = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      nom: "Abboud",
      prenom: "Meriem",
      email: "meriem.abboud@ensias.ma",
      telephone: "123456789",
      promotion: "2025",
      filiere: "Software Engineering",
      password: "password123",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    promotion: "",
    filiere: "",
    password: "",
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    const id = students.length + 1;
    setStudents([...students, { id, ...newStudent }]);
    setNewStudent({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      promotion: "",
      filiere: "",
      password: "",
    });
    toggleModal();
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const newStudents = results.data.map((student, index) => ({
            id: students.length + index + 1,
            nom: student.nom,
            prenom: student.prenom,
            email: student.email,
            telephone: student.telephone,
            promotion: student.promotion,
            filiere: student.filiere,
            password: student.password,
          }));
          setStudents([...students, ...newStudents]);
        },
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
              <CardHeader className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Manage Students</h3>
                <div>
                  <Button color="primary" onClick={toggleModal} className="mr-2">
                    Add Student
                  </Button>
                  <Input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    style={{ display: "inline-block", width: "auto" }}
                  />
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">Promotion</th>
                    <th scope="col">Filiere</th>
                    <th scope="col">Password</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.nom}</td>
                      <td>{student.prenom}</td>
                      <td>{student.email}</td>
                      <td>{student.telephone}</td>
                      <td>{student.promotion}</td>
                      <td>{student.filiere}</td>
                      <td>{student.password}</td>
                      <td>
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => handleDeleteStudent(student.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>

      {/* Add Student Modal */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add New Student</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nom">Nom</Label>
              <Input
                type="text"
                name="nom"
                id="nom"
                value={newStudent.nom}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Prenom</Label>
              <Input
                type="text"
                name="prenom"
                id="prenom"
                value={newStudent.prenom}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={newStudent.email}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="telephone">Telephone</Label>
              <Input
                type="text"
                name="telephone"
                id="telephone"
                value={newStudent.telephone}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="promotion">Promotion</Label>
              <Input
                type="text"
                name="promotion"
                id="promotion"
                value={newStudent.promotion}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="filiere">Filiere</Label>
              <Input
                type="text"
                name="filiere"
                id="filiere"
                value={newStudent.filiere}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={newStudent.password}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddStudent}>
            Add Student
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default StudentsManagement;
