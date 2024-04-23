import React from 'react';
import Navbar from '../Components/Navbar';


const Login = () => {

    return (
        <>
            <div>
                <Navbar />
            </div>
            {/* <header style={styles.header}>
                <div className="title">
                    <h1>Meet My Helper</h1>
                </div>
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="about.html">About</a></li>
                        <li style={styles.navItem}><a href="service.html">Services</a></li>
                        <li style={styles.navItem}><a href="#contact">Contact</a></li>
                        <li style={styles.navItem}><a href="login.html">Login</a></li>
                    </ul>
                </nav>
            </header> */}
            <section className="login-container" style={styles.loginContainer}>
                <h2 style={styles.heading}>Welcome to Meet My Helper</h2>
                <div className="error-message" id="error-message" style={styles.errorMessage}></div>
                <form className="login-form" id="login-form" style={styles.loginForm}>
                    <input type="text" id="email" placeholder="User ID" style={styles.input} />
                    <input type="password" id="password" placeholder="Password" style={styles.input} />
                    <div className="forgot-password">
                        <a href="forgot.html" style={styles.forgotPassword}><i className="fas fa-question-circle"></i> Forgot Password?</a>
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <button className="google-btn" onClick={() => window.location.href = 'choice.html'} style={styles.googleButton}>
                    <i className="fab fa-google"></i> Sign in with Google
                    
                </button>
                <div className="sign-up" style={styles.signUp}>
                    <p>Don't have an account? <a href="/register" style={styles.signUpLink}>Sign up</a></p>
                </div>
            </section>
            <footer style={styles.footer}>
                <p>&copy; 2024 Meet My Helper. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Login;

const styles = {
    header: {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nav: {
        listStyleType: 'none',
    },
    navList: {
        display: 'flex',
    },
    navItem: {
        display: 'inline',
        marginRight: '20px',
    },
    loginContainer: {
        maxWidth: '400px',
        margin: '80px auto 0',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        
    },
    heading: {
        textAlign: 'center',
    },
    errorMessage: {
        color: 'red',
        marginTop: '10px',
    },
    loginForm: {
        textAlign: 'left',
        marginTop: '20px',
    },
    input: {
        width: '90%',
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: 'lightgray',
    },
    forgotPassword: {
        textAlign: 'left',
        marginBottom: '20px',
    },
    button: {
        width: '95%',
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    googleButton: {
        backgroundColor: '#dd4b39',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
        marginTop: '10px',

    },
    signUp: {
        marginTop: '20px',
    },
    signUpLink: {
        display: 'inline-block',
    },
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        // padding: '20px',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        // height:"20px",
        margin: '0',
        justifyContent: 'center',
        alignItems: 'center',
    },
};