import React from 'react';
import { useState ,useEffect} from 'react';


const Rprofile = ({mydetails}) => {
        console.log("mydetails {}", mydetails);
    return (
        <div style={styles.outer}>
            <h1 style={styles.heading}>{mydetails.name}</h1>
            <div style={styles.imageBox}>
                <img src={mydetails.imageUrl?mydetails.imageUrl:"https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"} alt="Profile" style={styles.image} />
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Age</div>
                <div style={styles.value}>{mydetails.age}</div>
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Contact Num</div>
                <div style={styles.value}>{mydetails.telephone}</div>
            </div>
            
            <div style={styles.infoBox}>
                <div style={styles.label}>Allergy</div>
                <div style={styles.value}>{mydetails.allergy}</div>
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Care Preference</div>
                <div style={styles.value}>{mydetails.pref_care}</div>
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Physician</div>
                <div style={styles.value}>{mydetails.physician}</div>
            </div>
            <div style={styles.infoBox}>
                <div style={styles.label}>Insurance</div>
                <div style={styles.value}>{mydetails.health_inssure}</div>
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
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '20px',
        marginTop: '20px',
        boxShadow: '0 0 20px #ccc',
        
        
    },
    heading: {
        marginBottom: '20px',
    fontSize: '30px',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '10px',
        
        
    },
    label: {
        fontWeight: 'bold',
        marginRight: '10px',
        width: '100%',
        display: 'flex',
        position:'relative',
        left: '0',
        fontSize: '15px',
        height: '20px',
        paddingBottom: '10px',
        
        
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

export default Rprofile;
