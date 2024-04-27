import { useLocation } from 'react-router-dom';
import Giverprofile from '../../Components/Giver/GiverProfile';
import Giverreviews from '../../Components/Giver/GiverReviews';
import GiverApoints from '../../Components/Giver/GiverApoints';
import { useState } from 'react';
import { useEffect } from 'react';
import { database } from '../../firebase_config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const Giver_dash = () => {
    const { state } = useLocation();
    const [currentUser] = useState(state.email);
    const [activePage, setActivePage] = useState('profile'); // State to track active page

    const [appoints, setapoints] = useState([]);

    const fetchapoints = async () => {
        try {
            const q = query(collection(database, 'appointments'), where('care_taker_email', '==', currentUser));
            const unsubscribe = await onSnapshot(q, (snapshot) => {
                const arr = [];
                snapshot.forEach((doc) => {
                    arr.push(doc.data());
                });
                setapoints(arr);
            });
            return unsubscribe;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchapoints();
    }, []);

    const handlePageChange = (pageName) => {
        setActivePage(pageName);
    };

    return (
        <div style={styles.maincont}>
            <div style={styles.buttons}>
                <button style={styles.btn} onClick={() => handlePageChange('profile')}>Profile</button>
                <button style={styles.btn} onClick={() => handlePageChange('reviews')}>Reviews</button>
                <button style={styles.btn} onClick={() => handlePageChange('appointments')}>Appointments</button>
            </div>
            <div className="pages-container">
                {/* Profile Page */}
                {activePage === 'profile' && (
                    <div key="profile" style={{ ...styles.page, ...styles.detail }}>
                        <Giverprofile myemail={currentUser} />
                    </div>
                )}
                {/* Reviews Page */}
                {activePage === 'reviews' && (
                    <div key="reviews" style={{ ...styles.page, ...styles.review }}>
                        <Giverreviews giverem={currentUser} />
                    </div>
                )}
                {/* Appointments Page */}
                {activePage === 'appointments' && (
                    <div key="appointments" style={{ ...styles.page, ...styles.apoint }}>
                        <GiverApoints giverem={currentUser} />
                    </div>
                )}
            </div>
            {/* Buttons to switch between pages */}
            
        </div>
    );
};

export default Giver_dash;

const styles = {
    maincont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        // backgroundColor: '#f0f0f0',
        overflowX: 'scroll',
        // backgroundColor:"greeen"
    },
    page: {
        // backgroundColor:"yellow",
        width: '100%',
        transition: 'transform 0.3s ease-in-out',
        // height:'100%'
    },
    detail: {
        transform: 'translateX(0)',
        position: 'absolute',
        top: '15%',
        left: '10%',
        width:"80%"
    },
    review: {
        transform: 'translateX(-100%)',
        position: 'absolute',
        top: '10%',
        left: '100%',
    },
    apoint: {
        transform: 'translateX(-200%)',
        position: 'absolute',
        top: '6%',
        left: '197%',
        
    },
    buttons: {
        
        backgroundColor:"#cef0ef",
        position:"fixed",
        top:'0',
        width:"100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '10%',
    },
    btn: {
        backgroundColor: '#443157',
        color: 'white',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
    },
};