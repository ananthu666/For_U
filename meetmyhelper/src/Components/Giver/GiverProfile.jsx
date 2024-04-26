import React from 'react';
import Loader from '../Loader';
import {useState,useEffect} from 'react';
import { database } from '../../firebase_config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
const Giverprofile = ({myemail}) => {
    const [giverdet, setgiverdet] = useState([]);
    const FetchUserdata = async () => {
          const arr=[]
        try
        {
            const q = query(collection(database, 'caretakers'), where("email", "==", myemail));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                arr.push(doc.data());
            });
        });
        console.log("Unsubscribe",arr);
        if(arr.length>0)
            setgiverdet(arr);

        return unsubscribe; // Return unsubscribe function to detach listener when component unmounts
        }
        catch(e)
        {
            console.log(e);
        }
        
    }

    useEffect(() => {
        FetchUserdata();

    }, []);
    console.log("Giver data",giverdet[0]);
    console.log("Full name",giverdet[0].fullName);
    return (
        <div style={styles.outer}>
            <h1 style={styles.heading}>{giverdet[0].fullName}</h1>
            <div style={styles.imageBox}>
                <img src={giverdet[0].imageUrl?giverdet[0].imageUrl:"https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"} alt="Profile" style={styles.image} />
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Age:</div>
                <div style={styles.value}>{giverdet[0].age}</div>
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>ContactNumber:</div>
                <div style={styles.value}>{giverdet[0].contactNumber}</div>
            </div>
            
            <div style={styles.infoBox}>
                <div style={styles.label}>Experience:</div>
                <div style={styles.value}>{giverdet[0].servicesOffered}</div>
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Availability:</div>
                <div style={styles.value}>{giverdet[0].availability}</div>
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Qualification:</div>
                <div style={styles.value}>{giverdet[0].qualification}</div>
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Services:</div>
                <div style={styles.value}>{giverdet[0].servicesOffered}</div>
            </div>
            
           
        </div>
    );
}

const styles = {
    outer: {
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
        boxShadow: '0 0 20px #ccc',
        
    },
    heading: {
        marginBottom: '20px',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: '10px',
        
    },
    label: {
        fontWeight: 'bold',
        marginRight: '10px',
        width: '100%',
        display: 'flex',
        position:'relative',
        left: '0',
        fontSize: '20px',
    },
    value: {
        border: '1px solid #ccc',
        padding: '5px',
        borderRadius: '5px',
        width: '100%',
        backgroundColor: '#f5f5f5',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    imageBox: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    image: {
        borderRadius: '80%',
        height: '150px',
    },
};

export default Giverprofile;
