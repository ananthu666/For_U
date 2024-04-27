import { useEffect, useState } from 'react'; // Import useState hook
import Rprofile from "../../Components/Receiver/RprofileBox";
import RecieverTable from "../../Components/Receiver/Reciever_dash_table";
// import { text } from 'cheerio';
import {database} from '../../firebase_config';
import { collection, getDocs,query,where } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';



const DashboardApp = () => {
  const {state}=useLocation();
  const [showProfile, setShowProfile] = useState(false); // State to manage visibility of profile
  const [recdata, setRecdata] = useState([]); // State to store data from the database
  const [filtereddata, setFiltereddata] = useState([]);
  const [mydetails, setmydetails] = useState([]);
  const inputsearch = () => {
    const formvalues = document.querySelectorAll('input');
    const data = {};
    formvalues.forEach((input) => {
      if (input.value!="")
        data[input.name] = input.value;
    });
    console.log("data",data);
    const arr = recdata.filter((item) => {
      for (let key in data) {
        if (item[key] === undefined || item[key].trim() !== data[key].trim())
          return false;
      }
      return true;
    });

    setFiltereddata(arr);
    console.log('filtereddata',filtereddata);
  }
    const fetchmydetails = async() => {
        try
        {
            const querySnapshot = await getDocs(
                query(collection(database, 'carereceivers'), where("email", "==", state.email))
                // Use 'query' to create a query with a filter using 'where'
            );
            const arr = [];
            querySnapshot.forEach((doc) => {
                arr.push(doc.data());
            });
            setmydetails(arr[0]);
        }
        catch(e)
        {
            console.log(e);
        }
    }

    useEffect(() =>
    {
        fetchmydetails();
    }
    , []); // Empty dependency array


  const fetchthegivers =async()=> {
   try
   {
    // fetch data from caretakers collection
    
      const querySnapshot = await getDocs(collection(database, 'caretakers'));
      const arr = [];
      querySnapshot.forEach((doc) => {
        
        arr.push(doc.data());
      });
      setRecdata(arr);

    }
    catch(e)
    {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchthegivers();
  }
  , []); // Empty dependency array
  console.log('recdata',recdata);
  const togglerprof = () => {
    setShowProfile(!showProfile); // Toggle the state on button click
  }

  return (
    <div style={styles.maincont}>
      <div>
        <nav style={styles.nav}>
          <h1>You are a Receiver</h1>
          <ul style={styles.ul}>
            <button onClick={togglerprof} style={styles.btn}>Profile</button>
          </ul>
        </nav>
      </div>
      <div style={styles.content}>
        <div style={styles.dashcont}>
          <div style={styles.abovecont}>
            <div style={styles.inputforms}>
              {/* Wrap the form inside the input form container */}
              <form style={styles.form} name="searchForm">
  <div>
    <label style={styles.label } htmlFor="experience">Experience yrs:</label>
    <input type="text" id="experience" name="yearsOfExperience" placeholder="Years of Experience" style={styles.input} />
  </div>
  <div>
    <label style={styles.label } htmlFor="availability">Availability:</label>
    <input type="text" id="availability" name="availability" placeholder="Availability(eg.weekdays)" style={styles.input} />
  </div>
  <div>
    <label style={styles.label } htmlFor="servicesOffered">Services Offered:</label>
    <input type="text" id="servicesOffered" name="servicesOffered" placeholder="Enter offered services" style={styles.input} />
  </div>
  <div>
    <label style={styles.label } htmlFor="qualification">Qualification:</label>
    <input type="text" id="qualification" name="qualification" placeholder="Enter qualification" style={styles.input} />
  </div>
  <div>
    <label style={styles.label } htmlFor="interestsAndHobbies">Interests and Hobbies:</label>
    <input type="text" id="interestsAndHobbies" name="interestsAndHobbies" placeholder="Interests & Hobbies" style={styles.input} />
  </div>
  <div>
    <label style={styles.label } htmlFor="age">Age:</label>
    <input type="text" id="age" name="age" placeholder="Enter age" style={styles.input} />
  </div>
  <div>
    <label style={styles.label } htmlFor="spokenLanguages">Spoken Languages:</label>
    <input type="text" id="spokenLanguages" name="languagesSpoken" placeholder="Enter spoken languages" style={styles.input} />
  </div>
  <button type="button" style={styles.searchButton} onClick={inputsearch}>Search</button> {/* Set type to "button" */}
</form>


            </div>
          </div>
          <div style={styles.tablecont}>
          <RecieverTable tabdat={filtereddata.length!=0 ? filtereddata:recdata } myemail={state.email} />
          

          </div>
        </div>
        <div style={{ ...styles.rprofile, visibility: showProfile ? 'visible' : 'hidden' }}>
          <Rprofile mydetails={mydetails}/>
        </div>
      </div>
      <footer style={styles.footer}>
                 <p>&copy; 2024 Meet My Helper. All rights reserved.</p>
            </footer>
    </div>
  );
}

const styles = {
  maincont: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray',
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    height: '12vh',
  },
  btn: {
    border: '1px solid black',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '9px',
    color: 'black',
    marginRight: '10px',
  },
  content: {
    flex: 1, // Take remaining space
    display: 'flex',
    width: '100%',
    margin: 'auto',
    height: '10vh',
    backgroundColor: '#97a2bd',
  },
  dashcont: {
    // border: '1px solid red',
    // backgroundColor: 'yellow',
    flex: 1, // Take up the remaining space
    // marginTop: '10px',
    height: '80vh',
    width: '100%',
    
  },
  rprofile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    width: '300px',
    height: '80vh',
    transition: 'right 0.5s ease',
    position: 'absolute',
    top: '40px',
    right: '110px',
    zIndex: '100',
    
  },
  tablecont: {
    width: '90%',
    margin: 'auto',
  },
  abovecont: {
    backgroundColor: '#97a2bd',
    height: '25vh',
    marginBottom: '20px',
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexWrap: 'wrap',
    // backgroundColor: '#6b7385',
    backgroundColor: '#97a2bd',
  },
  input: {
    padding: '10px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
    marginBottom: '10px',
    backgroundColor: 'white',
    color: 'black',
    fontSize:'18px',
  },
  
  searchButton: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  inputforms: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    width: '80%',
    margin: 'auto',
    maxWidth: '1200px', // Set maximum width for input forms container
    
  },
  label: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'black',
    marginRight: '10px',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    // padding: '3px',
  },

}

export default DashboardApp;
