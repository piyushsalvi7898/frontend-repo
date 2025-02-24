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
    uniqueId: "", // Will be fetched/generated
  });

  useEffect(() => {
    fetchUniqueId();
  }, []);

  const fetchUniqueId = async () => {
    try {
      const response = await fetch("https://yunify-web.onrender.com/api/candidates/uniqueId"  );
      const data = await response.json();
  
      if (response.ok && data.uniqueId) {
        setFormData((prevData) => ({ ...prevData, uniqueId: data.uniqueId }));
      } else {
        console.error("Failed to fetch unique ID, generating manually...");
        generateLocalUniqueId();
      }
    } catch (error) {
      console.error("Error fetching unique ID:", error);
      generateLocalUniqueId();
    }
  };
  

  const generateLocalUniqueId = () => {
    let lastId = "Yunify-10000"; // Default starting ID
    const lastNumber = parseInt(lastId.split("-")[1]) + 1;
    setFormData((prevData) => ({ ...prevData, uniqueId: `Yunify-${lastNumber}` }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const generateSlip = () => {
    const doc = new jsPDF();
    
    // Set title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Yunify HR & IT Solutions Pvt. Ltd.", 65, 15); // Centered Title
  
    // Add some space
    doc.setFontSize(14);
    doc.text("Candidate Registration Receipt", 75, 25);
    doc.line(20, 30, 190, 30); // Underline
    
    // Table content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const details = [
      ["Unique ID", formData.uniqueId],
      ["Name", formData.name],
      ["Father's Name", formData.fatherName],
      ["Date of Birth", formData.dob],
      ["Marital Status", formData.maritalStatus],
      ["Address", formData.address],
      ["City", formData.city],
      ["State", formData.state],
      ["Mobile No.", formData.mobile],
      ["Alternate Number", formData.alternateNumber || "N/A"],
      ["Email", formData.email],
      ["UPI Transaction ID", formData.upiTransactionId],
    ];
  
    let y = 40;
    details.forEach(([key, value]) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${key}:`, 20, y);
      doc.setFont("helvetica", "normal");
      doc.text(`${value}`, 70, y);
      y += 8;
    });
  
    // Footer Message
    doc.setFontSize(12);
    doc.text("Thank you for registering with Yunify HR & IT Solutions Pvt. Ltd.", 40, y + 10);
    doc.text("We appreciate your trust in our services.", 60, y + 18);
    
    // Save PDF
    doc.save(`Yunify_Registartion_Slip_${formData.uniqueId}.pdf`);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://yunify-web.onrender.com/api/candidates",      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Candidate registered successfully!");
        generateSlip();
        fetchUniqueId(); // Fetch new unique ID for the next candidate
        setFormData({
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
          uniqueId: "", // Will be updated by fetchUniqueId()
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
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <h4 className="section-title">Personal Details</h4>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Marital Status</Form.Label>
                <Form.Control
                  type="text"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Alternate Number</Form.Label>
                <Form.Control
                  type="text"
                  name="alternateNumber"
                  value={formData.alternateNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>UPI Transaction ID</Form.Label>
                <Form.Control
                  type="text"
                  name="upiTransactionId"
                  value={formData.upiTransactionId}
                  onChange={handleChange}
                  required
                />
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


// DATA ADDDDDDDD