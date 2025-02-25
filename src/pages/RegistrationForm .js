import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import jsPDF from "jspdf";
import "../css/Registration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    maritalStatus: "",
    address: "",
    city: "",
    state: "",
    mobile: "",
    alternateNumber: "",
    email: "",
    upiTransactionId: "",
    uniqueId: "", 
    companyName: "",
    jobTitle: "",
    experience: "",
    passingYear: "",
    stream: "",
    qualification: "",
    pincode: ""
  });

  const backendURL = "https://backend-repo-q9e4.onrender.com";

  useEffect(() => {
    fetchUniqueId();
  }, []);

  const fetchUniqueId = async () => {
    try {
      const response = await fetch(`${backendURL}/api/uniqueId`);
      const data = await response.json();
      if (response.ok && data.uniqueId) {
        setFormData((prevData) => ({ ...prevData, uniqueId: data.uniqueId }));
      } else {
        generateLocalUniqueId();
      }
    } catch (error) {
      console.error("Error fetching unique ID:", error);
      generateLocalUniqueId();
    }
  };

  const generateLocalUniqueId = () => {
    const lastId = "Yunify-10000";
    const lastNumber = parseInt(lastId.split("-")[1]) + 1;
    setFormData((prevData) => ({ ...prevData, uniqueId: `Yunify-${lastNumber}` }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendURL}/api/candidates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Candidate registered successfully!");
        fetchUniqueId();
        setFormData({
          name: "", fatherName: "", dob: "", maritalStatus: "",
          address: "", city: "", state: "", mobile: "", alternateNumber: "",
          email: "", upiTransactionId: "", uniqueId: "", companyName: "",
          jobTitle: "", experience: "", passingYear: "", stream: "",
          qualification: "", pincode: ""
        });
      } else {
        alert("Error registering candidate. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Try again later.");
    }
  };

  return (
    <Container className="registration-container">
      <Card className="registration-card">
        <h2 className="text-center registration-title">CANDIDATE REGISTRATION</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Name of the Candidate</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" name="experience" value={formData.experience} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Passing Year</Form.Label>
                <Form.Control type="text" name="passingYear" value={formData.passingYear} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Stream</Form.Label>
                <Form.Control type="text" name="stream" value={formData.stream} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Pincode</Form.Label>
                <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="submit-btn">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
