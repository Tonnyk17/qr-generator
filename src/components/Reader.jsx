import React,{useState} from "react";
import QrReader from 'react-qr-reader';
import '../styles/Reader.css';
import { db } from "../firebase";
import { getDatabase, ref, child, get} from "firebase/database";

export const Reader = () => {
    const [data,setData] = useState();
    const [isVerified, setIsverified] = useState('');

    const searchData = (id) => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${id}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setIsverified('Invitado verificado')
                    setData(snapshot.val())
                } else {
                    setIsverified('No se encontró al invitado')
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleScanWebCam = (result) => {
        if (result){
            searchData(result)
        }
       }
       const handleErrorWebCam = (error) => {
        console.log(error);
      }
    return(
        <>
            <div className="reader-container">
                <QrReader
                    delay={300}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                    className="reader"
                />
                <div className="reader-message-container">
                    <h3 className="reader-message">{isVerified}</h3>
                    {
                        data ? 
                        <div>
                            <p className="user-name">{data.username}</p>
                            <p className="user-phone">{data.phone}</p>
                            <p className="user-email">{data.email}</p>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            
        </>
    )
}