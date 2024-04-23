import React from 'react';

function Navbar() {
  const styles = {
    header: {
      backgroundColor: '#333', // Adjust background color to your preference
      display: 'flex',
      justifyContent: 'space-between', // Distribute content horizontally
      alignItems: 'center', // Align content vertically
    //   padding: '1rem', // Add some padding for visual spacing
    height: '80px',
    },
    title: {
      margin: '0', // Remove default margin
      padding: '0 1rem', // Add left and right padding
      color: 'white', // Make title text white
      textDecoration: 'none', // Remove underline from title (if applicable)
    //   fontSize: '1.5rem', // Adjust font size as needed
      fontWeight: 'bold', // Add boldness for emphasis
    },
    nav: { // Renamed "navv" for consistency
      display: 'flex',
      
      justifyContent: 'space-between', // Distribute links evenly
      alignItems: 'center', // Align link contents vertically
      listStyle: 'none', // Remove bullet points from links
      margin: 0, // Remove default margin
      padding: 0, // Remove default padding
    },
    link: { // Style for individual links
      color: 'white', // Make link text white
      textDecoration: 'none', // Remove underline from links
      fontSize: '1rem', // Adjust font size as needed
      fontWeight: 'normal', // Use normal weight for links
      padding: '0.5rem 1rem', // Add some padding for link hover effect
      transition: 'color 0.3s ease', // Smooth color transition on hover
    },
    'link:hover': { // Styles applied on link hover
      color: '#f1f1f1', // Lighter color on hover
    },
    ul: { // Style for
        display: 'flex',
        justifyContent: 'space-between', // Distribute links evenly
        alignItems: 'center', // Align link contents vertically
        listStyle: 'none', // Remove bullet points from links
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        },
  };

  return (
    <header style={styles.header}>
      <div style={styles.title}>
        <h1>Meet My Helper</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li><a href="/about" style={styles.link}>About</a></li>
          <li><a href="/services" style={styles.link}>Services</a></li>
          <li><a href="/contact" style={styles.link}>Contact</a></li>
          <li><a href="/" style={styles.link}>Login</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
