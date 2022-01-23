import React,{useState} from "react";
import QrReader from 'react-qr-reader';

export const Reader = () => {
    const [data,setData] = useState();
    const handleScanWebCam = (result) => {
        if (result){
            setData(result);
        }
       }
       const handleErrorWebCam = (error) => {
        console.log(error);
      }
    return(
        <>
            <QrReader
                 delay={300}
                 style={{width: '100%'}}
                 onError={handleErrorWebCam}
                 onScan={handleScanWebCam}
            />
            <p>{data}</p>
        </>
    )
}