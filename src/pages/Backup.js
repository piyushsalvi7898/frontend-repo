// import React, { useState, useEffect } from "react";
// import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
// import jsPDF from "jspdf";
// import "../css/Registration.css";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     uniqueId: "",
//     name: "",
//     dob: "",
//     address: "",
//     qualification: "",
//     passingYear: "",
//     experience: "",
//     jobTitle: "",
//     companyName: "",
//     email: "",
//     mobile: "",
//     reference: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [amount, setAmount] = useState("");
//   const [hrPermissionCode, setHrPermissionCode] = useState(""); //add
//   const backendURL = "https://backend-repo-q9e4.onrender.com";

//   useEffect(() => {
//     fetchUniqueId();
//   }, []);

//   const fetchUniqueId = async () => {
//     try {
//       const response = await fetch(`${backendURL}/api/uniqueId`);
//       const data = await response.json();
//       if (response.ok && data.uniqueId) {
//         setFormData((prevData) => ({ ...prevData, uniqueId: data.uniqueId }));
//       } else {
//         generateLocalUniqueId();
//       }
//     } catch (error) {
//       console.error("Error fetching unique ID:", error);
//       generateLocalUniqueId();
//     }
//   };

//   const generateLocalUniqueId = () => {
//     const lastId = "Yunify-10000";
//     const lastNumber = parseInt(lastId.split("-")[1]) + 1;
//     setFormData((prevData) => ({ ...prevData, uniqueId: `Yunify-${lastNumber}` }));
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };



  
//   // =======================================
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     // Company Header - Centered
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(20);
//     const headerText = "Yunify HR & IT Solution Pvt. Ltd.";
//     const textWidth = doc.getTextWidth(headerText);
//     doc.text(headerText, (doc.internal.pageSize.width - textWidth) / 2, 20);

//     // Line separator
//     doc.setLineWidth(0.5);
//     doc.line(20, 32, 190, 32); // Horizontal line

//     // Form Data in Normal Text Format
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(12);

//     const fields = [
//       ["Unique ID", formData.uniqueId],
//       ["Name", formData.name],
//       ["Date of Birth", formData.dob],
//       ["Qualification", formData.qualification],
//       ["Email", formData.email],
//       ["Mobile", formData.mobile],
//       ["Reference", formData.reference],
//     ];

//     let y = 45; // Initial Y position for the text

//     fields.forEach(([label, value]) => {
//       doc.setFont("helvetica", "bold");
//       doc.text(`${label}:`, 20, y);
//       doc.setFont("helvetica", "normal");
//       doc.text(value || "N/A", 70, y);
//       y += 8; // Spacing between lines
//     });

//     y += 10; // Space before footer

//     // Footer Message
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(12);
//     doc.text("Thank you for choosing Yunify HR & IT Solution Pvt. Ltd.", 20, y);

//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(10);
//     doc.text("Your application has been successfully submitted and is under review.", 20, y + 8);
//     doc.text("We are committed to connecting talented individuals with the right opportunities.", 20, y + 16);
//     doc.text("For any further assistance, feel free to reach out to us at:", 20, y + 24);

//     doc.setFont("helvetica", "bold");
//     doc.text("Email: contact@yunify.in  |  Contact: +91 94248-06680", 20, y + 32);

//     doc.save(`Candidate_Receipt_${formData.uniqueId}.pdf`);
//   };

//   const handleUPIPayment = () => {
//     if (!amount || amount <= 0) {
//       alert("Please enter a valid amount");
//       return;
//     }

//     const upiID = "salvipiyush777@ybl"; // Aapka UPI ID
//     const name = "Piyush Salvi";
//     const txnId = `TXN${Date.now()}`; // Unique Transaction ID
//     const refId = `REF${Date.now()}`; // Unique Reference ID
//     const note = "Candidate Registration Payment";

//     const upiURL = `upi://pay?pa=${upiID}&pn=${name}&mc=&tid=${txnId}&tr=${refId}&tn=${note}&am=${amount}&cu=INR`;

//     window.location.href = upiURL;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting form...");



//     const validHRCode = "admin@123";
//     if (hrPermissionCode !== validHRCode) {
//       alert("Invalid HR Permission Code. Please enter the correct code.");
//       console.log("Invalid HR Code");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       console.log("Sending request to backend...");
//       const response = await fetch(`${backendURL}/api/candidates`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, hrPermissionCode }),
//       });

//       const responseData = await response.json();
//       console.log("Response received:", responseData);

//       if (response.ok) {
//         alert("Candidate registered successfully!");
//         generatePDF();
//         fetchUniqueId();
//         setFormData({
//           uniqueId: formData.uniqueId,
//           name: "",
//           dob: "",
//           address: "",
//           qualification: "",
//           passingYear: "",
//           experience: "",
//           jobTitle: "",
//           companyName: "",
//           email: "",
//           mobile: "",
//           reference: ""
//         });
//         setHrPermissionCode("");
//       } else {
//         console.error("Error Response:", responseData);
//         alert("Error: " + responseData.message);
//       }
//     } catch (error) {
//       console.error("Catch Error:", error);
//       alert("Server error. Try again later.");
//     }

//     setIsSubmitting(false);
//   };



//   return (
//     <Container className="registration-container">
//       <Card className="registration-card">
//         <h2 className="text-center registration-title">CANDIDATE REGISTRATION</h2>
//         <Form onSubmit={handleSubmit}>
//           <Row>

//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Father's Name</Form.Label>
//                 <Form.Control type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Date of Birth</Form.Label>
//                 <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Marital Status</Form.Label>
//                 <Form.Select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
//                   <option value="">Select</option>
//                   <option value="Single">Single</option>
//                   <option value="Married">Married</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={4}>
//               <Form.Group className="mb-3">
//                 <Form.Label>City</Form.Label>
//                 <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={4}>
//               <Form.Group className="mb-3">
//                 <Form.Label>State</Form.Label>
//                 <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={4}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Pincode</Form.Label>
//                 <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Qualification</Form.Label>
//                 <Form.Control type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Stream</Form.Label>
//                 <Form.Control type="text" name="stream" value={formData.stream} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Passing Year</Form.Label>
//                 <Form.Control type="number" name="passingYear" value={formData.passingYear} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Experience</Form.Label>
//                 <Form.Control type="text" name="experience" value={formData.experience} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Job Title</Form.Label>
//                 <Form.Control type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Company Name</Form.Label>
//                 <Form.Control type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Mobile</Form.Label>
//                 <Form.Control type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Form.Group className="mb-3">
//             <Form.Label>Reference</Form.Label>
//             <Form.Control type="text" name="reference" value={formData.reference} onChange={handleChange} />
//           </Form.Group>


//           <Form.Group className="mb-3">
//             <Form.Label>HR Permission Code</Form.Label>
//             <Form.Control
//               type="password"
//               name="hrPermissionCode"
//               value={hrPermissionCode}
//               onChange={(e) => setHrPermissionCode(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Payment Amount (INR)</Form.Label>
//             <Form.Control
//               type="number"
//               name="amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Button variant="success" onClick={handleUPIPayment} disabled={!amount || amount <= 0}>
//             Pay via UPI
//           </Button>



//           <Button variant="primary" type="submit" className="submit-btn" disabled={isSubmitting}>
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </Button>

//         </Form>
//       </Card>
//     </Container>

//   );
// };

// export default RegistrationForm;
