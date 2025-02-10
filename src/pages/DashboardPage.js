// src/DashboardPage.js
import React, { useEffect, useState } from 'react';
import { Trash2 } from "lucide-react"; // Import trash icon
import axios from 'axios';
import * as XLSX from 'xlsx';
import "../css/Dashboard.css";

const DashboardPage = ({ isOwner }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-repo-q9e4.onrender.com/api/contacts');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = 'yunify@2025'; // Change this to your actual password logic

    if (password === correctPassword) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    XLSX.writeFile(workbook, "contacts_data.xlsx");
  };


  // DELETE FILE

  const handleDelete = async (id) => {
    console.log("Deleting contact with ID:", id);
  
    try {
      const response = await axios.delete(`https://backend-repo-q9e4.onrender.com/api/contacts/delete/${id}`);
  
      if (response.status === 200) {
        alert("Contact deleted successfully!"); // Show success message
        window.location.reload(); // Refresh the page
      }
    } catch (err) {
      console.error("Delete Error:", err.response?.data || err.message);
      alert('Error deleting contact: ' + (err.response?.data?.message || err.message));
    }
  };
  



  if (!isOwner) {
    return <div>You do not have permission to view this page.</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="PasswordForm-container">
        <div className="PasswordForm-form-container">
          <h1 className="PasswordForm-title">Enter Password to Access Dashboard</h1>
          <p className="PasswordForm-description">
            This page is exclusively for authorized personnel. Please enter your password to proceed.
          </p>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              className="PasswordForm-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
            <button type="submit" className="PasswordForm-button">Submit</button>
          </form>
          {passwordError && (
            <div className="PasswordForm-error" style={{ color: 'red' }}>{passwordError}</div>
          )}
        </div>
      </div>
    );
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="Dashboard-container">
      <h1 className="Dashboard-title">Dashboard</h1>
      <button className="export-button" onClick={exportToExcel}>Download Excel</button>
      <div className="Dashboard-table-container">
        <table className="Dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company Name</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Service</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td data-label="Name" className='colorname'>{item.name}</td>
                <td data-label="Company Name">{item.companyName}</td>
                <td data-label="Contact No">{item.contactNo}</td>
                <td data-label="Email">{item.email}</td>
                <td data-label="Service" className='boldword'>{item.service}</td>
                <td data-label="Message">{item.message}</td>

                <td>
                  <button className="delete-button" onClick={() => handleDelete(item._id)}>
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
