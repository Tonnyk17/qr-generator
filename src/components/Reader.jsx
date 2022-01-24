import React,{useState} from "react";
import QrReader from 'react-qr-reader';
import '../styles/Reader.css';
import { getDatabase, ref, child, get, update} from "firebase/database";

export const Reader = () => {
    const [data,setData] = useState();
    const [isVerified, setIsverified] = useState('');

    const searchData = (id) => {
        const dbRef = ref(getDatabase());
        const updates = {};
        updates[`users/${id}/isCheck`] = true;
        get(child(dbRef, `users/${id}`))
            .then((snapshot) => {
                if (snapshot.exists) {
                    setIsverified('Invitado verificado')
                    setData(snapshot.val())
                } else {
                    setIsverified('No se encontró al invitado')
                    setData('')
                }
            })
            .catch((error) => {
                console.error(error);
            });
        update(dbRef, updates)
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
           <div className="container">
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
           </div>
            
        </>
    )
}