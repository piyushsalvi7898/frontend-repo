import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";

const AdminCandidateTable = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendURL = "https://backend-repo-q9e4.onrender.com";

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await fetch(`${backendURL}/api/candidates`);
      const data = await response.json();
      setCandidates(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Candidate Registration Table</h2>
      {loading ? (
        <p>Loading candidates...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Unique ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Job Title</th>
              <th>Company</th>
              <th> HR Reference</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate._id}>
                <td>{candidate.uniqueId}</td>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{candidate.mobile}</td>
                <td>{candidate.jobTitle}</td>
                <td>{candidate.companyName}</td>
                <td>{candidate.reference}</td>

                {/* <td>{candidate.paymentDone ? "Paid" : "Pending"}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AdminCandidateTable;
