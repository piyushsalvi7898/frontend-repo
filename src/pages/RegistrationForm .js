import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../css/Registration.css";              

const initialFormData = {
  uniqueId: "",
  name: "",
  fatherName: "",
  dob: "",
  address: "",
  qualification: "",
  experience: "",
  email: "",
  mobile: "",
  reference: "",
  hrCode: "" // HR Code field
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const backendURL = "https://backend-repo-q9e4.onrender.com";

  // Predefined HR Code
  const HR_SECRET_CODE = "7898";

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
        uniqueId: data.uniqueId
      }));
    } catch (error) {
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
  
    // Get Current Date
    const currentDate = new Date().toLocaleDateString();
  
    // Company Name Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Yunify HR & IT Solutions Pvt. Ltd.", 20, 20);
  
    // Subtitle
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Candidate Registration Form", 20, 30);
  
    // Draw a line
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
  
    // Table Content
    const tableColumn = ["Field", "Details"];
    const tableRows = [
      ["Unique ID", formData.uniqueId],
      ["Name", formData.name],
      ["Address", formData.address],
      ["Qualification", formData.qualification],
      ["Experience", formData.experience],
      ["Email", formData.email],
      ["Mobile", formData.mobile],
      ["Reference", formData.reference],
      ["Registration Date", currentDate], // Added Registration Date
    ];
  
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      theme: "grid",
      styles: { fontSize: 12, cellPadding: 3 },
      headStyles: { fillColor: [0, 102, 204] }, // Blue header
    });
  
    // Footer Content
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Thank you for registering with Yunify HR & IT Solutions Pvt. Ltd.", 20, finalY + 10);
    
    doc.setFont("helvetica", "normal");
    doc.text("For any queries, contact us at support@yunifyhr.com", 20, finalY + 20);
  
    // Save the PDF
    doc.save(`Candidate_${formData.uniqueId}.pdf`);
  };
  





  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate HR Code
    if (formData.hrCode !== HR_SECRET_CODE) {
      setError("Invalid HR Code! Please enter the correct code.");
      setIsSubmitting(false);
      return;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(formData.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${backendURL}/api/candidates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert("Candidate registered successfully!");
        generatePDF(); // PDF generate aur save ho jayega
        fetchUniqueId();
        resetForm();
      } else {
        setError(responseData.error || "An unknown error occurred.");
      }
    } catch (error) {
      setError("Server error. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setError("");
  };

  return (
    <Container className="registration-container">
      <Card className="registration-card">
        <h2 className="text-center registration-title">CANDIDATE REGISTRATION</h2>
        {error && <p className="text-danger text-center">{error}</p>}
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
                <Form.Label>Father's Name</Form.Label>
                <Form.Control type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
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
                <Form.Select name="experience" value={formData.experience} onChange={handleChange} required>
                  <option value="">Select Experience</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </Form.Select>
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
                <Form.Control type="text" name="reference" placeholder="Entre the name of person who referred you" value={formData.reference} onChange={handleChange} required />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>HR Code</Form.Label>
                <Form.Control type="text" name="hrCode" placeholder="Get it done by HR " value={formData.hrCode} onChange={handleChange} required />
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
