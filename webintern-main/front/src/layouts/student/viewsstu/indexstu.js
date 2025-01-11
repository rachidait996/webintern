import React, { useState } from "react";
import {
  Badge,
  Card,
  CardHeader,
  Container,
  Row,
  Button,
  Media,
  Input,
  FormGroup,
  Label,
  Col,
} from "reactstrap";

function Indexstu() {
  const [cv, setCv] = useState(null);
  const [motivationLetter, setMotivationLetter] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const internshipOffers = [
    {
      id: 1,
      company: "Company A",
      position: "Software Engineering Intern",
      description: "Description of the internship...",
      qualifications: ["Qualification 1", "Qualification 2"],
      location: "New York City",
      stipend: "$1500/month",
    },
    {
      id: 2,
      company: "Company B",
      position: "Data Science Intern",
      description: "Description of the internship...",
      qualifications: ["Qualification 1", "Qualification 2"],
      location: "San Francisco",
      stipend: "$2000/month",
    },
    // Add more offers as needed
  ];

  const handleCVUpload = (event) => {
    setCv(event.target.files[0]);
  };

  const handleMotivationLetterUpload = (event) => {
    setMotivationLetter(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (cv && motivationLetter) {
      setIsSubmitted(true);
    } else {
      alert("Please upload both your CV and motivation letter before submitting.");
    }
  };

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
  };

  return (
    <Container fluid style={{ padding: "0" }}>
      <Row style={{ display: "flex", justifyContent: "space-between", height: "100vh" }}>
        {/* Sidebar for Available Offers */}
        <Col
          lg="4"
          md="12"
          style={{
            maxHeight: "100vh",
            overflowY: "auto",
            paddingRight: "15px",
            borderRight: "1px solid #e9ecef",
            backgroundColor: "#f8f9fe",
            boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h5 className="text-primary" style={{ marginBottom: "20px", fontWeight: "600" }}>
            Available Internship Offers
          </h5>
          <div style={{ maxHeight: "85vh", overflowY: "auto" }}>
            {internshipOffers.map((offer) => (
              <Card
                key={offer.id}
                style={{
                  marginBottom: "15px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onClick={() => handleOfferClick(offer)}
                className="shadow-sm"
              >
                <CardHeader style={{ backgroundColor: "#f4f5f7", borderBottom: "1px solid #e9ecef" }}>
                  <h6>{offer.company}</h6>
                </CardHeader>
                <div className="card-body" style={{ padding: "1.25rem" }}>
                  <h6 style={{ color: "#5e72e4" }}>{offer.position}</h6>
                  <p style={{ color: "#6c757d" }}>{offer.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </Col>

        {/* Internship Details Section */}
        <Col
          lg="8"
          md="12"
          style={{
            maxHeight: "100vh",
            overflowY: "auto",
            padding: "20px",
          }}
        >
          {selectedOffer && (
            <Card className="shadow-lg border-0">
              <CardHeader
                style={{
                  backgroundColor: "#f4f5f7",
                  borderBottom: "1px solid #e9ecef",
                }}
              >
                <Row>
                  <div className="col-12">
                    <Media className="align-items-center">
                      <img
                        alt="Company Logo"
                        src="https://via.placeholder.com/50"
                        className="avatar rounded-circle mr-3"
                      />
                      <Media body>
                        <h4 className="text-primary">{selectedOffer.company}</h4>
                        <p className="text-muted">{selectedOffer.position}</p>
                      </Media>
                    </Media>
                  </div>
                </Row>
              </CardHeader>
              <div className="card-body" style={{ padding: "2rem" }}>
                <h5>Job Description</h5>
                <p>{selectedOffer.description}</p>

                <h5>Qualifications</h5>
                <ul>
                  {selectedOffer.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>

                <h5>Location and Stipend</h5>
                <p>
                  Location: {selectedOffer.location} | Stipend: {selectedOffer.stipend}
                </p>

                {/* Upload CV and Motivation Letter */}
                <FormGroup>
                  <Label for="cvUpload">Upload your CV</Label>
                  <Input
                    type="file"
                    name="cvUpload"
                    id="cvUpload"
                    onChange={handleCVUpload}
                    accept=".pdf, .doc, .docx"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="motivationLetterUpload">Upload your Motivation Letter</Label>
                  <Input
                    type="file"
                    name="motivationLetterUpload"
                    id="motivationLetterUpload"
                    onChange={handleMotivationLetterUpload}
                    accept=".pdf, .doc, .docx"
                  />
                </FormGroup>

                <Button
                  color="primary"
                  onClick={handleSubmit}
                  style={{
                    padding: "0.75rem 1.25rem",
                    fontWeight: "600",
                    borderRadius: "50px",
                    marginTop: "20px",
                  }}
                >
                  Apply Now
                </Button>

                {isSubmitted && (
                  <div className="mt-3">
                    <Badge color="success" style={{ fontWeight: "600" }}>
                      Application Submitted
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Indexstu;
