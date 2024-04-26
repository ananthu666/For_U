import { useLocation } from 'react-router-dom';
import Giverprofile from '../../Components/Giver/GiverProfile';

import Giverreviews from '../../Components/Giver/GiverReviews';
import { useState } from 'react';



const Giver_dash = () => {
    const {state}=useLocation();
    const [currentUser] = useState(state.email);
    
    // const [giverDetails, setgiverDetails] = useState([]);
    
      console.log("Current user",currentUser);
      
    return (
        <div style={styles.maincont}>
           <div style={styles.detail}>
            <Giverprofile myemail={currentUser}/>
           </div>
           <div style={styles.review}>
           <Giverreviews giverem={currentUser}/> 
           </div>
        </div>
    );
};

export default Giver_dash;



const styles={
    maincont:{
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    detail:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '20px',
        marginTop: '20px',

        // border: '10px solid red',
    },
    review:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        // border: '10px solid green',
        marginBottom: '20px',
        marginTop: '20px',
    },

}