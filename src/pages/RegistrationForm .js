import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import jsPDF from "jspdf";
import "../css/Registration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    uniqueId: "",
    name: "",
    fatherName: "",
    dob: "",
    maritalStatus: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    qualification: "",
    stream: "",
    passingYear: "",
    experience: "",
    jobTitle: "",
    companyName: "",
    email: "",
    mobile: "",
    reference: "",
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
          uniqueId: "",
          name: "",
          fatherName: "",
          dob: "",
          maritalStatus: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          qualification: "",
          stream: "",
          passingYear: "",
          experience: "",
          jobTitle: "",
          companyName: "",
          email: "",
          mobile: "",
          reference: "",
        });
      } else {
        alert("Error registering candidate. Please check required fields.");
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
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name of the Candidate</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Father's Name</Form.Label>
                <Form.Control type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Marital Status</Form.Label>
                <Form.Select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Pincode</Form.Label>
                <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Stream</Form.Label>
                <Form.Control type="text" name="stream" value={formData.stream} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Passing Year</Form.Label>
                <Form.Control type="number" name="passingYear" value={formData.passingYear} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" name="experience" value={formData.experience} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Reference</Form.Label>
            <Form.Control type="text" name="reference" value={formData.reference} onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-btn">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
