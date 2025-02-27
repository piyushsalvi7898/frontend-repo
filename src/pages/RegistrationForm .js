import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import jsPDF from "jspdf";
import "../css/Registration.css";

const RegistrationForm = () => {
  const initialFormData = {
    uniqueId: "",
    name: "",
    dob: "",
    address: "",
    qualification: "",
    experience: "",
    email: "",
    mobile: "",
    reference: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const backendURL = "https://backend-repo-q9e4.onrender.com";

  useEffect(() => {
    fetchUniqueId();
  }, []);

  const fetchUniqueId = async () => {
    try {
      const response = await fetch(`${backendURL}/api/uniqueId`);
      if (!response.ok) throw new Error("Failed to fetch Unique ID");
      const data = await response.json();
      setFormData((prevData) => ({
        ...prevData,
        uniqueId: data.uniqueId || generateLocalUniqueId()
      }));
    } catch (error) {
      console.error("Error fetching unique ID:", error);
      generateLocalUniqueId();
    }
  };

  const generateLocalUniqueId = () => {
    const lastId = "Yunify-10000";
    const lastNumber = parseInt(lastId.split("-")[1]) + 1;
    setFormData((prevData) => ({
      ...prevData,
      uniqueId: `Yunify-${lastNumber}`
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    const headerText = "Yunify HR & IT Solution Pvt. Ltd.";
    const textWidth = doc.getTextWidth(headerText);
    doc.text(headerText, (doc.internal.pageSize.width - textWidth) / 2, 20);
    doc.setLineWidth(0.5);
    doc.line(20, 32, 190, 32);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const fields = [
      ["Unique ID", formData.uniqueId],
      ["Name", formData.name],
      ["Date of Birth", formData.dob],
      ["Qualification", formData.qualification],
      ["Email", formData.email],
      ["Mobile", formData.mobile],
      ["Reference", formData.reference],
    ];

    let y = 45;
    fields.forEach(([label, value]) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${label}:`, 20, y);
      doc.setFont("helvetica", "normal");
      doc.text(value || "N/A", 70, y);
      y += 8;
    });

    y += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Thank you for choosing Yunify HR & IT Solution Pvt. Ltd.", 20, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Your application has been successfully submitted and is under review.", 20, y + 8);
    doc.text("We are committed to connecting talented individuals with the right opportunities.", 20, y + 16);
    doc.text("For any further assistance, feel free to reach out to us at:", 20, y + 24);
    doc.setFont("helvetica", "bold");
    doc.text("Email: contact@yunify.in  |  Contact: +91 94248-06680", 20, y + 32);

    doc.save(`Candidate_Receipt_${formData.uniqueId}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${backendURL}/api/candidates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert("Candidate registered successfully!");
        generatePDF();
        fetchUniqueId();
        resetForm();
      } else {
        // Improved error handling
        console.error("Error Response:", responseData);
        alert("Error: " + (responseData.error || "An unknown error occurred."));
      }
    } catch (error) {
      console.error("Catch Error:", error);
      alert("Server error. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Container className="registration-container">
      <Card className="registration-card">
        <h2 className="text-center registration-title">CANDIDATE REGISTRATION</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" name="experience" value={formData.experience} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Reference</Form.Label>
                <Form.Control type="text" name="reference" value={formData.reference} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Submit"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default RegistrationForm;