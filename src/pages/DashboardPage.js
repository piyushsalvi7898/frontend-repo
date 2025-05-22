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
  const [notification, setNotification] = useState(''); // State for notifications 

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://backend-repo-q9e4.onrender.com/api/contacts');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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



  const handleDelete = async (id) => {
    console.log("Delete button clicked, ID:", id); // Debugging
    try {
      await axios.delete(`https://backend-repo-q9e4.onrender.com/api/contacts/delete/${id}`);
      setNotification("User deleted successfully!"); // Set success notification
      console.log("Notification set:", "User deleted successfully!"); // Debugging
      fetchData(); // Refresh the data after deletion
  
      // Clear the notification after 3 seconds
      setTimeout(() => {
        setNotification('');
        console.log("Notification cleared"); // Debugging
      }, 3000);
    } catch (error) {
      console.error('Error deleting user:', error);
      setNotification("Error deleting user. Please try again."); // Set error notification
      console.log("Notification set:", "Error deleting user. Please try again."); // Debugging
  
      // Clear the notification after 3 seconds
      setTimeout(() => {
        setNotification('');
        console.log("Notification cleared"); // Debugging
      }, 3000);
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
      {notification && <div className="notification">{notification}</div>} {/* Display notification */}
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









// comapny me job krr rha tha vo logo ne mko 2 mhine ki slary nhi di he mujhe roj juth boll rhe aaj kll krte krte 2 mhine ho gye he  mujhe uske khilaf compalaint  he police station me jaake aavedan dena he jisme likhit me likhna he ki comapny name Yunify HR & IT Solutions.   jiska owner he yogesh bhawasar    yoges bhawasar ka contact no. 7024223240   jha phle comapny thi vha ka address 2nd floar mahakal traders  in front of subhash nagarwater tank pardeshipura indore         or ab jo company ka new address he vo he Akbar Ali Complex, 305, New Palasia, Indore, Madhya Pradesh           mujhe hire kiya tha yogesh bhavasar ne 10,000 fix salary bolke joki mujhe offer letter me bhi mention krke di gyi he mene vha 45 din kaam kiya lekin  mujhe sirf 2500 rs. diye gye or uske baad unhone office ye bolke bnd kra ki work from home kro or baad me bolte company bnd ho gyi he fir company dusri jgh shift krli jiska kuch btaya bhi nhi information bhi nhi diya     mujhe bola gya resign letter dedo usme bhi mene mention krr rkha he ki meri salary pending he 2 mhine ke upr ho gya he  or yogesh bhawasar (owner) juth pe juth bolke ghuma rha he    mujhe bolaa tha may ke phl week me salary de denge but ni di fit bola 15 may tk tb bhi nhi di fir bolta 20may tk di prr fir bhi meri salary nhi ayi he  issliye me compalint krr rha hu aapko mere pass sare proof he mene Offer letter, resgin letter or chats ke screen shot ki bhi phtot copy attach ki he or me labour complaint bhi krunga agr 20 may tk meri salary nhi aayi to               or employee ka name h jiski salary baki he Piyush salvi mob no. 7898689898  employee code 101104                 (ye esa ek written me police station me dena he isko shi tarike se bna ke do)  