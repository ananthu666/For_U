

import CaregiverProfile from "../Components/Care_giver_profile";
import { useLocation } from 'react-router-dom';
const Ctp=()=>
{
    const { state } = useLocation();
    // console.log("state1", state);
    return(
        <div>
           <nav style={styles.nav}>
           Meet My Helper
           </nav>
           <div style={styles.caregiver}>
                <CaregiverProfile eandp={state}/>
           </div>
           <footer style={styles.footer}>
                <p>&copy; 2024 Meet My Helper. All rights reserved.</p>
           </footer>
        </div>
    )
}

export default Ctp;

const styles = 
{
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        height: '6vh',
        color:"black",
        fontSize: '50px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    caregiver: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '94vh',
        // backgroundColor: 'red',

    },
    footer: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
    },

}