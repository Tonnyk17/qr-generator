import React, { useEffect, useState } from "react";
import {Input} from './Input';
import '../styles/Forms.css';
import { Button } from "./Button";
import { content, createTicket } from "../functions";
import { Icon } from './Icon';
import { TicketPage } from "./TicketPage";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../firebase";
import { ref, set, get,child, getDatabase} from "firebase/database";

export const Forms = () => {
    const [ticketData, setTicketData] = useState();
    const [isCreated, setIsCreated] = useState(false);
    const [isLimited, setIsLimited] = useState(false);
    const [qrData, setQrData] = useState();
    const uuid = uuidv4()
 
   /* useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'users/')).then(async(snapshot) => {
            if(snapshot.size > 302){  
                setIsLimited(true);  
            }
        })
    },[])*/

    const writeUserData =(userId, name, phone, referal, isCheck) => {
        set(ref(db, `users/${userId}`),{
          id:userId,
          username: name,
          phone: phone,
          referal: referal,
          isCheck: isCheck
        });
      }
    const [userData, setUserData] = useState({
        name:'',
        phone:'',
        referal:''
    });
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setTicketData(userData);
    }, [userData])

    const handleClick = async() => {
        if(ticketData.name && ticketData.phone){
            const qr = await createTicket(uuid)
            setQrData(qr);
            setIsCreated(true)
            writeUserData(uuid,
                        ticketData.name,
                        ticketData.phone,
                        ticketData.referal,
                        false)
        }
        else{
            alert('Falta información en el formulario')
        }
    }

    return(
        <>
            {
                isCreated && qrData ? 
                <TicketPage userData={userData} qrData={qrData}/>
                :
                isLimited ? 
                <div className='message-limited-container'>
                    <h3 className="limited-message">Lo sentimos. Se ha llegado al limite de invitados :(</h3>
                </div> 
                :
                <form className="form-component">
                <Icon/>
                {
                    content.inputs.map((item, i)=> (
                        <Input 
                            type={item.type} 
                            placeholder={item.placeholder} 
                            value={item.value}
                            labelText={item.labelText}
                            key={i}
                            onChange={handleChange}
                        />
                    ))
                }
                
                <Button 
                    buttonText={'Generar boleto'} 
                    onClick={handleClick}
                />
               
                </form>
            }
        </>
    )
}