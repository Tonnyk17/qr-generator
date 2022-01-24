import React, { useEffect, useState } from "react";
import {Input} from './Input';
import '../styles/Forms.css';
import { Button } from "./Button";
import { content, createTicket } from "../functions";
import { Icon } from './Icon';
import { TicketPage } from "./TicketPage";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../firebase";
import { ref, set, get,child, getDatabase,push} from "firebase/database";

export const Forms = () => {
    const [ticketData, setTicketData] = useState();
    const [isCreated, setIsCreated] = useState(false);
    const [isLimited, setIsLimited] = useState(false);
    const [qrData, setQrData] = useState();
    const uuid = uuidv4()
 
    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'users/')).then(async(snapshot) => {
            if(snapshot.size > 150){  
                setIsLimited(true);  
            }
        })
    },[])

    const writeUserData =(userId, name, email, phone, referal, isCheck) => {
        set(ref(db, `users/${userId}`),{
          id:userId,
          username: name,
          email: email,
          phone: phone,
          referal: referal,
          isCheck: isCheck
        });
      }
    const [userData, setUserData] = useState({
        name:'',
        email:'',
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

        const qr = await createTicket(uuid)
                setQrData(qr);
                setIsCreated(true)
                writeUserData(uuid,
                            ticketData.name,
                            ticketData.email,
                            ticketData.phone,
                            ticketData.referal,
                            false)
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