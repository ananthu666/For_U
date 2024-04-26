import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom'; // Import NavLink and navigate
import { signOut } from 'firebase/auth';
import { auth } from '../firebase_config';
import { message } from 'antd';


function Navbar() {
  const navigate = useNavigate(); // Get navigate function from the hook


  const handleLogout = () => {
    signOut(auth).then(() => {
      message.success('Logout successful'); // Show success message
    }).catch((error) => {
      console.error(error); //
    });

    navigate('/');
  };

  return (
    <header style={styles.header}>
      <div style={styles.title}>
        <h1>Meet My Helper</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li><NavLink to="/about" style={styles.link} activeStyle={styles.activeLink}>About</NavLink></li>
          <li><NavLink to="/services" style={styles.link} activeStyle={styles.activeLink}>Services</NavLink></li>
          <li><NavLink to="/contact" style={styles.link} activeStyle={styles.activeLink}>Contact</NavLink></li>
          {/* <li><button onClick={handleLogout} style={styles.link}>Logout</button></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

const styles = {
  header: {
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
  },
  title: {
    margin: '0',
    padding: '0 1rem',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'normal',
    padding: '0.5rem 1rem',
    transition: 'color 0.3s ease',
  },
  activeLink: {
    color: 'lightblue', // Change color for active link
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    marginRight: '1rem',
  },
};
