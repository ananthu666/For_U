import React, { useState } from 'react';
import { database } from '../firebase_config';
import { collection, setDoc,doc } from 'firebase/firestore';


const CaregiverProfile = ({eandp}) => {
  const [caretaker, setCaretaker] = useState({});
  const [eandp1] = useState(eandp);
  const addcaretaker = async() => {
    const formvalues = document.querySelectorAll('input, textarea');
    const data = {};
    formvalues.forEach((input) => {
      // Use the 'name' attribute as the key for the data object
      data[input.name] = input.value;
    });
    formvalues.forEach((textarea) => {
      // Use the 'name' attribute as the key for the data object
      data[textarea.name] = textarea.value;
    });
    data['email']=eandp1.state.data.email;
    data['password']=eandp1.state.data.password;
    setCaretaker(data);
    console.log(caretaker);
    try
    {
      const reff=collection(database, "caretakers");
    const documentRef = doc(reff, eandp1.state.data.email);
    const docRef =await setDoc(documentRef, caretaker);
    console.log("Document written with ID: ", docRef);
    }
    catch(e)
    {
      console.error("Error adding document: ", e);
    }


    
    
  };


  return (
    <>
      <section className="signup-container" style={styles.container}>
        <h2 className="subheading" style={styles.subheading}>
          Caregiver's Profile
        </h2>
        <div style={styles.rl}>
          <div className="left-column">
            <div className="photo-upload" style={styles.photoUpload}>
              <label htmlFor="photo-input">
                <i className="fas fa-camera"></i>
              </label>
              <input
                type="file"
                id="photo-input"
                name="photo"
                accept="image/*"
                style={styles.photoInput}
              />
            </div>
            <form className="signup-form" style={styles.form}>
              <input
                type="text"
                name="fullName" // Assign a unique 'name' attribute
                placeholder="Full Name"
                style={styles.input}
              />
              {/* Assign 'name' attributes to other input fields */}
              <input
                type="number"
                name="age"
                placeholder="Age"
                style={styles.input}
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                style={styles.input}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                style={styles.input}
              />
              {/* <input
                type="email"
                name="email"
                placeholder="Email"
                style={styles.input}
              /> */}
              <input
                type="number"
                name="yearsOfExperience"
                placeholder="Years of Experience"
                style={styles.input}
              />
              <input
                type="text"
                name="languagesSpoken"
                placeholder="Languages Spoken"
                style={styles.input}
              />
              <input
                type="text"
                name="availability"
                placeholder="Availability"
                style={styles.input}
              />
            </form>
          </div>
          <div className="right-column">
            <form className="signup-form" style={styles.form}>
              <textarea
                name="clientFocus"
                placeholder="Client Focus"
                style={styles.textarea}
              ></textarea>
              <textarea
                name="servicesOffered"
                placeholder="Services Offered"
                style={styles.textarea}
              ></textarea>
              <textarea
                name="education"
                placeholder="Education"
                style={styles.textarea}
              ></textarea>
              <textarea
                name="qualification"
                placeholder="Qualification"
                style={styles.textarea}
              ></textarea>
              <textarea
                name="accommodation"
                placeholder="Accommodation"
                style={styles.textarea}
              ></textarea>
              <textarea
                name="allergies"
                placeholder="Allergies (if any)"
                style={styles.textarea}
              ></textarea>
              <textarea
                name="personalInterestsAndHobbies"
                placeholder="Personal Interests and Hobbies"
                style={styles.textarea}
              ></textarea>
            </form>
          </div>
        </div>
        <button type="submit" style={styles.button} onClick={addcaretaker}>
          Create Profile
        </button>
      </section>
    </>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    gap: '2rem',
    width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
  subheading: {
    color: '#333',
    fontSize: '2rem',
  },
  photoUpload: {
    margin: '1rem 0',
  },
  photoInput: {
    display: 'none',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '0.5rem 0',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '400px',
    height: '3.7vh',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  textarea: {
    margin: '0.5rem 0',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'vertical',
    width: '400px',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  button: {
    margin: '1rem 0',
    padding: '0.5rem',
    backgroundColor: 'grey',
    color: 'blue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center',
    width: '400px',
    fontSize: '25px',
  },
  rl: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10rem',
  },
};

export default CaregiverProfile;
